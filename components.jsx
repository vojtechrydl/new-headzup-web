/* Shared atoms used across pages. Globals: window.UI = { ... } */

const { useState, useEffect, useRef } = React;

// === Logo: lowercase wordmark "headz-up" — abstract custom drawing.
//     We are NOT recreating any client's logo. This is a placeholder
//     wordmark in the type style suggested by the design system.
function Logo({ size = 28, color = "var(--build-up-black)" }) {
  return (
    <span
      className="mono"
      style={{
        fontSize: size,
        color,
        fontWeight: 400,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      headz<span style={{ display: "inline-block", padding: "0 1px" }}>—</span>up
    </span>
  );
}

// Yellow circle with arrow — signature element from PDF
function CircleArrow({ size = "lg", direction = "down-right", color = "yellow", onClick, label = "Pokračovat" }) {
  const d = size === "sm" ? 45 : 90;
  const innerSize = size === "sm" ? 18 : 36;
  const rot = {
    "down-right": 0,
    "right": -45,
    "left": 135,
    "up-right": -90,
  }[direction] ?? 0;
  const bg =
    color === "yellow" ? "var(--light-up-yellow)" :
    color === "gray"   ? "var(--show-up-gray)"   :
    color === "black"  ? "var(--build-up-black)" : color;
  const fg = color === "black" ? "var(--light-up-yellow)" : "var(--build-up-black)";
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="circle-btn"
      style={{ width: d, height: d, background: bg, color: fg }}
    >
      <svg width={innerSize} height={innerSize} viewBox="0 0 36 36" style={{ transform: `rotate(${rot}deg)` }}>
        <path d="M 4 0 L 0 4 L 25 29 L 7 29 L 7 35 L 35 35 L 35 7 L 29 7 L 29 25 Z" fill="currentColor" />
      </svg>
    </button>
  );
}

// Service chip — yellow pill with service label
function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

// Section title block (eyebrow + heading)
function SectionTitle({ eyebrow, children, align = "left", as = "h2" }) {
  const Tag = as;
  return (
    <div style={{ textAlign: align, marginBottom: 28 }}>
      {eyebrow && (
        <div className="mono" style={{
          fontSize: 11, color: "var(--muted)",
          textTransform: "uppercase", letterSpacing: "0.08em",
          marginBottom: 14,
        }}>
          {eyebrow}
        </div>
      )}
      <Tag className="display" style={{
        margin: 0, fontSize: "var(--fs-3xl)", lineHeight: 1.05,
        color: "var(--build-up-black)", fontWeight: 400,
      }}>
        {children}
      </Tag>
    </div>
  );
}

// Imagery placeholder — striped SVG with mono caption (per system prompt rule)
function ImagePlaceholder({ hue = 210, label = "image", height = 560, ratio, dark = false, style = {} }) {
  const stripeA = `oklch(0.78 0.04 ${hue})`;
  const stripeB = `oklch(0.84 0.04 ${hue})`;
  const aspect = ratio ? { aspectRatio: ratio, height: "auto" } : { height };
  return (
    <div style={{
      position: "relative",
      width: "100%",
      ...aspect,
      background: `repeating-linear-gradient(135deg, ${stripeA} 0, ${stripeA} 18px, ${stripeB} 18px, ${stripeB} 36px)`,
      overflow: "hidden",
      ...style,
    }}>
      <span className="mono" style={{
        position: "absolute", left: 14, bottom: 12,
        fontSize: 11, color: "var(--build-up-black)",
        background: "rgba(238,238,238,0.85)",
        padding: "3px 8px",
        letterSpacing: "0.02em",
      }}>
        ▸ {label}
      </span>
    </div>
  );
}

// NavBar — sticky, transparent on hero, solid after scroll
function NavBar({ route, navigate, transparentOver }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { label: "O nás", to: "/o-nas" },
    { label: "Projekty", to: "/projekty" },
    { label: "Kontakt", to: "/kontakt" },
  ];
  const onHero = transparentOver && !scrolled;
  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: onHero ? "transparent" : "rgba(255,255,255,0.92)",
        backdropFilter: onHero ? "none" : "saturate(140%) blur(8px)",
        borderBottom: onHero ? "1px solid transparent" : "1px solid rgba(20,28,31,0.08)",
        transition: "all 280ms var(--ease)",
      }}
    >
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "16px 32px",
        display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
      }}>
        <nav className="mono" style={{ display: "flex", gap: 26, fontSize: 13 }}>
          {items.map((it) => (
            <a key={it.to}
               href={it.to}
               onClick={(e) => { e.preventDefault(); navigate(it.to); }}
               className="ul-link"
               style={{
                 borderBottom: route === it.to ? "1px solid currentColor" : "1px solid transparent",
                 paddingBottom: 1,
               }}
            >
              {it.label}
            </a>
          ))}
        </nav>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} aria-label="Headz-up domů">
          <Logo size={26} />
        </a>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16 }}>
          <CircleArrow size="sm" direction="up-right" color="gray"
            onClick={() => navigate("/kontakt")} label="kontakt" />
        </div>
      </div>
    </header>
  );
}

// Footer — exactly per Figma screenshot
function Footer({ navigate }) {
  const yellow = "var(--light-up-yellow)";
  const NavLink = ({ children, to, external }) => (
    <a
      className="mono"
      href={to}
      onClick={(e) => { if (external) return; e.preventDefault(); navigate(to); }}
      style={{
        fontSize: 14, color: yellow,
        display: "inline-flex", alignItems: "center", gap: 10,
      }}
    >
      <span style={{ display: "inline-block", fontSize: 14 }}>→</span>
      {children}
    </a>
  );
  const ExtLink = ({ children, href }) => (
    <a className="mono" href={href} style={{
      fontSize: 14, color: yellow,
      display: "inline-flex", alignItems: "center", gap: 10,
    }}>
      <span style={{ display: "inline-block", transform: "rotate(-45deg)", fontSize: 14 }}>→</span>
      {children}
    </a>
  );
  return (
    <footer style={{
      background: "var(--build-up-black)",
      color: "var(--show-up-gray)",
      padding: "60px 0 24px",
    }}>
      <div className="container">
        {/* Top: nav cols */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 60,
        }}>
          <div style={{ display: "grid", gap: 14 }}>
            <NavLink to="/projekty">Our work</NavLink>
            <NavLink to="/o-nas">How we work</NavLink>
            <NavLink to="/o-nas">About us</NavLink>
            <NavLink to="/kontakt">Contact</NavLink>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            <ExtLink href="#">Instagram</ExtLink>
            <ExtLink href="#">LinkedIn</ExtLink>
          </div>
          <div />
        </div>

        {/* Big Link up + contacts */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 40,
          alignItems: "end",
          marginBottom: 32,
        }}>
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(80px, 16vw, 220px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: "var(--show-up-gray)",
            fontWeight: 500,
          }}>
            Link up!
          </div>
          <div style={{ display: "flex", gap: 40, alignItems: "end" }}>
            <div style={{ display: "grid", gap: 28, fontSize: 13 }}>
              {[
                { name: "Tomáš Raboch", phone: "+420 724 617 975", mail: "tomas.raboch@headz-up.cz" },
                { name: "Jáchym Klimko", phone: "+420 774 091 217", mail: "jachym.klimko@headz-up.cz" },
              ].map((p) => (
                <div key={p.mail}>
                  <div className="mono" style={{ color: "var(--show-up-gray)", marginBottom: 4 }}>{p.name}</div>
                  <div className="mono" style={{ color: "var(--show-up-gray)", marginBottom: 4 }}>{p.phone}</div>
                  <a className="mono" href={`mailto:${p.mail}`} style={{
                    color: yellow, borderBottom: `1px solid ${yellow}`, paddingBottom: 1,
                  }}>{p.mail}</a>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Zpět nahoru"
              style={{
                width: 40, height: 40, borderRadius: "50%",
                background: yellow, color: "var(--build-up-black)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: 4,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom rule + meta */}
        <div style={{
          borderTop: "1px solid rgba(238,238,238,0.25)",
          paddingTop: 18,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 24, flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", gap: 36 }}>
            <span className="mono" style={{ fontSize: 12, color: "rgba(238,238,238,0.65)" }}>Terms Of Use</span>
            <span className="mono" style={{ fontSize: 12, color: "rgba(238,238,238,0.65)" }}>Privacy Policy</span>
          </div>
          <span className="mono" style={{ fontSize: 12, color: "rgba(238,238,238,0.65)" }}>
            © 2026 Headz-up s.r.o.
          </span>
        </div>
      </div>
    </footer>
  );
}

// Project card — used by homepage list & /projekty grid
function ProjectCard({ project, index, onClick }) {
  const linkable = project.hasDetail;
  return (
    <div
      onClick={linkable ? onClick : undefined}
      className={`project-card ${linkable ? "linkable" : ""}`}
      style={{ cursor: linkable ? "pointer" : "default" }}
      role={linkable ? "link" : undefined}
      tabIndex={linkable ? 0 : -1}
      onKeyDown={(e) => { if (linkable && (e.key === "Enter" || e.key === " ")) onClick?.(); }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr auto auto",
        gap: 32,
        alignItems: "center",
      }}>
        <div className="mono" style={{
          fontSize: 28, color: "var(--build-up-black)",
          background: "var(--show-up-gray)",
          width: 50, height: 50,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          letterSpacing: "-0.02em",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <span className="mono" style={{
            fontSize: "clamp(22px, 2.8vw, 32px)",
            letterSpacing: "-0.02em", fontWeight: 400,
          }}>
            {project.title}
          </span>
          <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.services.map((s) => <Chip key={s}>{s}</Chip>)}
          </span>
        </div>
        <div className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>
          {project.year}
        </div>
        <div className="pc-arrow">
          {linkable ? (
            <svg width="22" height="22" viewBox="0 0 36 36" style={{ transform: "rotate(-45deg)" }}>
              <path d="M 4 0 L 0 4 L 25 29 L 7 29 L 7 35 L 35 35 L 35 7 L 29 7 L 29 25 Z" fill="currentColor" />
            </svg>
          ) : <span style={{ width: 22, height: 22 }} />}
        </div>
      </div>
    </div>
  );
}

window.UI = { Logo, CircleArrow, Chip, SectionTitle, ImagePlaceholder, NavBar, Footer, ProjectCard, HoverThumb };

// HoverThumb — wraps a gallery thumb and translates inner image to follow mouse
function HoverThumb({ children, style }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // mouse position normalized -1..1 from center
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    // At scale(4), the inner image is 4x; translation values are pre-scale,
    // so a small px range gives perceptible movement. ~12px feels good.
    const max = 14;
    el.style.setProperty("--tx", `${(-nx * max).toFixed(2)}px`);
    el.style.setProperty("--ty", `${(-ny * max).toFixed(2)}px`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };
  return (
    <div
      ref={ref}
      className="pc-thumb"
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
