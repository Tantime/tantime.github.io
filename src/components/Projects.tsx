import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTechIcon } from '../utils/techIcons';
import { Project } from '../types';

const ProjectsSection = styled.section`
  padding: 25px 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectCard = styled(Link)`
  display: block;
  color: ${props => props.theme.text};
  background: ${props => props.theme.cardBackground};
  border-radius: 6px;
  padding: 12px 15px;
  transition: transform 0.2s, background-color 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.cardBackgroundHover};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

const ProjectArrow = styled.span`
  font-size: 0.9rem;
  opacity: 0.5;
`;

const ProjectDescription = styled.p`
  font-size: 0.85rem;
  margin: 4px 0 8px;
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  font-size: 0.75rem;
  opacity: 0.7;
`;

const TechItem = styled.span`
  display: flex;
  align-items: center;
`;

const TechIcon = styled.i`
  margin-right: 4px;
  font-size: 0.8rem;
`;

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      slug: 'autonomous-robotic-car',
      title: 'Autonomous Robotic Car',
      description: 'Search-and-rescue robotic application with vSLAM and real-time object detection to navigate and locate targets',
      technologies: ['Python', 'ROS 2', 'OpenCV', 'Spectacular AI SDK'],
      period: 'Jan 2025 - Mar 2025'
    },
    {
      id: 2,
      slug: 'steam-game-recommender',
      title: 'Steam Game Recommender System',
      description: 'Personalized game recommendation system using collaborative filtering to predict user ratings from sparse data',
      technologies: ['Python', 'Surprise SVD'],
      period: 'Sep 2024 - Dec 2024'
    },
    {
      id: 3,
      slug: 'diabetes-detector',
      title: 'Diabetes Detector',
      description: 'Machine learning models to predict patient diabetes with minimized false negatives for reliable diagnostics',
      technologies: ['Python', 'Scikit-Learn SVC', 'XGBoost'],
      period: 'Sep 2024 - Dec 2024'
    },
    {
      id: 4,
      slug: 'pantrypal',
      title: 'PantryPal (GenAI Recipe App)',
      description: 'AI recipe app generating recipes from voice input with DALL-E image previews in under 10 seconds',
      technologies: ['Java', 'MongoDB', 'HTTP', 'REST API'],
      period: 'Sep 2023 - Dec 2023'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectList>
          {projects.map(project => (
            <ProjectCard key={project.id} to={`/project/${project.slug}`}>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectArrow>→</ProjectArrow>
              </ProjectHeader>
              
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechList>
                {project.technologies.map((tech, index) => (
                  <TechItem key={index}>
                    <TechIcon className={getTechIcon(tech)} />
                    {tech}
                  </TechItem>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectList>
      </div>
    </ProjectsSection>
  );
};

export default Projects;