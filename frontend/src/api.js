const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res;
}

export const api = {
  // Clients
  listClients: () => request("/clients").then((r) => r.json()),
  createClient: (data) =>
    request("/clients", { method: "POST", body: JSON.stringify(data) }).then((r) => r.json()),
  updateClient: (id, data) =>
    request(`/clients/${id}`, { method: "PATCH", body: JSON.stringify(data) }).then((r) => r.json()),
  deleteClient: (id) => request(`/clients/${id}`, { method: "DELETE" }),

  // Quotations
  listQuotationsForClient: (clientId) =>
    request(`/quotations/by-client/${clientId}`).then((r) => r.json()),
  getQuotation: (id) => request(`/quotations/${id}`).then((r) => r.json()),
  createQuotation: (data) =>
    request("/quotations", { method: "POST", body: JSON.stringify(data) }).then((r) => r.json()),
  updateQuotation: (id, data) =>
    request(`/quotations/${id}`, { method: "PATCH", body: JSON.stringify(data) }).then((r) => r.json()),
  deleteQuotation: (id) => request(`/quotations/${id}`, { method: "DELETE" }),

  // PDF — returns a Blob for download
  async downloadPdf(quotationId) {
    const res = await request(`/quotations/${quotationId}/pdf`);
    return res.blob();
  },
};

