/* /projekty — list of all 16 projects, same row format as homepage (3 images + yellow arrow for linkable). */

const { Chip, ImagePlaceholder, HoverThumb } = window.UI;

function ProjectRow({ project, index, onClick }) {
  const linkable = project.hasDetail;
  return (
    <div
      onClick={linkable ? onClick : undefined}
      className={`project-card ${linkable ? "linkable" : ""}`}
      style={{ cursor: linkable ? "pointer" : "default", padding: "28px 0 30px" }}
      role={linkable ? "link" : undefined}
      tabIndex={linkable ? 0 : -1}
      onKeyDown={(e) => { if (linkable && (e.key === "Enter" || e.key === " ")) onClick?.(); }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "60px minmax(280px, 1.4fr) 2fr auto",
        gap: 32, alignItems: "center",
      }}>
        <div className="mono" style={{
          fontSize: 22, color: "var(--build-up-black)",
          background: "var(--show-up-gray)",
          width: 50, height: 50, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          letterSpacing: "-0.02em", fontWeight: 500,
        }}>{String(index + 1).padStart(2, "0")}</div>

        <div>
          <div className="mono" style={{
            fontSize: "clamp(22px, 2.4vw, 30px)",
            letterSpacing: "-0.02em", fontWeight: 500, marginBottom: 8,
          }}>{project.title}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.services.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {(project.gallery3 || [
            { hue: project.cover.hue, label: "—" },
            { hue: project.cover.hue, label: "—" },
            { hue: project.cover.hue, label: "—" },
          ]).map((g, i) => (
            <HoverThumb key={i} style={{ aspectRatio: "4/3" }}>
              <ImagePlaceholder hue={g.hue} label={g.label} ratio="4/3" />
            </HoverThumb>
          ))}
        </div>

        <div style={{ minWidth: 40 }}>
          {linkable ? (
            <div className="pc-yellow-arrow" style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "var(--light-up-yellow)",
              color: "var(--build-up-black)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "transform 280ms var(--ease)",
            }}>
              <svg width="16" height="16" viewBox="0 0 36 36" style={{ transform: "rotate(-45deg)" }}>
                <path d="M 4 0 L 0 4 L 25 29 L 7 29 L 7 35 L 35 35 L 35 7 L 29 7 L 29 25 Z" fill="currentColor" />
              </svg>
            </div>
          ) : <span style={{ width: 40, height: 40 }} />}
        </div>
      </div>
    </div>
  );
}

function Projekty({ navigate }) {
  const projects = window.PROJECTS;
  return (
    <div className="page-enter" style={{ background: "var(--white)", paddingTop: 120 }}>
      {/* HERO */}
      <section style={{ background: "var(--paper)", padding: "60px 0 100px" }}>
        <div className="container">
          <div className="mono" style={{
            fontSize: 12, color: "var(--muted)",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24,
          }}>
            ▸ archiv práce · {projects.length} projektů
          </div>
          <h1 className="display" style={{
            fontSize: "clamp(64px, 12vw, 200px)",
            margin: 0, fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 0.9,
          }}>
            Naše práce<br/>
            <span style={{ color: "var(--muted)" }}>od&nbsp;2023.</span>
          </h1>
        </div>
      </section>

      {/* LIST — same row format as homepage */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24,
          }}>
            <div className="mono" style={{ fontSize: 14, color: "rgba(20,28,31,0.5)" }}>(Projekt)</div>
            <div className="mono" style={{ fontSize: 14, color: "rgba(20,28,31,0.5)", marginRight: "12%" }}>(Visual)</div>
          </div>
          <div>
            {projects.map((p, i) => (
              <ProjectRow
                key={p.slug} project={p} index={i}
                onClick={() => navigate(`/projekty/${p.slug}`)}
              />
            ))}
            <div style={{ borderTop: "1px solid var(--build-up-black)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--sage)", padding: "80px 0" }}>
        <div className="container" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 32, flexWrap: "wrap",
        }}>
          <h3 className="display" style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            margin: 0, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1,
            maxWidth: "18ch",
          }}>
            Máte projekt, který by chtěl přesně tohle?
          </h3>
          <button
            onClick={() => navigate("/kontakt")}
            className="mono"
            style={{
              display: "inline-flex", alignItems: "center", gap: 16,
              background: "var(--build-up-black)", color: "var(--light-up-yellow)",
              padding: "18px 28px", fontSize: 14,
            }}
          >
            ozvěte se
            <span style={{ transform: "rotate(-45deg)", display: "inline-block" }}>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

window.Projekty = Projekty;
