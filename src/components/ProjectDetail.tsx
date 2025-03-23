import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTechIcon } from '../utils/techIcons';
import ProjectMedia from './ProjectMedia';

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

  const projects = [
    {
      id: 1,
      slug: 'autonomous-robotic-car',
      title: 'Autonomous Robotic Car',
      period: 'January 2025 - March 2025',
      technologies: ['Python', 'ROS 2', 'OpenCV', 'Spectacular AI SDK'],
      description: `For the Autonomous Robotic Car project, I developed a sophisticated search-and-rescue application that integrates visual Simultaneous Localization and Mapping (vSLAM) with real-time object detection capabilities. The system generates a detailed 3D map of indoor environments while simultaneously locating specific targets. Once a target is identified, the application employs the A* pathfinding algorithm to determine the most efficient route to the nearest exit.

The hardware implementation utilizes an NVIDIA Jetson platform integrated with LiDAR sensors and camera modules, enabling robust real-time navigation and obstacle avoidance. For object detection, I implemented OpenCV and YOLOv5 to process RGB frames and accurately identify the target's location within the mapped environment.

To ensure precise movement control, I fine-tuned PID controllers for both GPS-based pathing and autonomous steering, which significantly enhanced the vehicle's navigation accuracy and throttle control.`,
      media: [
        {
          type: 'image' as const,
          url: '/assets/projects/autonomous-car/mapsai.jpg',
          caption: 'MapsAI group picture'
        },
        {
          type: 'image' as const,
          url: '/assets/projects/autonomous-car/robocar.jpeg',
          caption: 'Robot car'
        },
        {
          type: 'video' as const,
          url: '/assets/projects/autonomous-car/vslam.mov',
          caption: 'Spectacular AI VSLAM output',
        },
        {
          type: 'video' as const,
          url: '/assets/projects/autonomous0car/slam.mov',
          caption: 'SLAM output',
        },
        {
          type: 'video' as const,
          url: '/assets/projects/autonomous-car/object-detection.mov',
          caption: 'YOLOv5 object detection',
        },
      ]
    },
    {
      id: 2,
      slug: 'steam-game-recommender',
      title: 'Steam Game Recommender System',
      period: 'September 2024 - December 2024',
      technologies: ['Python', 'Surprise SVD'],
      description: `The Steam Game Recommender System project addressed the challenge of providing personalized game recommendations from an inherently large, sparse, and imbalanced dataset. I implemented a sophisticated recommendation engine using probabilistic matrix factorization-based collaborative filtering techniques to predict how users would rate games they haven't yet played.

The core of the system relies on Singular Value Decomposition (SVD) implemented with the Surprise library, which I trained using stochastic gradient descent while minimizing Root Mean Square Error (RMSE). A significant portion of the development process involved extensive hyperparameter tuning to identify optimal values for learning rate and regularization parameters, which substantially improved model performance.

By extracting latent factors from user-item interaction data, the system effectively captures hidden relationships between users and games, enabling it to generate highly relevant recommendations even with limited explicit feedback. The final model successfully predicts user preferences across the Steam gaming platform, providing personalized suggestions that align with individual tastes.`
    },
    {
      id: 3,
      slug: 'diabetes-detector',
      title: 'Diabetes Detector',
      period: 'September 2024 - December 2024',
      technologies: ['Python', 'Scikit-Learn SVC', 'XGBoost'],
      description: `The Diabetes Detector project focused on developing a reliable clinical prediction tool using machine learning techniques. I built two complementary classification models—Support Vector Machine (SVM) and Extreme Gradient Boosting (XGBoost)—to predict whether patients have diabetes based on medical indicators.

The development process emphasized clinical application requirements, particularly by prioritizing the minimization of false negative results to reduce the potentially serious consequences of missed diagnoses. To optimize model performance, I implemented extensive feature engineering to extract meaningful patterns from the medical data and employed 10-fold cross-validation to ensure robust generalization capabilities.

The hyperparameter optimization process utilized grid search to systematically explore the parameter space, resulting in models with significantly improved prediction accuracy. The final implementation balances overall accuracy with a particular emphasis on sensitivity, making it suitable for real-world healthcare screening applications where early detection is critical.`
    },
    {
      id: 4,
      slug: 'pantrypal',
      title: 'PantryPal (GenAI Recipe App)',
      period: 'September 2023 - December 2023',
      technologies: ['Java', 'MongoDB', 'HTTP', 'REST API'],
      description: `PantryPal represents an innovative application of generative AI technologies to solve the everyday problem of meal planning with available ingredients. I engineered this responsive recipe application that processes user voice input of available ingredients and rapidly generates creative, viable recipes in under 10 seconds.

The system integrates ChatGPT for intelligent recipe creation and DALL-E for generating appetizing visual previews of the finished dishes, providing users with both instructional and visual guidance. A key technical achievement was the implementation of a three-tier architecture combined with Java multithreading, which dramatically improved recipe generation speed by 6-fold compared to the initial design.

This architecture effectively manages the communication between the user interface, application logic, and external AI services while maintaining responsive performance. The result is a seamless user experience where spoken ingredients are quickly transformed into comprehensive recipes with minimal waiting time, making cooking more accessible and reducing food waste by utilizing available ingredients.`
    }
  ];
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <ProjectDetailSection>
        <div className="container">
          <BackLink to="/"><i className="fas fa-arrow-left"></i> Back to Home</BackLink>
          <h1>Project Not Found</h1>
        </div>
      </ProjectDetailSection>
    );
  }
  
  // Split the description into paragraphs
  const paragraphs = project.description.split('\n\n');
  
  return (
    <ProjectDetailSection>
      <div className="container">
        <BackLink to="/"><i className="fas fa-arrow-left"></i> Back to Home</BackLink>
        
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
          {project.media && <ProjectMedia media={project.media} />}
        </ProjectContent>
      </div>
    </ProjectDetailSection>
  );
};

export default ProjectDetail;