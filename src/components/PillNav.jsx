import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
  items = [
    { label: 'Home', href: '#' },
    { label: 'About IDEA', href: '#about' },
    { label: 'Prices & Awards', href: '#prices' },
    { label: 'Events', href: '#events' },
    { label: 'Registration', href: '#registration' },
    { label: 'Experts', href: '#experts' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Supported By', href: '#supported' },
    { label: 'Founders & Leaders', href: '#founders' },
    { label: 'Organizing Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Partners', href: '#partners' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Resources', href: '#resources' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Accessibility', href: '#accessibility' },
    { label: 'Site Map', href: '#sitemap' },
    { label: 'Help Center', href: '#help' },
    { label: 'Feedback', href: '#feedback' }
  ],
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemRefs = useRef([]);
  const topGradientRef = useRef(null);
  const bottomGradientRef = useRef(null);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    return () => {};
  }, []);

  // Function to handle scroll and update gradient opacities
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    
    if (topGradientRef.current) {
      const topOpacity = Math.min(scrollTop / 50, 1);
      gsap.set(topGradientRef.current, { opacity: topOpacity });
    }
    
    if (bottomGradientRef.current) {
      const bottomDistance = scrollHeight - (scrollTop + clientHeight);
      const bottomOpacity = scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1);
      gsap.set(bottomGradientRef.current, { opacity: bottomOpacity });
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center',
            onComplete: () => {
              // Animate menu items when menu opens
              menuItemRefs.current.forEach((item, index) => {
                if (item) {
                  gsap.fromTo(
                    item,
                    { scale: 0.7, opacity: 0, y: 20 },
                    {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: 'power2.out'
                    }
                  );
                }
              });
            }
          }
        );
      } else {
        // Animate menu items when menu closes
        menuItemRefs.current.forEach((item, index) => {
          if (item) {
            gsap.to(item, {
              scale: 0.7,
              opacity: 0,
              y: 20,
              duration: 0.1,
              delay: index * 0.02,
              ease: 'power2.in'
            });
          }
        });

        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          delay: 0.1,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  // Function to apply gradient text animation
  const applyGradientAnimation = (element, index) => {
    if (!element) return;
    
    // Store reference for animation
    menuItemRefs.current[index] = element;
    
    // Apply gradient background
    const colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"];
    const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;
    
    // Apply gradient and background clip for text
    element.style.background = gradient;
    element.style.backgroundClip = 'text';
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    element.style.backgroundSize = '300% 300%';
    
    // Add animation class for gradient movement
    element.classList.add('gradient-text-animation');
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover" ref={mobileMenuRef} style={cssVars}>
        <div 
          className="scroll-list" 
          onScroll={handleScroll}
        >
          <div className="menu-items-container">
            {items.map((item, index) => (
              <div 
                key={item.href || `mobile-item-${index}`}
                className="item"
                style={{ 
                  transformOrigin: 'top center',
                  marginBottom: '1rem'
                }}
              >
                <a
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                  ref={(el) => applyGradientAnimation(el, index)}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Gradients for scroll indication */}
        <div className="top-gradient" ref={topGradientRef} style={{ opacity: 0 }}></div>
        <div className="bottom-gradient" ref={bottomGradientRef} style={{ opacity: 1 }}></div>
      </div>
    </div>
  );
};

export default PillNav;