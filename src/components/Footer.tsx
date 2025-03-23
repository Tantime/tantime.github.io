import React from 'react';
import styled from 'styled-components';
import { SocialLink as SocialLinkType } from '../types';

const FooterContainer = styled.footer`
  padding: 40px 0;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 22px;
  margin: 0 15px;
  opacity: 0.7;
  transition: color 0.3s, opacity 0.3s;
  
  &:hover {
    color: ${props => props.theme.accent};
    opacity: 1;
  }
`;

const Copyright = styled.p`
  opacity: 0.7;
  font-size: 14px;
`;

const Footer: React.FC = () => {
  // Using the exact same icons as in the intro section
  const socialLinks: SocialLinkType[] = [
    { name: 'GitHub', url: 'https://github.com/Tantime', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/matthewztan', icon: 'fab fa-linkedin' },
    { name: 'Email', url: 'mailto:matthew.z.tan@gmail.com', icon: 'fas fa-envelope' }
  ];

  return (
    <FooterContainer>
      <div className="container">
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <i className={link.icon}></i>
            </SocialLink>
          ))}
        </SocialLinks>
        <Copyright>© {new Date().getFullYear()} YourName.dev · All rights reserved</Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;