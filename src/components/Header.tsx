import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ForgeLogo from './ForgeLogo';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4',
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-accent/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <ForgeLogo />
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight transition-colors group-hover:text-accent">
              MIND FORGE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
              Structured Chaos
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#what-is-mindforge">Identity</NavLink>
          <NavLink href="#ecosystem">Framework</NavLink>
          <NavLink href="#cta">Connect</NavLink>
          <a 
            href="#" 
            className="px-4 py-2 border border-accent/50 text-accent hover:bg-accent/10 transition-colors duration-300 font-medium text-sm flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Lab
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl">
          <MobileNavLink href="#what-is-mindforge" onClick={toggleMobileMenu}>Identity</MobileNavLink>
          <MobileNavLink href="#ecosystem" onClick={toggleMobileMenu}>Framework</MobileNavLink>
          <MobileNavLink href="#cta" onClick={toggleMobileMenu}>Connect</MobileNavLink>
          <a 
            href="#" 
            className="mt-4 px-6 py-3 border border-accent/50 text-accent hover:bg-accent/10 transition-colors duration-300 font-medium text-lg flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Enter The Lab
            <ExternalLink size={16} />
          </a>
        </nav>
        
        {/* Decorative mobile menu elements */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute top-1/3 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
      </div>
    </header>
  );
};

const NavLink: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group overflow-hidden"
    >
      <span className="relative z-10 uppercase tracking-wider">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-px bg-accent transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
    </a>
  );
};

const MobileNavLink: React.FC<{href: string, onClick?: () => void, children: React.ReactNode}> = ({ 
  href, 
  onClick, 
  children 
}) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-xl font-medium text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest font-mono"
    >
      {children}
    </a>
  );
};

export default Header;