/* /o-nas — editorial, vzdušný, serif pro delší texty, krémové pozadí, korálový → yellow akcent střídmě.
   Original Czech placeholder copy in the spirit of the brief. */

const { CircleArrow } = window.UI;

function ONas({ navigate }) {
  return (
    <div className="page-enter" style={{ background: "var(--bone)", paddingTop: 120 }}>
      {/* HERO */}
      <section style={{ padding: "80px 0 80px" }}>
        <div className="container">
          <div className="mono" style={{
            fontSize: 12, color: "var(--muted)",
            textTransform: "uppercase", letterSpacing: "0.12em",
            marginBottom: 32,
          }}>
            01 ▸ o studiu headz—up
          </div>
          <h1 className="display" style={{
            fontSize: "clamp(48px, 8vw, 132px)",
            margin: 0, fontWeight: 400,
            letterSpacing: "-0.04em", lineHeight: 0.95,
            maxWidth: "12ch",
          }}>
            Tým, který<br/>přemýšlí napřed.
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginTop: 80,
            alignItems: "start",
          }}>
            <div className="serif" style={{
              fontSize: 22, lineHeight: 1.45, color: "var(--build-up-black)",
            }}>
              Jsme nezávislé studio se sídlem v Plzni. Pracujeme s firmami,
              které mají co říct, ale ještě úplně nevědí, jak. Strategie, identita,
              digitál — vše, co je potřeba k tomu, aby značka stála rovně
              i ve větru.
            </div>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16, lineHeight: 1.6, color: "var(--build-up-black)",
              maxWidth: 480,
            }}>
              <p style={{ margin: "0 0 18px" }}>
                Začínáme tam, kde jiní končí — strategickým hovorem o tom,
                co je vlastně problém. Často zjistíme, že zadání bylo nepřesné.
                To je dobré zjištění.
              </p>
              <p style={{ margin: 0 }}>
                Sestavujeme tým ad hoc podle zakázky. Designéři, stratégové,
                copywriteři, vývojáři. Žádný overhead, žádné agenturní napětí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: "100px 0 100px" }}>
        <div className="container">
          <div style={{
            background: "var(--build-up-black)",
            color: "var(--show-up-gray)",
            padding: "80px 64px",
            position: "relative",
          }}>
            <div className="mono" style={{ fontSize: 11, color: "rgba(238,238,238,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 28 }}>
              ▸ manifest
            </div>
            <p className="mono" style={{
              fontSize: "clamp(22px, 2.6vw, 36px)",
              lineHeight: 1.25, letterSpacing: "-0.015em",
              margin: 0, color: "var(--show-up-gray)",
              maxWidth: 980,
            }}>
              Méně je více. Identita má být <span style={{ color: "var(--light-up-yellow)" }}>čitelná</span>, důvěryhodná
              a radostná při používání — pro tým i klienty. Pracujeme strategicky:
              raději tři správné rozhodnutí, než třicet hezkých detailů.
            </p>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={{ padding: "60px 0 120px" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24 }}>
            02 ▸ co děláme
          </div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", margin: "0 0 60px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1, maxWidth: 14 + "ch" }}>
            Čtyři disciplíny.<br/>Jeden tón.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 0,
            borderTop: "1px solid var(--build-up-black)",
          }}>
            {[
              { num: "01", title: "Strategie", body: "Pozicování, claim, pojmenování. Hodiny rozhovorů, ze kterých vznikne jediná věta, kterou chcete mít na zdi." },
              { num: "02", title: "Identita", body: "Logotyp, typografie, barvy, tón. Systém, který drží i v Excelu i na fasádě." },
              { num: "03", title: "Digitál", body: "Web, e-shop, produktový interface. Kód píšeme my — ne externisti, ne lokal-hostí." },
              { num: "04", title: "Komunikace", body: "Kampaně, sociální sítě, tisk. Tam, kde to dává smysl. Tam, kde ne, vás zastavíme." },
            ].map((s) => (
              <div key={s.num} style={{
                padding: "32px 24px 36px",
                borderRight: "1px solid rgba(20,28,31,0.12)",
                borderBottom: "1px solid var(--build-up-black)",
              }}>
                <div className="mono" style={{ fontSize: 13, color: "var(--muted)", marginBottom: 24 }}>{s.num}</div>
                <h3 className="mono" style={{ fontSize: 28, margin: "0 0 18px", fontWeight: 400, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, color: "var(--build-up-black)", maxWidth: 280 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITACE / VEDENÍ */}
      <section style={{ padding: "80px 0 140px" }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="serif" style={{
            fontSize: "clamp(28px, 3.6vw, 52px)",
            lineHeight: 1.18, letterSpacing: "-0.01em",
            margin: 0, color: "var(--build-up-black)",
            fontStyle: "italic",
          }}>
            „Když nás klient zavolá, většinou
            <span style={{ background: "var(--light-up-yellow)", padding: "0 6px", fontStyle: "normal" }}>už víme</span>,
            o čem bude řeč. To není intuice. To je práce."
          </p>
          <div className="mono" style={{ marginTop: 32, fontSize: 13, color: "var(--muted)" }}>
            — vedení studia / 2026
          </div>
        </div>
      </section>

      {/* CTA pruh */}
      <section style={{ background: "var(--sage)", padding: "80px 0" }}>
        <div className="container" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 32, flexWrap: "wrap",
        }}>
          <h3 className="display" style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            margin: 0, fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1,
            maxWidth: "16ch",
          }}>
            Chcete s námi začít konverzaci?
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
            napište nám
            <span style={{ transform: "rotate(-45deg)", display: "inline-block" }}>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

window.ONas = ONas;
