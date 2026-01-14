'use client';

import { BootSequence } from '@/components/BootSequence';

export default function ResearchPage() {
  return (
    <>
      <BootSequence />
      <div className="space-y-12">
        {/* Header */}
        <section className="py-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 chrome-text">
          RESEARCH
        </h1>
        <p className="text-xl" style={{ color: '#b0b0b0' }}>
          Multilingual AI // Computer Vision // NLP
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Main Research Project */}
      <section className="y2k-box" style={{ borderWidth: '2px' }}>
        <div className="flex items-start gap-4 mb-6">
          <span className="text-4xl">🔬</span>
          <div>
            <h2 className="text-3xl font-bold mb-2 text-accent-bright">
              Multilingual Referring Expression Comprehension
            </h2>
            <p className="text-sm text-cyan">
              Master's Thesis • Instituto Superior Técnico, Lisbon • 2024-2025
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-accent">
            Overview
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#b0b0b0' }}>
            This research addresses a significant gap in multilingual referring expression comprehension by developing
            AI systems that can localize objects in images based on natural language descriptions
            across multiple languages.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#b0b0b0' }}>
            The project demonstrates that effective multilingual referring expression comprehension can be achieved
            through strategic dataset expansion and architecture design, enabling more inclusive
            AI systems accessible to non-English speakers worldwide.
          </p>
        </div>

        {/* Key Contributions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-accent">
            Key Contributions
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="terminal-text font-bold mt-1">&gt;</span>
              <div>
                <strong className="text-accent-bright">Multilingual Dataset</strong>
                <p className="text-sm mt-1" style={{ color: '#b0b0b0' }}>
                  Unified corpus spanning <strong>10 languages</strong>: English, Portuguese, Spanish,
                  French, German, Dutch, Italian, Korean, Chinese, and Russian. Contains{' '}
                  <strong>8 million referring expressions</strong>, <strong>70,000 images</strong>,
                  and <strong>346,000 annotated objects</strong>. Built by expanding 12 existing
                  English benchmarks.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="terminal-text font-bold mt-1">&gt;</span>
              <div>
                <strong className="text-accent-bright">Neural Architecture</strong>
                <p className="text-sm mt-1" style={{ color: '#b0b0b0' }}>
                  Attention-anchored approach using frozen multilingual SigLIP2 encoders. Generates
                  spatial anchors from attention distributions, refined through learned residuals
                  for precise object localization.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="terminal-text font-bold mt-1">&gt;</span>
              <div>
                <strong className="text-accent-bright">Comprehensive Evaluation</strong>
                <p className="text-sm mt-1" style={{ color: '#b0b0b0' }}>
                  Designed evaluation pipeline measuring model performance across languages and
                  metrics, enabling systematic analysis of cross-lingual capabilities.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="terminal-text font-bold mt-1">&gt;</span>
              <div>
                <strong className="text-accent-bright">Open Resources</strong>
                <p className="text-sm mt-1" style={{ color: '#b0b0b0' }}>
                  Published complete dataset, model weights, and evaluation code for community use
                  on GitHub and Hugging Face platforms.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Performance Metrics */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-accent">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="p-4 text-center"
              style={{
                background: '#0f0f0f',
                border: '2px solid #333',
                boxShadow: 'inset 0 0 12px rgba(168, 85, 247, 0.2)'
              }}
            >
              <div className="text-3xl font-bold text-accent-bright mb-2 glow-pulse">
                86.9%
              </div>
              <div className="text-xs uppercase tracking-wide terminal-text">
                Accuracy at IoU@50
              </div>
              <div className="text-xs mt-1" style={{ color: '#666' }}>
                RefCOCO Multilingual
              </div>
            </div>
            <div
              className="p-4 text-center"
              style={{
                background: '#0f0f0f',
                border: '2px solid #333',
                boxShadow: 'inset 0 0 12px rgba(168, 85, 247, 0.2)'
              }}
            >
              <div className="text-3xl font-bold text-accent-bright mb-2 glow-pulse">
                2-4%
              </div>
              <div className="text-xs uppercase tracking-wide terminal-text">
                Gap from English
              </div>
              <div className="text-xs mt-1" style={{ color: '#666' }}>
                Romance Languages
              </div>
            </div>
            <div
              className="p-4 text-center"
              style={{
                background: '#0f0f0f',
                border: '2px solid #333',
                boxShadow: 'inset 0 0 12px rgba(168, 85, 247, 0.2)'
              }}
            >
              <div className="text-3xl font-bold text-accent-bright mb-2 glow-pulse">
                &lt;8%
              </div>
              <div className="text-xs uppercase tracking-wide terminal-text">
                Performance Variance
              </div>
              <div className="text-xs mt-1" style={{ color: '#666' }}>
                Across Language Families
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 text-accent">
            Available Resources
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://multilingual.franreno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="y2k-button"
            >
              🌐 Project Website
            </a>
            <a
              href="https://github.com/franreno/MultilingualReferringExpression-pub"
              target="_blank"
              rel="noopener noreferrer"
              className="y2k-button"
            >
              💾 GitHub Repository
            </a>
            <a
              href="https://huggingface.co/datasets/Franreno/MultilingualReferringExpression"
              target="_blank"
              rel="noopener noreferrer"
              className="y2k-button"
            >
              🤗 Hugging Face
            </a>
          </div>
        </div>

        {/* Publication */}
        <div className="mt-8 pt-6 border-t-2 border-accent">
          <h3 className="text-lg font-bold mb-4 text-accent">
            Publication
          </h3>

          {/* APA Citation */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-accent-bright">APA Citation</h4>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('Nogueira, F. R. (2025). Comprehension of Multilingual Expressions Referring to Target Objects in Visual Inputs. arXiv preprint arXiv:2511.11427.');
                  const btn = document.getElementById('apa-copy-btn');
                  if (btn) {
                    btn.textContent = '✓ COPIED';
                    setTimeout(() => btn.textContent = '📋 COPY', 2000);
                  }
                }}
                id="apa-copy-btn"
                className="y2k-button text-xs py-1 px-3 min-w-0"
                style={{ fontSize: '0.7rem', padding: '0.4rem 0.75rem' }}
              >
                📋 COPY
              </button>
            </div>
            <div
              className="p-4 font-mono text-sm"
              style={{
                background: '#0a0a0a',
                border: '2px solid #333',
                color: '#b0b0b0'
              }}
            >
              <p className="mb-2">
                <strong className="text-accent-bright">Nogueira, F. R.</strong> (2025).
              </p>
              <p className="italic mb-2">
                Comprehension of Multilingual Expressions Referring to Target Objects in Visual Inputs.
              </p>
              <p className="text-xs">
                arXiv preprint arXiv:2511.11427.
              </p>
            </div>
          </div>

          {/* BibTeX Citation */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-accent-bright">BibTeX</h4>
              <button
                onClick={() => {
                  const bibtex = `@misc{nogueira2025comprehensionmultilingualexpressionsreferring,
      title={Comprehension of Multilingual Expressions Referring to Target Objects in Visual Inputs},
      author={Francisco Nogueira and Alexandre Bernardino and Bruno Martins},
      year={2025},
      eprint={2511.11427},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.11427},
}`;
                  navigator.clipboard.writeText(bibtex);
                  const btn = document.getElementById('bibtex-copy-btn');
                  if (btn) {
                    btn.textContent = '✓ COPIED';
                    setTimeout(() => btn.textContent = '📋 COPY', 2000);
                  }
                }}
                id="bibtex-copy-btn"
                className="y2k-button text-xs py-1 px-3 min-w-0"
                style={{ fontSize: '0.7rem', padding: '0.4rem 0.75rem' }}
              >
                📋 COPY
              </button>
            </div>
            <div
              className="p-4 font-mono text-xs overflow-x-auto"
              style={{
                background: '#0a0a0a',
                border: '2px solid #333',
                color: '#00ff41'
              }}
            >
              <pre style={{ margin: 0, whiteSpace: 'pre' }}>
{`@misc{nogueira2025comprehensionmultilingualexpressionsreferring,
      title={Comprehension of Multilingual Expressions Referring to Target Objects in Visual Inputs},
      author={Francisco Nogueira and Alexandre Bernardino and Bruno Martins},
      year={2025},
      eprint={2511.11427},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.11427},
}`}
              </pre>
            </div>
          </div>

          {/* arXiv Link */}
          <div className="mt-4 text-center">
            <a
              href="https://arxiv.org/abs/2511.11427"
              target="_blank"
              rel="noopener noreferrer"
              className="y2k-button inline-block"
            >
              📄 View on arXiv
            </a>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="y2k-box" style={{ borderWidth: '2px' }}>
        <h2 className="text-2xl font-bold mb-6 text-accent">
          Research Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-base font-bold mb-2 text-accent-bright">
              Multilingual NLP
            </h4>
            <p className="text-sm" style={{ color: '#b0b0b0' }}>
              Developing AI systems that work across languages, enabling more inclusive
              and accessible technology for diverse global communities.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold mb-2 text-accent-bright">
              Computer Vision
            </h4>
            <p className="text-sm" style={{ color: '#b0b0b0' }}>
              Developing vision systems that bridge language and visual understanding,
              enabling machines to interpret and reason about visual content through
              natural language interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Previous Research */}
      <section className="y2k-box" style={{ borderWidth: '2px' }}>
        <h2 className="text-2xl font-bold mb-6 text-accent">
          Previous Research Experience
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-accent-bright mb-1">
              Research Assistant – Data Analysis
            </h3>
            <p className="text-sm text-cyan mb-2">
              Universidade de São Paulo & Universidade do Rio de Janeiro • Aug 2021 - Aug 2022
            </p>
            <p className="text-sm" style={{ color: '#b0b0b0' }}>
              Applied topological data analysis to multivariate biological datasets for
              epidemiological research. Developed data visualizations and analysis pipelines
              for understanding complex biological patterns.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
