import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import QuotationEditor from "./components/QuotationEditor";
import { api } from "./api";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [quotations, setQuotations] = useState([]);
  const [selectedQuotationId, setSelectedQuotationId] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    api
      .listClients()
      .then((list) => {
        setClients(list);
        if (list.length > 0) setSelectedClientId(list[0].id);
      })
      .catch((e) => setLoadError(e.message));
  }, []);

  useEffect(() => {
    if (!selectedClientId) {
      setQuotations([]);
      setSelectedQuotationId(null);
      return;
    }
    api.listQuotationsForClient(selectedClientId).then((list) => {
      setQuotations(list);
      setSelectedQuotationId(list.length > 0 ? list[0].id : null);
    });
  }, [selectedClientId]);

  async function refreshQuotations(clientId, pickId) {
    const list = await api.listQuotationsForClient(clientId);
    setQuotations(list);
    if (pickId !== undefined) setSelectedQuotationId(pickId);
  }

  async function handleCreateClient(data) {
    const client = await api.createClient(data);
    setClients((prev) => [...prev, client]);
    setSelectedClientId(client.id);
  }

  async function handleDeleteClient(clientId) {
    await api.deleteClient(clientId);
    const remaining = clients.filter((c) => c.id !== clientId);
    setClients(remaining);
    setSelectedClientId(remaining[0]?.id ?? null);
  }

  async function handleUpdateClientTheme(clientId, patch) {
    const updated = await api.updateClient(clientId, patch);
    setClients((prev) => prev.map((c) => (c.id === clientId ? updated : c)));
  }

  async function handleSaveQuotation(quotationId, form) {
    const payload = { ...form, client_id: selectedClientId };
    if (quotationId) {
      await api.updateQuotation(quotationId, payload);
      await refreshQuotations(selectedClientId, quotationId);
    } else {
      const created = await api.createQuotation(payload);
      await refreshQuotations(selectedClientId, created.id);
    }
  }

  async function handleDeleteQuotation(quotationId) {
    await api.deleteQuotation(quotationId);
    await refreshQuotations(selectedClientId, undefined);
  }

  async function handleGeneratePdf(quotationId) {
    setGenerating(true);
    try {
      const blob = await api.downloadPdf(quotationId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const quote = quotations.find((q) => q.id === quotationId);
      const name = quote ? quote.title.replace(/\s+/g, "_") : "quotation";
      a.href = url;
      a.download = `${name}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert(`Couldn't generate PDF: ${e.message}`);
    } finally {
      setGenerating(false);
    }
  }

  const selectedClient = clients.find((c) => c.id === selectedClientId);

  if (loadError) {
    return (
      <div className="api-error">
        <h2>Can't reach the API</h2>
        <p>{loadError}</p>
        <p>Check that the backend is running and VITE_API_URL is set correctly.</p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Sidebar
        clients={clients}
        selectedClientId={selectedClientId}
        onSelect={setSelectedClientId}
        onCreateClient={handleCreateClient}
        onDeleteClient={handleDeleteClient}
      />
      {selectedClient ? (
        <QuotationEditor
          client={selectedClient}
          quotations={quotations}
          selectedQuotationId={selectedQuotationId}
          onSelectQuotation={setSelectedQuotationId}
          onNewQuotationDraft={() => setSelectedQuotationId(null)}
          onSaveQuotation={handleSaveQuotation}
          onDeleteQuotation={handleDeleteQuotation}
          onGeneratePdf={handleGeneratePdf}
          onUpdateClientTheme={handleUpdateClientTheme}
          generating={generating}
        />
      ) : (
        <main className="editor empty-state">
          <p>Add a client on the left to get started.</p>
        </main>
      )}
    </div>
  );
}

