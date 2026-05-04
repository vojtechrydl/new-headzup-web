/* Homepage — uses English copy from Figma. NO testimonials, NO client logos.
   Full-width "We bring together" with right-side image.
   Project rows include a 3-image gallery preview. */

const { Logo, CircleArrow, Chip, ImagePlaceholder, HoverThumb } = window.UI;

function HomeProjectRow({ project, index, onClick }) {
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
        gap: 32,
        alignItems: "center",
      }}>
        <div className="mono" style={{
          fontSize: 22, color: "var(--build-up-black)",
          background: "var(--show-up-gray)",
          width: 50, height: 50,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          letterSpacing: "-0.02em", fontWeight: 500,
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <div className="mono" style={{
            fontSize: "clamp(22px, 2.4vw, 30px)",
            letterSpacing: "-0.02em", fontWeight: 500, marginBottom: 8,
          }}>
            {project.title}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.services.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>

        {/* 3-image gallery preview */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
        }}>
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

function Home({ navigate }) {
  const projects = window.PROJECTS.slice(0, 6);

  return (
    <div className="page-enter">
      {/* HERO — sage olive bg, English wordmark from Figma */}
      <section className="grain" style={{
        background: "var(--sage)",
        padding: "140px 0 60px",
        position: "relative",
        minHeight: "min(900px, 100vh)",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display" style={{
            fontSize: "clamp(80px, 18vw, 248px)",
            margin: "60px 0 0",
            color: "var(--build-up-black)",
            fontWeight: 700, letterSpacing: "-0.05em",
            lineHeight: 0.86,
          }}>
            headz<span style={{ display: "inline-block", padding: "0 0.04em" }}>-</span>up
          </h1>

          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", gap: 40, marginTop: 40,
          }}>
            <p className="display" style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              margin: 0, fontWeight: 500,
              letterSpacing: "-0.02em", lineHeight: 1,
              color: "var(--build-up-black)",
            }}>
              things are about<br/>to make sense
            </p>
            <div className="mono" style={{
              fontSize: 13, color: "var(--build-up-black)",
              whiteSpace: "nowrap", paddingBottom: 8,
            }}>
              marketing agency
            </div>
          </div>
        </div>

        {/* Yellow circle indicator at bottom */}
        <div style={{
          position: "absolute", left: "50%", bottom: -45,
          transform: "translateX(-50%)", zIndex: 3,
        }}>
          <CircleArrow size="lg" direction="down-right" color="yellow" label="scroll" />
        </div>
      </section>

      {/* ADVICE / CLAIM SECTION */}
      <section style={{ background: "var(--bone)", padding: "180px 0 140px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}>
            <div />
            <div style={{ maxWidth: 580 }}>
              <p className="mono" style={{
                fontSize: "clamp(28px, 2.8vw, 44px)",
                lineHeight: 1.18, letterSpacing: "-0.015em",
                margin: 0, color: "var(--build-up-black)", fontWeight: 500,
              }}>
                A piece of advice<br/>
                or a warning about<br/>
                <span style={{ color: "var(--shake-up-blue)" }}>something</span> so that<br/>
                you are prepared for it.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="/o-nas"
                   onClick={(e) => { e.preventDefault(); navigate("/o-nas"); }}
                   className="mono ul-link"
                   style={{ fontSize: 14, color: "var(--build-up-black)" }}>
                  Learn about how we work →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WE BRING TOGETHER — full-width dark band with right image */}
      <section style={{
        background: "var(--build-up-black)",
        color: "var(--show-up-gray)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          alignItems: "stretch",
          minHeight: 560,
        }}>
          <div style={{
            padding: "clamp(56px, 8vw, 120px) clamp(32px, 6vw, 96px)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            gap: 80,
          }}>
            <p style={{
              fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.3,
              margin: 0, color: "var(--show-up-gray)",
              fontWeight: 400, letterSpacing: "-0.01em",
              maxWidth: 560,
            }}>
              We bring together designers, strategists,
              and managers around a single shared goal.
            </p>
            <div>
              <div className="mono" style={{
                fontSize: 12, color: "rgba(238,238,238,0.55)",
                marginBottom: 14,
              }}>
                Discover our team →
              </div>
              <p style={{
                fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.35,
                margin: 0, color: "var(--show-up-gray)", maxWidth: 480,
                fontWeight: 400, letterSpacing: "-0.01em",
              }}>
                Connecting people and shaping teams tailored to your needs.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div style={{ position: "relative", minHeight: 560 }}>
            <img
              src="assets/team.webp"
              alt="Tým Headz-up před studiem Kabinet"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* PROJECT LIST with 3-image gallery */}
      <section style={{ background: "var(--white)", padding: "120px 0 140px" }}>
        <div className="container">
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "baseline", marginBottom: 24,
          }}>
            <div className="mono" style={{ fontSize: 14, color: "rgba(20,28,31,0.5)" }}>
              (Projekt)
            </div>
            <div className="mono" style={{ fontSize: 14, color: "rgba(20,28,31,0.5)", marginRight: "12%" }}>
              (Visual)
            </div>
          </div>

          <div>
            {projects.map((p, i) => (
              <HomeProjectRow
                key={p.slug}
                project={p}
                index={i}
                onClick={() => navigate(`/projekty/${p.slug}`)}
              />
            ))}
            <div style={{ borderTop: "1px solid var(--build-up-black)" }} />
          </div>

          <div style={{ marginTop: 56, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <p className="mono" style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
              Selected six. The rest is just around the corner.
            </p>
            <button
              onClick={() => navigate("/projekty")}
              className="mono"
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                background: "var(--build-up-black)", color: "var(--show-up-gray)",
                padding: "14px 22px", fontSize: 13, letterSpacing: "0.02em",
              }}
            >
              all projects
              <span style={{ display: "inline-block", transform: "rotate(-45deg)" }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{
        background: "var(--light-up-yellow)",
        padding: "26px 0",
        borderTop: "1px solid var(--build-up-black)",
        borderBottom: "1px solid var(--build-up-black)",
        overflow: "hidden",
      }}>
        <div className="marquee">
          <div className="marquee-track mono" style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            color: "var(--build-up-black)",
            letterSpacing: "-0.02em", fontWeight: 500,
          }}>
            {Array.from({ length: 2 }).map((_, k) => (
              <React.Fragment key={k}>
                <span>we are already thinking</span>
                <span>✦</span>
                <span>headz—up</span>
                <span>✦</span>
                <span>things are about to make sense</span>
                <span>✦</span>
                <span>2026</span>
                <span>✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.Home = Home;
