import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowRight, X, Maximize2, Minimize2 } from 'lucide-react';

const TerminalDemo = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Mind Forge Terminal v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' },
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add the user's command to history
    setHistory(prev => [...prev, { type: 'command', content: input }]);
    
    // Process the command
    processCommand(input.trim().toLowerCase());
    
    // Clear input
    setInput('');
  };

  const processCommand = (cmd) => {
    // Split the command and arguments
    const parts = cmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        showHelp();
        break;
      case 'clear':
        clearTerminal();
        break;
      case 'about':
        showAbout();
        break;
      case 'forge':
        forgeCommand(args);
        break;
      case 'framework':
        showFramework();
        break;
      case 'mindmap':
        showMindMap();
        break;
      case 'channels':
        showChannels();
        break;
      case 'engines':
        showEngines();
        break;
      case 'echo':
        showEcho(args);
        break;
      case 'manifest':
        showManifest();
        break;
      default:
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: `Command not found: ${command}. Type "help" for available commands.` 
        }]);
    }
  };

  const showHelp = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
Available commands:
  help      - Show this help message
  clear     - Clear the terminal
  about     - About Mind Forge HQ
  forge     - Create and build (usage: forge <idea/system/framework>)
  framework - Display the creation framework
  mindmap   - Show Mind Forge architecture
  channels  - List knowledge channels
  engines   - Show reality engines
  echo      - Echo a message (usage: echo <message>)
  manifest  - Display the operational principle
      `
    }]);
  };

  const clearTerminal = () => {
    setHistory([
      { type: 'system', content: 'Mind Forge Terminal v1.0.0' },
      { type: 'system', content: 'Type "help" to see available commands.' },
    ]);
  };

  const showAbout = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
Mind Forge HQ is a collective for rogue creators who write their own rules.
A digital forge where raw intelligence, creativity, and structured chaos 
combine to build systems that change reality itself.
      `
    }]);
  };

  const forgeCommand = (args) => {
    if (args.length === 0) {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: 'Usage: forge <idea/system/framework>' 
      }]);
      return;
    }

    const target = args.join(' ');
    
    // Simulate a loading process
    setHistory(prev => [...prev, { type: 'system', content: `Initializing forge sequence for "${target}"...` }]);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'system', content: 'Gathering resources... [###-------] 30%' }]);
    }, 500);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'system', content: 'Building structure... [######----] 60%' }]);
    }, 1000);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'system', content: 'Infusing intelligence... [#########-] 90%' }]);
    }, 1500);
    
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        type: 'success', 
        content: `Successfully forged: "${target}". Build without apology.` 
      }]);
    }, 2000);
  };

  const showFramework = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
CREATION FRAMEWORK:
1. ENVISION: See what others can't through heightened perception
2. FORGE: Build without permission or apology
3. TRANSMIT: Share the vision in its most potent form
4. EXPAND: Move beyond limits while others are still processing
      `
    }]);
  };

  const showMindMap = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
MIND FORGE HQ
├── THE LAB [mindforgehq.co]
│   └── Central hub for all projects
│
├── KNOWLEDGE CHANNELS
│   ├── Metaphysical Reality [Substack]
│   ├── Strategic Execution [Medium]
│   └── Technical Forge [GitHub]
│
├── REALITY ENGINES
│   ├── Lumina
│   ├── PDI Framework
│   └── New Reality Projects
│
└── PROFESSIONAL REACH
    └── Engineering Leadership & AI Strategy
      `
    }]);
  };

  const showChannels = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
KNOWLEDGE CHANNELS:

> Metaphysical Reality [Substack]
  Intelligence, consciousness mechanics, reality frameworks

> Strategic Execution [Medium]
  Leadership, AI strategy, system optimization

> Technical Forge [GitHub]
  Code, data, technical implementations
      `
    }]);
  };

  const showEngines = () => {
    setHistory(prev => [...prev, { 
      type: 'system', 
      content: `
REALITY ENGINES:

> Lumina
  Consciousness-optimized decision timing

> PDI Framework
  Projection Density measurement system

> New Reality Projects
  Emerging platforms for consciousness expansion
      `
    }]);
  };

  const showEcho = (args) => {
    if (args.length === 0) {
      setHistory(prev => [...prev, { 
        type: 'system', 
        content: 'Usage: echo <message>' 
      }]);
      return;
    }

    const message = args.join(' ');
    setHistory(prev => [...prev, { type: 'echo', content: message }]);
  };

  const showManifest = () => {
    setHistory(prev => [...prev, { 
      type: 'success', 
      content: `OPERATIONAL PRINCIPLE: Create without permission. Build without apology. Change reality itself.` 
    }]);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${isMinimized ? 'h-12' : 'h-96'} bg-black/95 border border-accent/50 shadow-lg flex flex-col transition-all duration-300 overflow-hidden`}>
      {/* Terminal header with controls */}
      <div 
        className="h-12 bg-black/90 border-b border-accent/30 px-4 flex items-center justify-between cursor-pointer"
        onClick={focusInput}
      >
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-accent" />
          <span className="text-xs font-mono text-muted-foreground">mind-forge@hq:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              clearTerminal();
            }} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      
      {/* Terminal body */}
      {!isMinimized && (
        <>
          <div 
            ref={terminalRef}
            className="flex-grow p-4 overflow-y-auto font-mono text-sm"
            onClick={focusInput}
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'command' && (
                  <div className="flex items-start">
                    <span className="text-accent mr-2">$</span>
                    <span className="text-foreground">{entry.content}</span>
                  </div>
                )}
                {entry.type === 'system' && (
                  <div className="text-muted-foreground whitespace-pre-wrap pl-4">{entry.content}</div>
                )}
                {entry.type === 'success' && (
                  <div className="text-green-400 whitespace-pre-wrap pl-4">{entry.content}</div>
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400 whitespace-pre-wrap pl-4">{entry.content}</div>
                )}
                {entry.type === 'echo' && (
                  <div className="text-purple-300 whitespace-pre-wrap pl-4">{entry.content}</div>
                )}
              </div>
            ))}
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSubmit} className="border-t border-accent/30 bg-black/80 p-2">
            <div className="flex items-center">
              <span className="text-accent mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-grow bg-transparent border-none outline-none text-foreground font-mono text-sm"
                placeholder="Type a command..."
                autoFocus
              />
              <button 
                type="submit"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default TerminalDemo;