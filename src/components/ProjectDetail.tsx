import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTechIcon } from '../utils/techIcons';
import ProjectMedia from './ProjectMedia';
import projects, { getProjectDetailDescription } from '../data/projects';

const ProjectDetailSection = styled.section`
  padding: 60px 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${props => props.theme.text};
  font-weight: 500;
  transition: color 0.2s;
  font-size: 0.9rem;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
  
  i {
    margin-right: 8px;
  }
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

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <ProjectDetailSection>
        <div className="container">
          <BackLink to="/#projects"><i className="fas fa-arrow-left"></i> Back to Home</BackLink>
          <h1>Project Not Found</h1>
        </div>
      </ProjectDetailSection>
    );
  }
  
  // Get the detailed description for the current project
  const detailedDescription = getProjectDetailDescription(project.slug);
  
  // Split the description into paragraphs
  const paragraphs = detailedDescription.split('\n\n');
  
  return (
    <ProjectDetailSection>
      <div className="container">
        <BackLink to="/#projects"><i className="fas fa-arrow-left"></i> Back to Home</BackLink>
        
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
        
        <ProjectContent>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
          
          {project.media && project.media.length > 0 && 
            <ProjectMedia media={project.media} />
          }
        </ProjectContent>
      </div>
    </ProjectDetailSection>
  );
};

export default ProjectDetail;