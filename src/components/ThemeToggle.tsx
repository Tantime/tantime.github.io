import React from 'react';
import styled from 'styled-components';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 5px;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌖'}
    </ToggleButton>
  );
};

export default ThemeToggle;