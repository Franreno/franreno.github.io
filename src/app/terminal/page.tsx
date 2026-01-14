'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

{/*
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

  Secret terminal interface!
  Type 'help' for available commands.
*/}

import type { ReactNode } from 'react';

interface HistoryEntry {
  command: string;
  output: string | ReactNode;
}

export default function TerminalPage() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom on new history
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Show welcome message on mount
  useEffect(() => {
    setHistory([{
      command: '',
      output: (
        <div>
          <pre className="text-accent-bright" style={{ fontSize: '10px', lineHeight: '1.1' }}>
{`
 ███████╗██████╗  █████╗ ███╗   ██╗    ████████╗███████╗██████╗ ███╗   ███╗
 ██╔════╝██╔══██╗██╔══██╗████╗  ██║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║
 █████╗  ██████╔╝███████║██╔██╗ ██║       ██║   █████╗  ██████╔╝██╔████╔██║
 ██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║
 ██║     ██║  ██║██║  ██║██║ ╚████║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
`}
          </pre>
          <p className="terminal-text mt-4">Welcome to FranTerm v2.0!</p>
          <p className="text-gray-500 mt-2">Type <span className="terminal-text">help</span> for available commands.</p>
        </div>
      )
    }]);
  }, []);

  const processCommand = (cmd: string): string | ReactNode => {
    const trimmed = cmd.toLowerCase().trim();
    const args = trimmed.split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        return (
          <div className="space-y-1">
            <p className="text-accent-bright font-bold">Available Commands:</p>
            <p><span className="terminal-text">help</span> - Show this help message</p>
            <p><span className="terminal-text">about</span> - Learn about Francisco</p>
            <p><span className="terminal-text">skills</span> - View technical skills</p>
            <p><span className="terminal-text">contact</span> - Get contact info</p>
            <p><span className="terminal-text">research</span> - View research info</p>
            <p><span className="terminal-text">ls</span> - List pages</p>
            <p><span className="terminal-text">cd [page]</span> - Navigate to page</p>
            <p><span className="terminal-text">cat readme</span> - Read the readme</p>
            <p><span className="terminal-text">matrix</span> - Enter the Matrix</p>
            <p><span className="terminal-text">cowsay [msg]</span> - Make a cow say something</p>
            <p><span className="terminal-text">clear</span> - Clear terminal</p>
            <p><span className="terminal-text">exit</span> - Return to homepage</p>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-2">
            <p className="text-accent-bright font-bold">{'> cat /home/francisco/about.txt'}</p>
            <p>Name: Francisco Reis Nogueira</p>
            <p>Role: Data & ML Engineer</p>
            <p>Location: São Paulo, Brazil (Remote)</p>
            <p>Company: Inductiva Research Labs (Lisbon)</p>
            <p>Education: MSc Computer Engineering (IST + USP)</p>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-2">
            <p className="text-accent-bright font-bold">{'> cat /home/francisco/skills.json'}</p>
            <pre className="text-sm">
{`{
  "data_engineering": ["dbt", "SQL", "Python", "ETL"],
  "backend": ["REST APIs", "GCP", "Docker"],
  "ml": ["PyTorch", "TensorFlow", "NLP"],
  "languages": ["Python", "SQL", "JS", "C++"]
}`}
            </pre>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-2">
            <p className="text-accent-bright font-bold">{'> cat /home/francisco/.contact'}</p>
            <p>Email: work@franreno.com</p>
            <p>GitHub: github.com/franreno</p>
            <p>LinkedIn: linkedin.com/in/franreno</p>
          </div>
        );

      case 'research':
        return (
          <div className="space-y-2">
            <p className="text-accent-bright font-bold">{'> cat /research/mrec.md'}</p>
            <p className="font-bold">Multilingual Referring Expression Comprehension</p>
            <p>- 10 languages supported</p>
            <p>- 8M+ referring expressions</p>
            <p>- 70K images, 346K objects</p>
            <p className="mt-2">arXiv: arxiv.org/abs/2511.11427</p>
          </div>
        );

      case 'ls':
        return (
          <div>
            <p className="text-cyan">drwxr-xr-x  home/</p>
            <p className="text-cyan">drwxr-xr-x  research/</p>
            <p className="text-cyan">drwxr-xr-x  projects/</p>
            <p className="text-cyan">drwxr-xr-x  terminal/</p>
            <p className="text-yellow-500">-rw-r--r--  readme.txt</p>
          </div>
        );

      case 'cd':
        const page = args[1];
        if (!page) {
          return 'Usage: cd [page] - Try: home, research, projects';
        }
        if (page === 'home' || page === '~' || page === '/') {
          setTimeout(() => router.push('/'), 500);
          return 'Navigating to home...';
        }
        if (page === 'research') {
          setTimeout(() => router.push('/research'), 500);
          return 'Navigating to research...';
        }
        if (page === 'projects') {
          setTimeout(() => router.push('/projects'), 500);
          return 'Navigating to projects...';
        }
        return `cd: ${page}: No such directory`;

      case 'cat':
        if (args[1] === 'readme' || args[1] === 'readme.txt') {
          return (
            <div>
              <p className="text-accent-bright font-bold">README.txt</p>
              <p className="mt-2">Welcome to my Y2K-styled personal website!</p>
              <p className="mt-2">Easter eggs hidden throughout:</p>
              <p>- Konami code on any page</p>
              <p>- This terminal</p>
              <p>- ASCII art in source code</p>
              <p className="mt-2 text-gray-500">Made with Next.js + lots of nostalgia</p>
            </div>
          );
        }
        return `cat: ${args[1] || 'missing operand'}: No such file`;

      case 'matrix':
        return (
          <div>
            <p className="terminal-text">Entering the Matrix...</p>
            <p className="text-gray-500 mt-2">Hint: Try the Konami code on the main site!</p>
            <p className="text-gray-500">↑ ↑ ↓ ↓ ← → ← → B A</p>
          </div>
        );

      case 'cowsay':
        const message = args.slice(1).join(' ') || 'Moo!';
        return (
          <pre className="text-sm">
{` ${'_'.repeat(message.length + 2)}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
          </pre>
        );

      case 'clear':
        setHistory([]);
        return '';

      case 'exit':
        setTimeout(() => router.push('/'), 500);
        return 'Goodbye! Returning to homepage...';

      case 'sudo':
        return 'Nice try! But you need root access for that. 😎';

      case 'rm':
        return 'Whoa there! Let\'s not delete anything important...';

      case 'hack':
        return 'ACCESS DENIED. FBI has been notified. Just kidding! 🕵️';

      case 'hello':
      case 'hi':
        return 'Hello, friend! Welcome to my terminal. Type "help" to get started.';

      case '':
        return '';

      default:
        return `Command not found: ${command}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
    }

    const output = processCommand(input);

    if (input.toLowerCase().trim() !== 'clear') {
      setHistory(prev => [...prev, { command: input, output }]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      className="min-h-[80vh] p-4 font-mono text-sm cursor-text"
      style={{
        background: '#000',
        border: '3px solid #333',
        boxShadow: 'inset 0 0 50px rgba(0, 255, 65, 0.1)',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div
        className="-m-4 mb-4 p-3 flex items-center gap-2"
        style={{
          background: 'linear-gradient(180deg, #333 0%, #1a1a1a 100%)',
          borderBottom: '2px solid #444',
        }}
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#27ca40' }} />
        </div>
        <span className="text-gray-400 text-xs ml-2">franterm@franreno.com</span>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="overflow-y-auto"
        style={{ maxHeight: 'calc(80vh - 120px)' }}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.command && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent-bright">guest@franreno</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan">~</span>
                <span className="text-gray-500">$</span>
                <span className="terminal-text">{entry.command}</span>
              </div>
            )}
            <div style={{ color: '#b0b0b0' }}>{entry.output}</div>
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-accent-bright">guest@franreno</span>
          <span className="text-gray-500">:</span>
          <span className="text-cyan">~</span>
          <span className="text-gray-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none terminal-text"
            style={{ caretColor: '#00ff41' }}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <span className="blink terminal-text">▌</span>
        </form>
      </div>
    </div>
  );
}
