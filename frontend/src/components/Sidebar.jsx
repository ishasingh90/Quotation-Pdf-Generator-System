import { useState } from "react";

const DEFAULT_THEME = { theme_navy: "#16213f", theme_accent: "#e8962e", theme_accent2: "#3a8fb7" };

export default function Sidebar({ clients, selectedClientId, onSelect, onCreateClient, onDeleteClient }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onCreateClient({ name: name.trim(), logo_text: name.trim().toUpperCase(), ...DEFAULT_THEME });
    setName("");
    setShowForm(false);
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-accent">ARKOSE</span>
        <span className="brand-sub">INFOSOFT</span>
      </div>
      <div className="sidebar-section-label">CLIENTS</div>

      <ul className="client-list">
        {clients.map((c) => (
          <li
            key={c.id}
            className={`client-item ${c.id === selectedClientId ? "active" : ""}`}
            onClick={() => onSelect(c.id)}
          >
            <span className="client-dot" style={{ background: c.theme_accent }} />
            <span className="client-name">{c.name}</span>
            <button
              className="client-delete"
              title="Delete client"
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(`Delete ${c.name} and all their quotations?`)) onDeleteClient(c.id);
              }}
            >
              ×
            </button>
          </li>
        ))}
        {clients.length === 0 && <li className="empty-hint">No clients yet</li>}
      </ul>

      {showForm ? (
        <form className="new-client-form" onSubmit={submit}>
          <input
            autoFocus
            placeholder="Client name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="form-row">
            <button type="submit" className="btn btn-primary">Add</button>
            <button type="button" className="btn btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <button className="btn btn-add-client" onClick={() => setShowForm(true)}>
          + New client
        </button>
      )}
    </aside>
  );
}
