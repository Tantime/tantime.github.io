import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTechIcon } from '../utils/techIcons';
import ProjectMedia from './ProjectMedia';
import projects, { getProjectDetailSections } from '../data/projects';

const ProjectDetailSection = styled.section`
  padding: 60px 0;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const ProjectPeriod = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 20px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

const TechTag = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  padding: 4px 10px;
  background: ${props => props.theme.cardBackground};
  border-radius: 4px;
`;

const TechIcon = styled.i`
  margin-right: 6px;
`;

const ProjectContent = styled.div`
  font-size: 1rem;
  line-height: 1.7;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Change BackLink from a Link to a button
const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${props => props.theme.text};
  font-weight: 500;
  transition: color 0.2s;
  font-size: 0.9rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
  
  i {
    margin-right: 8px;
  }
`;

const ProjectSection = styled.section`
  margin-top: -40px;
  margin-bottom: -40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.6rem;
`;

const SubheaderTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 1.3rem;
`;

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate(); // Use the navigate hook
  
  // Custom navigation handler function
  const handleBackToProjects = () => {
    // Navigate to home first
    navigate('/');
    
    // After a short delay to ensure navigation completes, scroll to projects
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        // Get header height (60px is typical, adjust if your header is different)
        const headerHeight = 60; // Adding extra padding for visual comfort
        
        // Calculate the position with offset
        const elementPosition = projectsSection.offsetTop;
        const offsetPosition = elementPosition - headerHeight;
        
        // Scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  
  const project = projects.find(p => p.slug === slug);
  const projectSections = getProjectDetailSections(slug || '');
  
  if (!project) {
    return (
      <ProjectDetailSection>
        <div className="container">
          <BackLink onClick={handleBackToProjects}>
            <i className="fas fa-arrow-left"></i> Back to Projects
          </BackLink>
          <h1>Project Not Found</h1>
        </div>
      </ProjectDetailSection>
    );
  }
  
  return (
    <ProjectDetailSection>
      <div className="container">
        <BackLink onClick={handleBackToProjects}>
          <i className="fas fa-arrow-left"></i> Back to Projects
        </BackLink>
        
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectPeriod>{project.period}</ProjectPeriod>
        
        <TechList>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>
              <TechIcon className={getTechIcon(tech)} />
              {tech}
            </TechTag>
          ))}
        </TechList>
        
        {/* Main project media */}
        {project.media && project.media.length > 0 && 
          <ProjectMedia media={project.media} />
        }
        
        <ProjectContent>
          {projectSections.map((section, index) => (
            <ProjectSection key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <Paragraph key={pIndex}>{paragraph}</Paragraph>
              ))}
              
              {section.subheaders && section.subheaders.map((subheader, shIndex) => (
                <div key={shIndex}>
                  <SubheaderTitle>{subheader.title}</SubheaderTitle>
                  
                  {subheader.content.split('\n\n').map((paragraph, spIndex) => (
                    <Paragraph key={spIndex}>{paragraph}</Paragraph>
                  ))}
                  
                  {/* Subheader media */}
                  {subheader.media && subheader.media.length > 0 && 
                    <ProjectMedia media={subheader.media} />
                  }
                </div>
              ))}

              {/* Section media */}
              {section.media && section.media.length > 0 && 
                <ProjectMedia media={section.media} />
              }
            </ProjectSection>
          ))}
        </ProjectContent>
      </div>
    </ProjectDetailSection>
  );
};

export default ProjectDetail;