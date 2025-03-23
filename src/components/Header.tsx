import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
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

const Logo = styled(Link)`
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

const NavLink = styled(Link)`
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
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo to="home" smooth={true} duration={500} offset={-60} spy={true}>Matthew Tan</Logo>
          <Nav>
            <NavList>
              <NavItem><NavLink to="skills" smooth={true} duration={500} offset={-60}>Skills</NavLink></NavItem>
              <NavItem><NavLink to="experience" smooth={true} duration={500} offset={-60}>Experience</NavLink></NavItem>
              <NavItem><NavLink to="projects" smooth={true} duration={500} offset={-60}>Projects</NavLink></NavItem>
              <NavItem><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></NavItem>
            </NavList>
          </Nav>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;