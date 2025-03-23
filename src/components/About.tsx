import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
`;

const AboutText = styled.p`
  margin-bottom: 20px;
  max-width: 700px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.accent};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  
  &:active {
    transform: scale(0.97);
  }
  
  &:hover {
    background-color: ${props => props.theme.accent}dd;
  }
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${props => props.theme.accent};
  color: ${props => props.theme.accent};
  margin-left: 10px;
  
  &:hover {
    background-color: ${props => props.theme.accent};
    color: white;
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          I'm a software developer with over X years of experience building web applications. 
          I specialize in frontend development with React and backend systems with Node.js.
        </AboutText>
        <AboutText>
          When I'm not coding, I enjoy hiking, reading sci-fi novels, and experimenting with new technologies.
        </AboutText>
        <AboutText>
          Currently based in City, Country.
        </AboutText>
        <ButtonContainer>
          <Button href="#">Download Resume</Button>
          <OutlineButton href="#contact">Contact Me</OutlineButton>
        </ButtonContainer>
      </div>
    </AboutSection>
  );
};

export default About;