import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
  padding: 20px 0 15px;
`;

const HeroTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 8px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  opacity: 0.8;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const LocationIcon = styled.i`
  margin-right: 6px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  margin-right: 15px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroTitle>Hi, I'm Matthew Tan</HeroTitle>
        <HeroDescription>
          Software engineer focused on building high-quality, scalable applications. Experienced in full-stack development with a focus on networking applications.
        </HeroDescription>
        
        <LocationContainer>
          <LocationIcon className="fas fa-map-marker-alt" />
          San Francisco Bay Area
        </LocationContainer>
        
        <SocialContainer>
          <SocialLink href="https://github.com/matthewtan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/matthewtan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialContainer>
      </div>
    </HeroSection>
  );
};

export default Hero;