
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ForgeLogo from './ForgeLogo';
import { Menu, X } from 'lucide-react';

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
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <ForgeLogo />
          <span className="font-display font-semibold text-xl tracking-tight transition-colors group-hover:text-accent">
            Mind Forge HQ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#what-is-mindforge">About</NavLink>
          <NavLink href="#ecosystem">Ecosystem</NavLink>
          <NavLink href="#cta">Connect</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl">
          <MobileNavLink href="#what-is-mindforge" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink href="#ecosystem" onClick={toggleMobileMenu}>Ecosystem</MobileNavLink>
          <MobileNavLink href="#cta" onClick={toggleMobileMenu}>Connect</MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
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
      className="text-xl font-medium text-muted-foreground hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
};

export default Header;
