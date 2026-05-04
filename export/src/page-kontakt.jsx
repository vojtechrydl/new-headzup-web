/* /kontakt — only static info. No form, no EN, no GDPR modal. */

const { CircleArrow } = window.UI;

function Kontakt({ navigate }) {
  return (
    <div className="page-enter" style={{ background: "var(--bone)", paddingTop: 120 }}>
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="mono" style={{
            fontSize: 12, color: "var(--muted)",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24,
          }}>
            ▸ kontakt
          </div>
          <h1 className="display" style={{
            fontSize: "clamp(64px, 12vw, 200px)",
            margin: 0, fontWeight: 400, letterSpacing: "-0.05em", lineHeight: 0.9,
          }}>
            Pojďme<br/>
            si <span style={{ color: "var(--muted)" }}>napsat.</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 0 100px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 80,
            alignItems: "start",
          }}>
            <div>
              <div className="mono" style={{
                fontSize: 11, color: "var(--muted)",
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18,
              }}>
                ▸ obecné dotazy
              </div>
              <a href="mailto:studio@headz-up.cz" className="display ul-link" style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 400, letterSpacing: "-0.03em",
                lineHeight: 1, color: "var(--build-up-black)",
                borderBottom: "1px solid var(--build-up-black)", paddingBottom: 8,
                display: "inline-block",
              }}>
                studio@headz-up.cz
              </a>

              <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                {[
                  { name: "Tomáš Robosch", role: "vedení studia", phone: "+420 704 017 075", mail: "tomasrobosch@headz-up.cz" },
                  { name: "Jáchym Klimša", role: "klientské vztahy", phone: "+420 776 597 297", mail: "jachym.klimsa@headz-up.cz" },
                ].map((p) => (
                  <div key={p.mail} style={{ borderTop: "1px solid var(--build-up-black)", paddingTop: 18 }}>
                    <div className="mono" style={{ fontSize: 16, marginBottom: 4 }}>{p.name}</div>
                    <div className="mono" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 14 }}>{p.role}</div>
                    <a href={`tel:${p.phone.replace(/\s/g,"")}`} className="mono ul-link" style={{ fontSize: 14, display: "block", marginBottom: 6 }}>{p.phone}</a>
                    <a href={`mailto:${p.mail}`} className="mono ul-link" style={{ fontSize: 14 }}>{p.mail}</a>
                  </div>
                ))}
              </div>
            </div>

            <aside style={{
              background: "var(--build-up-black)",
              color: "var(--show-up-gray)",
              padding: "40px 32px",
            }}>
              <div className="mono" style={{
                fontSize: 11, color: "rgba(238,238,238,0.5)",
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14,
              }}>
                ▸ studio
              </div>
              <p className="mono" style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 28px" }}>
                Riegrova 12<br/>
                301 00 Plzeň<br/>
                Česká republika
              </p>

              <div className="mono" style={{
                fontSize: 11, color: "rgba(238,238,238,0.5)",
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14,
              }}>
                ▸ fakturace
              </div>
              <p className="mono" style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 28px", color: "rgba(238,238,238,0.85)" }}>
                Headz-up s.r.o.<br/>
                IČO: 12 34 56 78<br/>
                DIČ: CZ12345678
              </p>

              <div className="mono" style={{
                fontSize: 11, color: "rgba(238,238,238,0.5)",
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14,
              }}>
                ▸ social
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {["instagram ↗", "linkedin ↗", "are.na ↗", "behance ↗"].map((s) => (
                  <a key={s} href="#" className="mono ul-link" style={{ fontSize: 14 }}>{s}</a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP placeholder */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="container">
          <div className="mono" style={{
            fontSize: 11, color: "var(--muted)",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18,
          }}>
            ▸ kde nás najdete
          </div>
          <div style={{
            position: "relative",
            width: "100%", aspectRatio: "21/9",
            background: "var(--show-up-gray)",
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(20,28,31,0.06) 0 1px, transparent 1px 60px),
              repeating-linear-gradient(90deg, rgba(20,28,31,0.06) 0 1px, transparent 1px 60px)
            `,
          }}>
            {/* Pin */}
            <div style={{
              position: "absolute", left: "42%", top: "48%",
              transform: "translate(-50%, -100%)",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "var(--light-up-yellow)",
                border: "2px solid var(--build-up-black)",
              }} />
              <div className="mono" style={{
                marginTop: 8, fontSize: 11,
                background: "var(--build-up-black)", color: "var(--show-up-gray)",
                padding: "4px 8px", whiteSpace: "nowrap",
              }}>
                Riegrova 12, Plzeň
              </div>
            </div>
            <span className="mono" style={{
              position: "absolute", right: 14, bottom: 12,
              fontSize: 11, color: "var(--muted)",
            }}>
              ▸ mapa / static
            </span>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="container">
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            borderTop: "1px solid var(--build-up-black)",
            borderBottom: "1px solid var(--build-up-black)",
          }}>
            {[
              ["pondělí — pátek", "9:00 — 18:00"],
              ["víkend", "po dohodě"],
              ["telefonicky", "od 8:30"],
              ["osobně", "rezervujte si čas"],
            ].map(([k, v]) => (
              <div key={k} style={{ padding: "24px 20px", borderRight: "1px solid rgba(20,28,31,0.12)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{k}</div>
                <div className="mono" style={{ fontSize: 16 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.Kontakt = Kontakt;
