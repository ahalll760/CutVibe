export default function HomeScreen() {
  const tools = [
    { icon: "🎬", name: "Text to Video", desc: "Turn ideas into clips" },
    { icon: "💬", name: "Auto Captions", desc: "Subtitles in one tap" },
    { icon: "🖼️", name: "Remove Background", desc: "Cut out the subject" },
    { icon: "🟢", name: "Green Screen", desc: "Swap your backdrop" },
    { icon: "⚡", name: "Speed", desc: "Slow-mo & time-lapse" },
    { icon: "🎨", name: "Filters", desc: "Cinematic looks" },
  ];

  const projects = [
    { id: 1, name: "Travel Vlog", duration: "0:42", color: "#b8d4ff", added: "2d ago" },
    { id: 2, name: "Product Promo", duration: "0:18", color: "#ffd9e6", added: "4d ago" },
    { id: 3, name: "Gaming Highlight", duration: "1:07", color: "#d9f0d9", added: "1w ago" },
    { id: 4, name: "Birthday Reel", duration: "0:31", color: "#fff1c9", added: "2w ago" },
  ];

  return (
    <div className="hs">
      {/* Header */}
      <header className="hs-header">
        <div className="hs-logo">
          <span className="hs-logo-mark">▶</span> CutVibe
        </div>
        <nav className="hs-nav">
          <a href="#">Home</a>
          <a href="#">Templates</a>
          <a href="#">Effects</a>
          <button className="hs-btn-ghost">Sign in</button>
        </nav>
      </header>

      {/* Hero / Create Project */}
      <section className="hs-hero">
        <div className="hs-hero-text">
          <h1>What are you making today?</h1>
          <p>Create a new project or pick up where you left off.</p>
          <button className="hs-btn-create">
            <span className="hs-plus">+</span> Create Project
          </button>
        </div>
        <div className="hs-hero-art">🎥</div>
      </section>

      {/* Tools */}
      <section className="hs-section">
        <h2>Tools</h2>
        <div className="hs-tools">
          {tools.map((t) => (
            <div key={t.name} className="hs-tool">
              <div className="hs-tool-icon">{t.icon}</div>
              <div className="hs-tool-name">{t.name}</div>
              <div className="hs-tool-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="hs-section">
        <div className="hs-section-row">
          <h2>Projects</h2>
          <button className="hs-btn-ghost">See all</button>
        </div>
        <div className="hs-projects">
          <div className="hs-card hs-card-new">
            <div className="hs-card-new-icon">+</div>
            <div className="hs-card-name">New project</div>
          </div>
          {projects.map((p) => (
            <div key={p.id} className="hs-card">
              <div className="hs-thumb" style={{ background: p.color }}>
                <span className="hs-duration">{p.duration}</span>
              </div>
              <div className="hs-card-name">{p.name}</div>
              <div className="hs-card-meta">{p.added}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
