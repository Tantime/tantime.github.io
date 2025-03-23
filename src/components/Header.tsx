import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const HeaderContainer = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.background};
  z-index: 100;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  transition: background-color 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// Create two logo components - one for scroll, one for router
const LogoScroll = styled(ScrollLink)`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const LogoRouter = styled(RouterLink)`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

// Update the Logo component to use RouterLink
const Logo = styled(RouterLink)`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

// Two types of nav links - one for scroll within homepage, one for router navigation
const NavScrollLink = styled(ScrollLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const NavRouterLink = styled(RouterLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  // Navigation links definition
  const navLinks = [
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' }
  ];

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
        {isProjectPage ? (
            // On project pages, navigate back to homepage
            <LogoRouter to="/">Matthew Tan</LogoRouter>
          ) : (
            // On homepage, scroll to top
            <LogoScroll 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-60} 
              spy={true}
            >
              Matthew Tan
            </LogoScroll>
          )}
          <Nav>
            <NavList>
              {navLinks.map(link => (
                <NavItem key={link.to}>
                  {isProjectPage ? (
                    <NavRouterLink to={`/#${link.to}`}>
                      {link.label}
                    </NavRouterLink>
                  ) : (
                    <NavScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-60}
                    >
                      {link.label}
                    </NavScrollLink>
                  )}
                </NavItem>
              ))}
              <NavItem>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </NavItem>
            </NavList>
          </Nav>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;