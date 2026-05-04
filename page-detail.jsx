/* /projekty/[slug] — detail template + 6 mock instances.
   Hero, brief, gallery (full / pair / offset), text sections,
   optional video, prev/next footer. */

const { Chip, ImagePlaceholder, CircleArrow } = window.UI;

function GalleryItem({ item }) {
  if (item.kind === "full") {
    return (
      <div style={{ marginInline: "calc(50% - 50vw)", width: "100vw" }}>
        <ImagePlaceholder hue={item.hue} label={item.label} ratio="16/9" />
      </div>
    );
  }
  if (item.kind === "pair") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <ImagePlaceholder hue={item.hueA} label={item.labelA} ratio="4/5" />
        <ImagePlaceholder hue={item.hueB} label={item.labelB} ratio="4/5" />
      </div>
    );
  }
  if (item.kind === "offset") {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        alignItems: "center",
      }}>
        <div />
        <div style={{ transform: "translateX(8%)" }}>
          <ImagePlaceholder hue={item.hue} label={item.label} ratio="3/4" />
        </div>
        <div />
      </div>
    );
  }
  return null;
}

function ProjectDetail({ slug, navigate }) {
  const all = window.PROJECTS;
  const project = all.find((p) => p.slug === slug);
  const detailable = all.filter((p) => p.hasDetail);
  const idx = detailable.findIndex((p) => p.slug === slug);
  const prev = detailable[(idx - 1 + detailable.length) % detailable.length];
  const next = detailable[(idx + 1) % detailable.length];

  if (!project || !project.hasDetail) {
    return (
      <div style={{ paddingTop: 200, textAlign: "center" }}>
        <p className="mono">Projekt nenalezen.</p>
        <button onClick={() => navigate("/projekty")} className="mono ul-link">← na výpis</button>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ background: "var(--white)", paddingTop: 100 }}>
      {/* Breadcrumb */}
      <div className="container" style={{ paddingTop: 24 }}>
        <a href="/projekty"
           onClick={(e) => { e.preventDefault(); navigate("/projekty"); }}
           className="mono ul-link"
           style={{ fontSize: 12, color: "var(--muted)" }}>
          ← všechny projekty
        </a>
      </div>

      {/* HERO */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="mono" style={{
            fontSize: 12, color: "var(--muted)",
            textTransform: "uppercase", letterSpacing: "0.12em",
            marginBottom: 28,
          }}>
            ▸ {project.client} · {project.year}
          </div>
          <h1 className="display" style={{
            fontSize: "clamp(56px, 11vw, 180px)",
            margin: 0, fontWeight: 400, letterSpacing: "-0.05em", lineHeight: 0.9,
          }}>
            {project.title}
          </h1>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 40, marginTop: 60, alignItems: "start",
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>klient</div>
              <div className="mono" style={{ fontSize: 16 }}>{project.client}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>rok</div>
              <div className="mono" style={{ fontSize: 16 }}>{project.year}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>role</div>
              <div className="mono" style={{ fontSize: 16 }}>{project.role}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 28 }}>
            {project.services.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>

        {/* Cover */}
        <div style={{ marginTop: 56 }}>
          <div className="container">
            <ImagePlaceholder hue={project.cover.hue} label={project.cover.label} ratio="16/9" />
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="mono" style={{
              fontSize: 11, color: "var(--muted)",
              textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24,
            }}>
              ▸ brief
            </div>
            <p className="serif" style={{
              fontSize: "clamp(22px, 2.4vw, 32px)",
              lineHeight: 1.35, margin: 0,
              color: "var(--build-up-black)",
            }}>
              {project.brief}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY + SECTIONS */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 80 }}>
            {project.gallery.map((g, i) => (
              <GalleryItem key={i} item={g} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS — Přístup / Řešení */}
      <section style={{ padding: "60px 0 80px", background: "var(--bone)" }}>
        <div className="container">
          {project.sections.map((sec, i) => (
            <div key={sec.heading} style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 60,
              padding: "60px 0",
              borderTop: i === 0 ? "1px solid var(--build-up-black)" : "none",
              borderBottom: "1px solid var(--build-up-black)",
            }}>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>
                  0{i + 1}
                </div>
                <h2 className="display" style={{
                  margin: 0, fontWeight: 400,
                  fontSize: "clamp(36px, 4vw, 64px)",
                  letterSpacing: "-0.03em", lineHeight: 1,
                }}>
                  {sec.heading}
                </h2>
              </div>
              <p className="serif" style={{
                fontSize: 22, lineHeight: 1.5, margin: 0,
                maxWidth: 640, color: "var(--build-up-black)",
              }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO (optional) */}
      {project.video && (
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>
              ▸ proces / video
            </div>
            <div style={{
              position: "relative", width: "100%",
              aspectRatio: project.video.aspect || "16/9",
              background: "var(--build-up-black)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--show-up-gray)",
            }}>
              <span className="mono" style={{ fontSize: 14, letterSpacing: "0.05em" }}>
                ▶ video embed · {project.video.aspect}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER NAV — prev/next */}
      <section style={{
        background: "var(--build-up-black)",
        color: "var(--show-up-gray)",
        padding: "80px 0",
      }}>
        <div className="container">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto 1fr",
            gap: 32, alignItems: "center",
          }}>
            <button
              onClick={() => navigate(`/projekty/${prev.slug}`)}
              style={{ textAlign: "left", color: "var(--show-up-gray)" }}
            >
              <div className="mono" style={{
                fontSize: 11, color: "rgba(238,238,238,0.5)",
                textTransform: "uppercase", letterSpacing: "0.12em",
              }}>
                ← předchozí
              </div>
              <div className="mono" style={{
                fontSize: "clamp(24px, 2.6vw, 36px)",
                marginTop: 10, fontWeight: 400, letterSpacing: "-0.02em",
              }}>
                {prev.title}
              </div>
            </button>

            <button
              onClick={() => navigate("/projekty")}
              aria-label="zpět na výpis"
              style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "var(--light-up-yellow)",
                color: "var(--build-up-black)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>

            <button
              onClick={() => navigate(`/projekty/${next.slug}`)}
              style={{ textAlign: "right", color: "var(--show-up-gray)" }}
            >
              <div className="mono" style={{
                fontSize: 11, color: "rgba(238,238,238,0.5)",
                textTransform: "uppercase", letterSpacing: "0.12em",
              }}>
                další →
              </div>
              <div className="mono" style={{
                fontSize: "clamp(24px, 2.6vw, 36px)",
                marginTop: 10, fontWeight: 400, letterSpacing: "-0.02em",
              }}>
                {next.title}
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.ProjectDetail = ProjectDetail;
