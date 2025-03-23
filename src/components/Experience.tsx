import React from 'react';
import styled from 'styled-components';
import { getTechIcon } from '../utils/techIcons';

const ExperienceSection = styled.section`
  padding: 25px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.6rem;
`;

const Timeline = styled.div`
  position: relative;
  margin-left: 15px;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background: ${props => props.theme.accent};
    opacity: 0.3;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: "";
    position: absolute;
    left: -4px;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.theme.accent};
    box-shadow: 0 0 0 2px ${props => props.theme.background}, 
                0 0 0 3px rgba(0, 113, 227, 0.3);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 2px;
`;

const JobTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${props => props.theme.accent};
`;

const DateRange = styled.span`
  opacity: 0.7;
  font-size: 0.8rem;
  
  @media (max-width: 768px) {
    margin-bottom: 4px;
    display: inline-block;
    margin-top: 2px;
  }
`;

// New bullet list styling
const BulletList = styled.ul`
  margin: 4px 0 6px;
  padding-left: 16px;
`;

const BulletItem = styled.li`
  font-size: 0.85rem;
  margin-bottom: 3px;
  line-height: 1.4;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TechStack = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const TechItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
  margin-bottom: 2px;
  
  &:not(:last-child)::after {
    content: "•";
    margin-left: 6px;
  }
`;

const TechIcon = styled.i`
  margin-right: 4px;
  font-size: 0.8rem;
`;

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Qualcomm',
      position: 'Software Engineer Intern',
      duration: 'June 2024 - Sep. 2024',
      description: [
        'Operated as full-stack developer responsible for internal network automation and device management tools used by 200+ network engineers',
        'Implemented production-level NAC API endpoints to automate device configuration and apply security patches, resulting in 300+ min saved and a 3.5x faster bulk onboarding process',
        'Interfaced with networking teams to build, optimize, and maintain tooling and security pipelines',
        'Co-developed the migration of old firewall codebase to ensure network reliability'
      ],
      technologies: ['ASP.NET Core', 'C#', 'TypeScript', 'Linux', 'Postgres', 'TCP/IP']
    },
    {
      company: 'Harvard Innovation Labs',
      position: 'Software Engineer Intern',
      duration: 'June 2022 - Sep. 2022',
      description: [
        'Created site-wide search feature with filters and sorting, improving retention rate by 32%',
        'Constructed robust content tagging system, allowing for quick article lookup by category',
        'Developed dynamic card components with advanced video playback'
      ],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      company: 'NeuroLeap Corp',
      position: 'Software Engineer Intern',
      duration: 'May 2022 - Sep. 2022',
      description: [
        'Assured quality of AI-powered, multi-sensory IoT devices through black, white, and gray box testing',
        'Increased test coverage by 38% and automated 50+ test cases by implementing unit, component, and E2E testing for screening, assessment, and training applications'
      ],
      technologies: ['Vue', 'Cypress', 'JavaScript']
    }
  ];

  return (
    <ExperienceSection id="experience">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index}>
              <ExperienceHeader>
                <div>
                  <CompanyName>{exp.company}</CompanyName>
                  <JobTitle>{exp.position}</JobTitle>
                </div>
                <DateRange>{exp.duration}</DateRange>
              </ExperienceHeader>
              
              <BulletList>
                {exp.description.map((bullet, i) => (
                  <BulletItem key={i}>{bullet}</BulletItem>
                ))}
              </BulletList>
              
              <TechStack>
                {exp.technologies.map((tech, i) => (
                  <TechItem key={i}>
                    <TechIcon className={getTechIcon(tech)} />
                    {tech}
                  </TechItem>
                ))}
              </TechStack>
            </ExperienceCard>
          ))}
        </Timeline>
      </div>
    </ExperienceSection>
  );
};

export default Experience;