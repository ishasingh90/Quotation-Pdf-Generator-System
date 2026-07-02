import { useEffect, useState } from "react";

const IMAGE_PRESETS = [
  { label: "Solar Panels", url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop" },
  { label: "Office Meeting", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop" },
  { label: "Workspace Tech", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop" },
  { label: "Social Media", url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop" },
];

export function getDefaultProposalPages(clientName = "Solar Sparkle Solutions") {
  return [
    {
      id: "cover-1",
      type: "cover",
      title: "Cover Page",
      cover_title_main: "Social Media",
      cover_title_accent: "Marketing",
      cover_subtitle: "Proposal for Social Media Marketing",
      cover_presentation_for: clientName,
      cover_image_url: IMAGE_PRESETS[0].url,
    },
    {
      id: "intro-2",
      type: "content",
      title: "Budget Proposal",
      sections: [
        {
          id: "sec-1",
          title: "Introduction:",
          type: "text",
          text: "Arkose Infosoft is a digital marketing and technology solutions company dedicated to helping businesses grow their online presence, attract potential customers, and build strong brand recognition. Through strategic social media marketing, creative content development, and audience engagement, we help businesses connect with their target market effectively.\n\nOur goal is to create meaningful engagement, enhance brand visibility, and support long-term business growth through a professional and result-oriented social media strategy.",
        },
        {
          id: "sec-2",
          title: "Services Included:",
          type: "bullets",
          list_items: [
            "Content Strategy & Planning",
            "Reels & Creative Content Creation",
            "Social Media Management",
            "Audience Engagement",
            "Performance Tracking & Reporting",
            "Brand Awareness & Local Market Growth",
          ],
        },
      ],
    },
    {
      id: "obj-3",
      type: "content",
      title: "Budget Proposal",
      sections: [
        {
          id: "sec-3",
          title: "Objective:",
          type: "text",
          text: `Build a strong digital presence for ${clientName}, increase brand awareness, generate quality enquiries, and educate customers about the benefits of solar energy through strategic social media marketing.`,
        },
        {
          id: "sec-4",
          title: "Goals:",
          type: "bullets",
          list_items: [
            "Increase brand awareness",
            "Build trust and brand authority",
            "Increase engagement on Instagram & Facebook",
            "Drive website traffic and product discovery",
            "Improve customer retention and loyalty",
            "Educate customers about solar savings and benefits",
          ],
        },
        {
          id: "sec-5",
          title: "Target Audience:",
          type: "bullets",
          list_items: [
            "Homeowners looking to reduce electricity bills",
            "Residential property owners",
            "Commercial buildings & office owners",
            "Factories and industrial businesses",
            "Builders, architects & real estate developers",
            "Schools, hospitals & institutions",
            "Environment-conscious customers",
            "Businesses seeking sustainable energy solutions",
          ],
        },
      ],
    },
    {
      id: "deliv-4",
      type: "deliverables",
      title: "Budget Proposal",
      total_posts_text: "Total Content: 25 Posts Per Month",
      deliverable_groups: [
        {
          id: "dg-1",
          title: "15 Reels",
          items: [
            "Influencer Reels (Professional Shoot Day)",
            "Brand Awareness & Educational Reels",
          ],
        },
        {
          id: "dg-2",
          title: "5 Carousel Posts",
          items: [
            "Solar Installation Process Explained",
            "Electricity Bill Savings Calculator",
            "Government Subsidy & Benefits Information",
            "Solar Myths vs Facts",
          ],
        },
        {
          id: "dg-3",
          title: "5 Static Posts",
          items: [
            "Customer Testimonial & Success Story",
            "Promotional Offer / Seasonal Campaign",
            "Brand Achievement & Trust Building Post",
          ],
        },
      ],
    },
    {
      id: "strat-5",
      type: "content",
      title: "Budget Proposal",
      sections: [
        {
          id: "sec-6",
          title: "Social Media Growth Strategy:",
          type: "bullets",
          list_items: [
            "Consistent brand-focused content creation",
            "Solar project showcases and installation updates",
            "Educational posts about solar energy benefits",
            "Customer success stories and testimonials",
            "Reels and short-form video marketing",
            "Strategic content planning for organic growth",
          ],
        },
        {
          id: "sec-7",
          title: "Performance Metrics:",
          type: "bullets",
          list_items: [
            "KPIs to Measure Success:",
            "Follower Growth Rate",
            "Engagement Rate (likes, shares, comments)",
            "Inquiries",
            "Video Views & Watch Time",
          ],
        },
      ],
    },
    {
      id: "plat-6",
      type: "platforms",
      title: "Budget Proposal",
      platforms: [
        {
          id: "p-1",
          name: "INSTAGRAM:",
          items: [
            "Insta Profile Optimize",
            "Content Strategy & Planning",
            "Analytics & Reporting",
            "Trending Hashtag Research",
          ],
        },
        {
          id: "p-2",
          name: "FACEBOOK:",
          items: [
            "Facebook Profile Optimize",
            "Content Strategy & Planning",
            "Analytics & Reporting",
            "Trending Hashtag Research",
          ],
        },
        {
          id: "p-3",
          name: "YOUTUBE:",
          items: [
            "Youtube Profile Optimize",
            "Content Strategy & Planning",
            "Analytics & Reporting",
            "Trending Hashtag Research",
          ],
        },
      ],
      price_label: "G. Total",
      price_value: "₹12,999 / Month",
      payment_label: "For Payment :",
      payment_details: [
        "Account number: 1962100100005409",
        "IFSC Code: PUNB0196210",
      ],
    },
    {
      id: "terms-7",
      type: "payment_terms",
      title: "Budget Proposal",
      final_note: "At Arkose Infosoft, we believe social media marketing is more than just posting content—it is about building a strong brand presence, creating customer trust, and generating meaningful engagement.\n\nThrough consistent content creation, engaging reels, project showcases, customer testimonials, and audience interaction, we aim to strengthen Solar Sparkle Solutions' online presence and support its long-term business growth.",
      milestones: [
        { id: "m-1", name: "Advance Payment", payment: "50% before project commencement" },
        { id: "m-2", name: "Final Payment", payment: "50% after completion and before final handover" },
      ],
      contact_details: [
        "+91 9839591207",
        "www.arkoseinfosoft.in",
        "117/44, near RTO Office Sarvodaya Nagar, Model Town, Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005",
      ],
      signatory_text: "Client Authorized Signatory (Signature & Seal)",
    },
  ];
}

const BLANK_QUOTATION = {
  title: "",
  pages: [],
};

export default function QuotationEditor({
  client,
  quotations,
  selectedQuotationId,
  onSelectQuotation,
  onNewQuotationDraft,
  onSaveQuotation,
  onDeleteQuotation,
  onGeneratePdf,
  onUpdateClientTheme,
  generating,
}) {
  const [form, setForm] = useState(BLANK_QUOTATION);
  const [saving, setSaving] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeQuotation = quotations.find((q) => q.id === selectedQuotationId);

  // Set local state when selected quotation changes
  useEffect(() => {
    if (activeQuotation) {
      setForm({
        title: activeQuotation.title || "",
        pages: activeQuotation.pages || [],
      });
      setActivePageIndex(0);
    } else {
      // Prepopulate new draft with Solar Sparkle Solutions proposal template as a start!
      setForm({
        title: "Social Media Marketing Proposal",
        pages: getDefaultProposalPages(client.name),
      });
      setActivePageIndex(0);
    }
  }, [selectedQuotationId, activeQuotation, client]);

  async function handleSave() {
    setSaving(true);
    try {
      await onSaveQuotation(selectedQuotationId, form);
    } finally {
      setSaving(false);
    }
  }

  // Page reordering and modifications
  function updatePage(index, patch) {
    setForm((prev) => {
      const nextPages = [...prev.pages];
      nextPages[index] = { ...nextPages[index], ...patch };
      return { ...prev, pages: nextPages };
    });
  }

  function addPage(type) {
    const newPage = {
      id: "page-" + Date.now(),
      type,
      title: "Budget Proposal",
    };

    if (type === "cover") {
      newPage.title = "Cover Page";
      newPage.cover_title_main = "Main Title";
      newPage.cover_title_accent = "Accent";
      newPage.cover_subtitle = "Proposal Description";
      newPage.cover_presentation_for = client.name;
      newPage.cover_image_url = IMAGE_PRESETS[1].url;
    } else if (type === "content") {
      newPage.sections = [{ id: "sec-" + Date.now(), title: "Section Title:", type: "text", text: "" }];
    } else if (type === "deliverables") {
      newPage.total_posts_text = "Total Deliverables:";
      newPage.deliverable_groups = [{ id: "dg-" + Date.now(), title: "New Group", items: [""] }];
    } else if (type === "platforms") {
      newPage.platforms = [{ id: "p-" + Date.now(), name: "PLATFORM NAME:", items: [""] }];
      newPage.price_label = "G. Total";
      newPage.price_value = "";
      newPage.payment_label = "For Payment :";
      newPage.payment_details = [""];
    } else if (type === "payment_terms") {
      newPage.final_note = "";
      newPage.milestones = [{ id: "m-" + Date.now(), name: "First Payment", payment: "100%" }];
      newPage.contact_details = [""];
      newPage.signatory_text = "Client Authorized Signatory (Signature & Seal)";
    }

    setForm((prev) => {
      const nextPages = [...prev.pages, newPage];
      return { ...prev, pages: nextPages };
    });
    setActivePageIndex(form.pages.length);
  }

  function deletePage(index) {
    if (form.pages.length <= 1) {
      alert("A quotation must have at least 1 page.");
      return;
    }
    setForm((prev) => {
      const nextPages = prev.pages.filter((_, i) => i !== index);
      return { ...prev, pages: nextPages };
    });
    setActivePageIndex((prev) => Math.max(0, Math.min(prev, form.pages.length - 2)));
  }

  function movePage(index, dir) {
    const dest = index + dir;
    if (dest < 0 || dest >= form.pages.length) return;
    setForm((prev) => {
      const nextPages = [...prev.pages];
      const temp = nextPages[index];
      nextPages[index] = nextPages[dest];
      nextPages[dest] = temp;
      return { ...prev, pages: nextPages };
    });
    setActivePageIndex(dest);
  }

  const activePage = form.pages[activePageIndex];

  return (
    <main className="editor quotation-editor-deck">
      <div className="editor-topbar">
        <div className="client-heading">
          <div className="client-info-fields">
            <h1 className="client-name-title">{client.name}</h1>
            <div className="client-logo-inputs">
              <label className="logo-input-label">
                Logo Text
                <input
                  type="text"
                  value={client.logo_text || ""}
                  placeholder="ARKOSE INFOSOFT"
                  onChange={(e) => onUpdateClientTheme(client.id, { logo_text: e.target.value })}
                />
              </label>
              <label className="logo-input-label">
                Logo URL (Img)
                <input
                  type="text"
                  value={client.logo_url || ""}
                  placeholder="https://...png"
                  onChange={(e) => onUpdateClientTheme(client.id, { logo_url: e.target.value })}
                />
              </label>
            </div>
          </div>
          <div className="theme-swatches">
            {["theme_navy", "theme_accent", "theme_accent2"].map((key) => (
              <label key={key} className="swatch" title={key.replace("theme_", "").replace("2", " 2")}>
                <input
                  type="color"
                  value={client[key]}
                  onChange={(e) => onUpdateClientTheme(client.id, { [key]: e.target.value })}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="calendar-tabs">
          {quotations.map((q) => (
            <button
              key={q.id}
              className={`tab ${q.id === selectedQuotationId ? "active" : ""}`}
              onClick={() => onSelectQuotation(q.id)}
            >
              {q.title || "Untitled Proposal"}
            </button>
          ))}
          <button className="tab tab-new" onClick={onNewQuotationDraft}>
            + New Proposal
          </button>
        </div>
      </div>

      <div className="editor-body deck-container">
        <div className="deck-fields-row">
          <label className="proposal-title-label">
            Proposal Document Title
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="e.g. Social Media Marketing Proposal"
            />
          </label>
        </div>

        <div className="deck-workspace">
          {/* Left slide deck list */}
          <div className="deck-slides-sidebar">
            <div className="slides-list-header">PAGES / SLIDES</div>
            <div className="slides-scroll-container">
              {form.pages.map((page, idx) => (
                <div
                  key={page.id || idx}
                  className={`slide-thumbnail ${idx === activePageIndex ? "active" : ""}`}
                  onClick={() => setActivePageIndex(idx)}
                >
                  <div className="slide-num">{idx + 1}</div>
                  <div className="slide-summary">
                    <div className="slide-title-thumb">{page.title || "Cover"}</div>
                    <div className="slide-type-badge">{page.type.replace("_", " ")}</div>
                  </div>
                  <div className="slide-thumb-actions" onClick={(e) => e.stopPropagation()}>
                    <button type="button" onClick={() => movePage(idx, -1)} disabled={idx === 0}>
                      ▲
                    </button>
                    <button type="button" onClick={() => movePage(idx, 1)} disabled={idx === form.pages.length - 1}>
                      ▼
                    </button>
                    <button type="button" className="delete-slide-btn" onClick={() => deletePage(idx)}>
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="add-slide-area">
              <select
                className="add-slide-select"
                onChange={(e) => {
                  if (e.target.value) {
                    addPage(e.target.value);
                    e.target.value = "";
                  }
                }}
              >
                <option value="">+ Add Page...</option>
                <option value="cover">Cover Page</option>
                <option value="content">Content Page (Text/Lists)</option>
                <option value="deliverables">Deliverables Page</option>
                <option value="platforms">Platforms & Pricing</option>
                <option value="payment_terms">Payment & Contacts</option>
              </select>
            </div>
          </div>

          {/* Center Form Slide Editor */}
          <div className="slide-detail-editor">
            {activePage ? (
              <div className="slide-form">
                <h3 className="slide-editor-header">
                  Editing Page {activePageIndex + 1}: <span className="highlight-type">{activePage.type.toUpperCase()}</span>
                </h3>

                <div className="form-group">
                  <label>
                    Page Header Bar Title (Shown on inside pages)
                    <input
                      type="text"
                      value={activePage.title || ""}
                      onChange={(e) => updatePage(activePageIndex, { title: e.target.value })}
                      placeholder="e.g. Budget Proposal"
                    />
                  </label>
                </div>

                {/* COVER PAGE EDITOR */}
                {activePage.type === "cover" && (
                  <div className="sub-form">
                    <div className="form-grid-2">
                      <label>
                        Title (Main Word)
                        <input
                          type="text"
                          value={activePage.cover_title_main || ""}
                          onChange={(e) => updatePage(activePageIndex, { cover_title_main: e.target.value })}
                          placeholder="Social Media"
                        />
                      </label>
                      <label>
                        Title (Accent Word)
                        <input
                          type="text"
                          value={activePage.cover_title_accent || ""}
                          onChange={(e) => updatePage(activePageIndex, { cover_title_accent: e.target.value })}
                          placeholder="Marketing"
                        />
                      </label>
                    </div>
                    <label>
                      Subtitle
                      <input
                        type="text"
                        value={activePage.cover_subtitle || ""}
                        onChange={(e) => updatePage(activePageIndex, { cover_subtitle: e.target.value })}
                        placeholder="Proposal for Social Media Marketing"
                      />
                    </label>
                    <label>
                      Presentation Target Client
                      <input
                        type="text"
                        value={activePage.cover_presentation_for || ""}
                        onChange={(e) => updatePage(activePageIndex, { cover_presentation_for: e.target.value })}
                        placeholder="Solar Sparkle Solutions"
                      />
                    </label>
                    <div className="image-url-picker">
                      <label>
                        Cover Illustration Image URL
                        <input
                          type="text"
                          value={activePage.cover_image_url || ""}
                          onChange={(e) => updatePage(activePageIndex, { cover_image_url: e.target.value })}
                          placeholder="Paste Unsplash or static image URL"
                        />
                      </label>
                      <div className="presets-list">
                        <span className="presets-label">Presets:</span>
                        {IMAGE_PRESETS.map((p) => (
                          <button
                            key={p.label}
                            type="button"
                            className="btn-preset-url"
                            onClick={() => updatePage(activePageIndex, { cover_image_url: p.url })}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTENT PAGE EDITOR */}
                {activePage.type === "content" && (
                  <div className="sub-form">
                    <div className="sections-list-editor">
                      {(activePage.sections || []).map((sec, secIdx) => (
                        <div key={sec.id || secIdx} className="section-block-card">
                          <div className="section-card-header">
                            <span>Section {secIdx + 1}</span>
                            <div className="section-card-actions">
                              <button
                                type="button"
                                onClick={() => {
                                  const nextSecs = [...activePage.sections];
                                  if (secIdx > 0) {
                                    [nextSecs[secIdx], nextSecs[secIdx - 1]] = [nextSecs[secIdx - 1], nextSecs[secIdx]];
                                    updatePage(activePageIndex, { sections: nextSecs });
                                  }
                                }}
                                disabled={secIdx === 0}
                              >
                                ▲
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const nextSecs = [...activePage.sections];
                                  if (secIdx < nextSecs.length - 1) {
                                    [nextSecs[secIdx], nextSecs[secIdx + 1]] = [nextSecs[secIdx + 1], nextSecs[secIdx]];
                                    updatePage(activePageIndex, { sections: nextSecs });
                                  }
                                }}
                                disabled={secIdx === (activePage.sections || []).length - 1}
                              >
                                ▼
                              </button>
                              <button
                                type="button"
                                className="remove-sec-btn"
                                onClick={() => {
                                  const nextSecs = activePage.sections.filter((_, sIdx) => sIdx !== secIdx);
                                  updatePage(activePageIndex, { sections: nextSecs });
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>

                          <div className="form-grid-2">
                            <label>
                              Section Banner Title
                              <input
                                type="text"
                                value={sec.title || ""}
                                onChange={(e) => {
                                  const nextSecs = [...activePage.sections];
                                  nextSecs[secIdx].title = e.target.value;
                                  updatePage(activePageIndex, { sections: nextSecs });
                                }}
                                placeholder="e.g. Introduction:"
                              />
                            </label>
                            <label>
                              Section Layout Type
                              <select
                                value={sec.type}
                                onChange={(e) => {
                                  const nextSecs = [...activePage.sections];
                                  nextSecs[secIdx].type = e.target.value;
                                  if (e.target.value === "bullets" && !nextSecs[secIdx].list_items) {
                                    nextSecs[secIdx].list_items = [""];
                                  }
                                  updatePage(activePageIndex, { sections: nextSecs });
                                }}
                              >
                                <option value="text">Paragraph Text</option>
                                <option value="bullets">Bullet List</option>
                              </select>
                            </label>
                          </div>

                          {sec.type === "text" ? (
                            <label>
                              Paragraph Text Content
                              <textarea
                                rows={4}
                                value={sec.text || ""}
                                onChange={(e) => {
                                  const nextSecs = [...activePage.sections];
                                  nextSecs[secIdx].text = e.target.value;
                                  updatePage(activePageIndex, { sections: nextSecs });
                                }}
                                placeholder="Arkose Infosoft is dedicated to helping..."
                              />
                            </label>
                          ) : (
                            <div className="list-items-editor">
                              <label>Bullet Points</label>
                              {(sec.list_items || []).map((bullet, bIdx) => (
                                <div key={bIdx} className="list-item-row">
                                  <input
                                    type="text"
                                    value={bullet}
                                    onChange={(e) => {
                                      const nextSecs = [...activePage.sections];
                                      nextSecs[secIdx].list_items[bIdx] = e.target.value;
                                      updatePage(activePageIndex, { sections: nextSecs });
                                    }}
                                    placeholder="Enter bullet point"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const nextSecs = [...activePage.sections];
                                      nextSecs[secIdx].list_items = nextSecs[secIdx].list_items.filter((_, i) => i !== bIdx);
                                      updatePage(activePageIndex, { sections: nextSecs });
                                    }}
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                              <button
                                type="button"
                                className="btn-add-item"
                                onClick={() => {
                                  const nextSecs = [...activePage.sections];
                                  nextSecs[secIdx].list_items.push("");
                                  updatePage(activePageIndex, { sections: nextSecs });
                                }}
                              >
                                + Add Bullet Point
                              </button>
                            </div>
                          )}
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-add-row"
                        onClick={() => {
                          const nextSecs = [
                            ...(activePage.sections || []),
                            { id: "sec-" + Date.now(), title: "New Section", type: "text", text: "" },
                          ];
                          updatePage(activePageIndex, { sections: nextSecs });
                        }}
                      >
                        + Add Section block
                      </button>
                    </div>
                  </div>
                )}

                {/* DELIVERABLES PAGE EDITOR */}
                {activePage.type === "deliverables" && (
                  <div className="sub-form">
                    <label>
                      Total Posts Headline Bar
                      <input
                        type="text"
                        value={activePage.total_posts_text || ""}
                        onChange={(e) => updatePage(activePageIndex, { total_posts_text: e.target.value })}
                        placeholder="Total Content: 25 Posts Per Month"
                      />
                    </label>

                    <div className="deliverable-groups-list">
                      <label style={{ marginBottom: "2px" }}>Deliverable Columns/Cards</label>
                      {(activePage.deliverable_groups || []).map((group, gIdx) => (
                        <div key={group.id || gIdx} className="group-card-container">
                          <div className="group-card-head">
                            <input
                              type="text"
                              className="group-title-input"
                              value={group.title}
                              onChange={(e) => {
                                const nextGroups = [...activePage.deliverable_groups];
                                nextGroups[gIdx].title = e.target.value;
                                updatePage(activePageIndex, { deliverable_groups: nextGroups });
                              }}
                              placeholder="Group Title (e.g. 15 Reels)"
                            />
                            <button
                              type="button"
                              className="remove-sec-btn"
                              onClick={() => {
                                const nextGroups = activePage.deliverable_groups.filter((_, idx) => idx !== gIdx);
                                updatePage(activePageIndex, { deliverable_groups: nextGroups });
                              }}
                            >
                              Remove Card
                            </button>
                          </div>

                          <div className="list-items-editor">
                            {group.items.map((item, iIdx) => (
                              <div key={iIdx} className="list-item-row">
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) => {
                                    const nextGroups = [...activePage.deliverable_groups];
                                    nextGroups[gIdx].items[iIdx] = e.target.value;
                                    updatePage(activePageIndex, { deliverable_groups: nextGroups });
                                  }}
                                  placeholder="Deliverable item"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const nextGroups = [...activePage.deliverable_groups];
                                    nextGroups[gIdx].items = nextGroups[gIdx].items.filter((_, idx) => idx !== iIdx);
                                    updatePage(activePageIndex, { deliverable_groups: nextGroups });
                                  }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              className="btn-add-item"
                              onClick={() => {
                                const nextGroups = [...activePage.deliverable_groups];
                                nextGroups[gIdx].items.push("");
                                updatePage(activePageIndex, { deliverable_groups: nextGroups });
                              }}
                            >
                              + Add Deliverable Item
                            </button>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-add-row"
                        onClick={() => {
                          const nextGroups = [
                            ...(activePage.deliverable_groups || []),
                            { id: "dg-" + Date.now(), title: "New Deliverables", items: [""] },
                          ];
                          updatePage(activePageIndex, { deliverable_groups: nextGroups });
                        }}
                      >
                        + Add Deliverables Card
                      </button>
                    </div>
                  </div>
                )}

                {/* PLATFORMS WE OFFER EDITOR */}
                {activePage.type === "platforms" && (
                  <div className="sub-form">
                    <div className="platforms-cards-list">
                      <label style={{ marginBottom: "2px" }}>Platform Offering Columns</label>
                      {(activePage.platforms || []).map((plat, pIdx) => (
                        <div key={plat.id || pIdx} className="group-card-container">
                          <div className="group-card-head">
                            <input
                              type="text"
                              className="group-title-input"
                              value={plat.name}
                              onChange={(e) => {
                                const nextPlats = [...activePage.platforms];
                                nextPlats[pIdx].name = e.target.value;
                                updatePage(activePageIndex, { platforms: nextPlats });
                              }}
                              placeholder="Platform Header (e.g. INSTAGRAM:)"
                            />
                            <button
                              type="button"
                              className="remove-sec-btn"
                              onClick={() => {
                                const nextPlats = activePage.platforms.filter((_, idx) => idx !== pIdx);
                                updatePage(activePageIndex, { platforms: nextPlats });
                              }}
                            >
                              Remove Column
                            </button>
                          </div>

                          <div className="list-items-editor">
                            {plat.items.map((item, iIdx) => (
                              <div key={iIdx} className="list-item-row">
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) => {
                                    const nextPlats = [...activePage.platforms];
                                    nextPlats[pIdx].items[iIdx] = e.target.value;
                                    updatePage(activePageIndex, { platforms: nextPlats });
                                  }}
                                  placeholder="Service item detail"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const nextPlats = [...activePage.platforms];
                                    nextPlats[pIdx].items = nextPlats[pIdx].items.filter((_, idx) => idx !== iIdx);
                                    updatePage(activePageIndex, { platforms: nextPlats });
                                  }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              className="btn-add-item"
                              onClick={() => {
                                const nextPlats = [...activePage.platforms];
                                nextPlats[pIdx].items.push("");
                                updatePage(activePageIndex, { platforms: nextPlats });
                              }}
                            >
                              + Add Item
                            </button>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-add-row"
                        onClick={() => {
                          const nextPlats = [
                            ...(activePage.platforms || []),
                            { id: "p-" + Date.now(), name: "PLATFORM NAME:", items: [""] },
                          ];
                          updatePage(activePageIndex, { platforms: nextPlats });
                        }}
                      >
                        + Add Platform Column
                      </button>
                    </div>

                    <div className="pricing-settings-grid">
                      <div className="pricing-label-val-fields">
                        <label>
                          Pricing Label
                          <input
                            type="text"
                            value={activePage.price_label || ""}
                            onChange={(e) => updatePage(activePageIndex, { price_label: e.target.value })}
                            placeholder="G. Total"
                          />
                        </label>
                        <label>
                          Pricing Value
                          <input
                            type="text"
                            value={activePage.price_value || ""}
                            onChange={(e) => updatePage(activePageIndex, { price_value: e.target.value })}
                            placeholder="₹12,999 / Month"
                          />
                        </label>
                      </div>

                      <div className="payment-details-editor-wrap">
                        <label>Payment Info Header Title</label>
                        <input
                          type="text"
                          value={activePage.payment_label || ""}
                          onChange={(e) => updatePage(activePageIndex, { payment_label: e.target.value })}
                          placeholder="For Payment :"
                          style={{ marginBottom: "8px" }}
                        />
                        <label>Payment details (Bank info, Account numbers, etc.)</label>
                        {(activePage.payment_details || []).map((detail, dIdx) => (
                          <div key={dIdx} className="list-item-row">
                            <input
                              type="text"
                              value={detail}
                              onChange={(e) => {
                                const nextDetails = [...activePage.payment_details];
                                nextDetails[dIdx] = e.target.value;
                                updatePage(activePageIndex, { payment_details: nextDetails });
                              }}
                              placeholder="Account number or details"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const nextDetails = activePage.payment_details.filter((_, idx) => idx !== dIdx);
                                updatePage(activePageIndex, { payment_details: nextDetails });
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn-add-item"
                          onClick={() => {
                            const nextDetails = [...(activePage.payment_details || []), ""];
                            updatePage(activePageIndex, { payment_details: nextDetails });
                          }}
                        >
                          + Add Payment line
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TERMS & SIGNATURE EDITOR */}
                {activePage.type === "payment_terms" && (
                  <div className="sub-form">
                    <label>
                      Final Note Text
                      <textarea
                        rows={4}
                        value={activePage.final_note || ""}
                        onChange={(e) => updatePage(activePageIndex, { final_note: e.target.value })}
                        placeholder="Enter final closing proposal note"
                      />
                    </label>

                    <div className="milestones-table-editor">
                      <label>Payment Milestones (Milestone | Payment terms)</label>
                      {(activePage.milestones || []).map((m, mIdx) => (
                        <div key={m.id || mIdx} className="milestone-item-row">
                          <input
                            type="text"
                            value={m.name}
                            onChange={(e) => {
                              const nextM = [...activePage.milestones];
                              nextM[mIdx].name = e.target.value;
                              updatePage(activePageIndex, { milestones: nextM });
                            }}
                            placeholder="Advance Payment"
                            style={{ flex: 1 }}
                          />
                          <input
                            type="text"
                            value={m.payment}
                            onChange={(e) => {
                              const nextM = [...activePage.milestones];
                              nextM[mIdx].payment = e.target.value;
                              updatePage(activePageIndex, { milestones: nextM });
                            }}
                            placeholder="50% before commencement"
                            style={{ flex: 2 }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const nextM = activePage.milestones.filter((_, idx) => idx !== mIdx);
                              updatePage(activePageIndex, { milestones: nextM });
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn-add-item"
                        onClick={() => {
                          const nextM = [
                            ...(activePage.milestones || []),
                            { id: "m-" + Date.now(), name: "", payment: "" },
                          ];
                          updatePage(activePageIndex, { milestones: nextM });
                        }}
                      >
                        + Add Milestone row
                      </button>
                    </div>

                    <div className="contact-details-editor">
                      <label>Contact details (Phones, Websites, Address)</label>
                      {(activePage.contact_details || []).map((detail, dIdx) => (
                        <div key={dIdx} className="list-item-row">
                          <input
                            type="text"
                            value={detail}
                            onChange={(e) => {
                              const nextDetails = [...activePage.contact_details];
                              nextDetails[dIdx] = e.target.value;
                              updatePage(activePageIndex, { contact_details: nextDetails });
                            }}
                            placeholder="+91 98395..."
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const nextDetails = activePage.contact_details.filter((_, idx) => idx !== dIdx);
                              updatePage(activePageIndex, { contact_details: nextDetails });
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn-add-item"
                        onClick={() => {
                          const nextDetails = [...(activePage.contact_details || []), ""];
                          updatePage(activePageIndex, { contact_details: nextDetails });
                        }}
                      >
                        + Add Contact line
                      </button>
                    </div>

                    <label style={{ marginTop: "12px" }}>
                      Authorized Signatory Label
                      <input
                        type="text"
                        value={activePage.signatory_text || ""}
                        onChange={(e) => updatePage(activePageIndex, { signatory_text: e.target.value })}
                        placeholder="Client Authorized Signatory (Signature & Seal)"
                      />
                    </label>
                  </div>
                )}
              </div>
            ) : (
              <div className="empty-hint">Select a slide/page on the left to edit its elements.</div>
            )}
          </div>
        </div>

        <div className="editor-actions">
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : selectedQuotationId ? "Save changes" : "Create proposal"}
          </button>
          {selectedQuotationId && (
            <>
              <button
                className="btn btn-accent"
                onClick={() => onGeneratePdf(selectedQuotationId)}
                disabled={generating}
              >
                {generating ? "Generating PDF…" : "Generate PDF"}
              </button>
              <button
                className="btn btn-danger-ghost"
                onClick={() => {
                  if (confirm("Delete this quotation proposal?")) onDeleteQuotation(selectedQuotationId);
                }}
              >
                Delete proposal
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
