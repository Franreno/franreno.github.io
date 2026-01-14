import { BootSequence } from '@/components/BootSequence';

export const metadata = {
  title: 'Projects | Francisco Nogueira',
  description: 'Data pipelines, backend systems, and ML experiments',
};

const projects = [
  {
    id: 1,
    title: 'Inductiva API Platform',
    description: 'Production-grade backend API orchestrating cloud resources, VM lifecycle management, and multi-tenant workloads across GCP. Integrated Stripe payments and automated billing.',
    tech: ['Python', 'PostgreSQL', 'GCP', 'Docker', 'Stripe'],
    status: 'Production',
    link: 'https://inductiva.ai',
    year: '2023-Present',
  },
  {
    id: 2,
    title: 'ETL Data Infrastructure',
    description: 'Built scalable ETL pipelines using dbt and SQL with multi-layer caching, handling 10K+ daily queries. Automated quality checks and real-time analytics reporting.',
    tech: ['dbt', 'SQL', 'Python', 'PostgreSQL', 'Data Modeling'],
    status: 'Production',
    link: 'https://inductiva.ai',
    year: '2024',
  },
  {
    id: 3,
    title: 'Multilingual Visual Grounding',
    description: 'Research project expanding visual grounding to 10 languages. Built unified dataset (8M expressions, 177K images) and neural architecture achieving 86.9% accuracy.',
    tech: ['PyTorch', 'NLP', 'Computer Vision', 'Dataset Curation'],
    status: 'Published',
    link: 'https://multilingual.franreno.com',
    year: '2024-2025',
  },
  {
    id: 4,
    title: 'Scientific Simulator Containers',
    description: 'Containerized open-source scientific simulators for HPC environments. Researched and documented integration guides for distributed computing workflows.',
    tech: ['Docker', 'HPC', 'Slurm', 'Scientific Computing'],
    status: 'Completed',
    link: 'https://github.com/inductiva',
    year: '2023-2024',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <BootSequence />
      <div className="space-y-12">
        {/* Header */}
        <section className="py-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 chrome-text">
          PROJECTS
        </h1>
        <p className="text-xl terminal-text">
          &gt; Data Pipelines // Backend Systems // ML Research
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Projects Table */}
      <section>
        <div className="overflow-x-auto">
          <table className="y2k-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Tech Stack</th>
                <th>Status</th>
                <th>Year</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="font-bold text-accent-bright">{project.title}</td>
                  <td className="max-w-md" style={{ color: '#b0b0b0' }}>{project.description}</td>
                  <td>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="retro-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`retro-badge ${
                        project.status === 'Production' ? 'badge-green' :
                        project.status === 'Published' ? 'badge-cyan' : ''
                      }`}
                    >
                      {project.status === 'Production' && '🟢 '}
                      {project.status === 'Published' && '📄 '}
                      {project.status === 'Completed' && '✓ '}
                      {project.status}
                    </span>
                  </td>
                  <td className="text-cyan font-mono text-sm">{project.year}</td>
                  <td>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="y2k-button text-xs py-2 px-3 min-w-0"
                      style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
                    >
                      VIEW →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="y2k-box text-center relative">
        <img
          src="/retro-icons/construction.svg"
          alt=""
          className="absolute top-4 left-4 w-12 h-12 opacity-40"
        />
        <h3 className="text-2xl font-bold mb-4 neon-glow">
          &lt;MORE_CODE /&gt;
        </h3>
        <p className="mb-6" style={{ color: '#b0b0b0' }}>
          Want to see more? Check out my GitHub for additional projects, open-source contributions,
          and experimental code.
        </p>
        <a
          href="https://github.com/franreno"
          target="_blank"
          rel="noopener noreferrer"
          className="y2k-button"
        >
          💾 Visit GitHub Profile
        </a>
        <div className="mt-6">
          <p className="text-sm terminal-text">
            {'> REPOSITORY_COUNT: [LOADING...]'}
          </p>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="y2k-box">
        <h3 className="text-2xl font-bold mb-6 neon-glow">
          &lt;TECH_STACK_OVERVIEW /&gt;
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-3 text-accent-bright">Backend & Infrastructure</h4>
            <div className="flex flex-wrap gap-2">
              <span className="retro-badge">Python</span>
              <span className="retro-badge">PostgreSQL</span>
              <span className="retro-badge">Docker</span>
              <span className="retro-badge">GCP</span>
              <span className="retro-badge">REST APIs</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 text-accent-bright">Data & ML</h4>
            <div className="flex flex-wrap gap-2">
              <span className="retro-badge badge-cyan">dbt</span>
              <span className="retro-badge badge-cyan">SQL</span>
              <span className="retro-badge badge-cyan">PyTorch</span>
              <span className="retro-badge badge-cyan">ETL</span>
              <span className="retro-badge badge-cyan">NLP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
