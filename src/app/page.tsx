import { BootSequence } from '@/components/BootSequence';

export default function Home() {
  return (
    <>
      <BootSequence />
      <div className="space-y-12">
        {/* Hero Section - Terminal Boot Sequence */}
        <section className="py-8 text-center relative">
        <img
          src="/retro-icons/pixel-star.svg"
          alt=""
          className="float absolute top-0 left-0 w-8 h-8 opacity-50"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        />
        <img
          src="/retro-icons/pixel-star.svg"
          alt=""
          className="float absolute top-0 right-0 w-8 h-8 opacity-50"
          style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}
        />

        {/* Profile Picture - Y2K Style */}
        <div className="flex justify-center mb-6">
          <div
            className="relative inline-block"
            style={{
              padding: '8px',
              background: 'linear-gradient(135deg, #a855f7 0%, #00ff41 50%, #00ffff 100%)',
              border: '3px solid #333',
              boxShadow: 'inset 0 0 20px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.6)',
              animation: 'glow 2s ease-in-out infinite'
            }}
          >
            <div
              style={{
                padding: '4px',
                background: '#0a0a0a',
                border: '2px solid #666'
              }}
            >
              <img
                src="/pfp/cat_natal.png"
                alt="Francisco Nogueira"
                className="float"
                style={{
                  width: '120px',
                  height: '120px',
                  display: 'block',
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.1) saturate(1.2)',
                }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 chrome-text">
          FRANCISCO NOGUEIRA
        </h1>
        <p className="text-xl mb-4 terminal-text glow-pulse">
          &gt; Data & ML Engineer
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-6">
          <span className="retro-badge">📍 São Paulo, Brazil</span>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* About Section */}
      <section className="y2k-box">
        <h2 className="text-3xl font-bold mb-6 neon-glow">
          &lt;ABOUT /&gt;
        </h2>
        <div className="space-y-4 text-lg">
          <p style={{ color: '#b0b0b0' }}>
            Hey there! I'm <span className="neon-glow font-bold">Francisco Reis Nogueira</span>,
            a Data & ML Engineer currently working remotely at{' '}
            <span className="terminal-text">Inductiva Research Labs</span> in Lisbon, Portugal.
          </p>
          <p style={{ color: '#b0b0b0' }}>
            I specialize in building production ETL pipelines, designing scalable data infrastructure,
            and developing backend systems for scientific computing platforms. My work spans data
            engineering, cloud orchestration, and machine learning research.
          </p>
          <p style={{ color: '#b0b0b0' }}>
            Completed a <span className="text-accent-bright font-semibold">Master’s in Computer Engineering</span>{' '}
            at Instituto Superior Técnico (Lisbon) and Universidade de São Paulo via a double-degree program.
            My research focused on multilingual AI and computer vision.
          </p>
        </div>
      </section>

      {/* Current Work */}
      <section className="y2k-box">
        <h2 className="text-3xl font-bold mb-6 neon-glow">
          &lt;CURRENT_WORK /&gt;
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-accent-bright">
              Inductiva Research Labs
            </h3>
            <p className="text-sm text-cyan mb-2">Data Engineer / Backend Engineer • Lisbon, Portugal • Oct 2023 - Present</p>
            <ul className="terminal-list space-y-2 mt-3" style={{ color: '#b0b0b0' }}>
              <li>Built production ETL pipelines using dbt, SQL, and Python with multi-layer caching</li>
              <li>Designed REST API data serving layer handling 10K+ daily queries</li>
              <li>Architected PostgreSQL solutions for multi-tenant workloads across cloud providers</li>
              <li>Integrated Stripe payment system with automated tax compliance</li>
              <li>Containerized scientific simulators using Docker for HPC environments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Table */}
      <section className="y2k-box">
        <h2 className="text-3xl font-bold mb-6 neon-glow">
          &lt;TECHNICAL_SKILLS /&gt;
        </h2>
        <table className="y2k-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold terminal-text">Data Engineering</td>
              <td>dbt, SQL (PostgreSQL), Python (Pandas, NumPy), ETL Pipelines, Data Modeling</td>
            </tr>
            <tr>
              <td className="font-semibold terminal-text">Backend & Cloud</td>
              <td>REST APIs, Google Cloud Platform, Docker, VM Orchestration, Distributed Systems</td>
            </tr>
            <tr>
              <td className="font-semibold terminal-text">ML & AI</td>
              <td>PyTorch, TensorFlow, Multilingual NLP, Model Evaluation, Dataset Curation</td>
            </tr>
            <tr>
              <td className="font-semibold terminal-text">Development</td>
              <td>Git, Linux, CI/CD, Automated Testing, Technical Documentation</td>
            </tr>
            <tr>
              <td className="font-semibold terminal-text">Languages</td>
              <td>Python (Expert), SQL (Advanced), JavaScript, C/C++</td>
            </tr>
            <tr>
              <td className="font-semibold terminal-text">Human Languages</td>
              <td>Portuguese (Native), English (Fluent), Spanish (Advanced)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Education */}
      <section className="y2k-box">
        <h2 className="text-3xl font-bold mb-6 neon-glow">
          &lt;EDUCATION /&gt;
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-accent-bright mb-1">
              🎓 Master of Science in Computer Engineering
            </h3>
            <p className="text-sm text-cyan mb-2">
              Instituto Superior Técnico, Universidade de Lisboa, Portugal • 2023 - 2025
            </p>
            <p className="text-sm" style={{ color: '#b0b0b0' }}>
              Via double-degree program • Research in Multilingual AI
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-accent-bright mb-1">
              🎓 Bachelor of Science in Computer Engineering
            </h3>
            <p className="text-sm text-cyan mb-2">
              Universidade de São Paulo, São Carlos, Brazil • 2020 - 2025
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="y2k-box relative">
        <img
          src="/retro-icons/spinning-at.svg"
          alt=""
          className="absolute top-4 right-4 w-12 h-12 opacity-70"
        />
        <h2 className="text-3xl font-bold mb-6 neon-glow text-center">
          &lt;GET_IN_TOUCH /&gt;
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:work@franreno.com"
            className="y2k-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/franreno"
            className="y2k-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💾 GitHub
          </a>
          <a
            href="https://linkedin.com/in/franreno"
            className="y2k-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm terminal-text">
            {'> CONNECT_STATUS: [AWAITING_YOUR_MESSAGE]'}
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
