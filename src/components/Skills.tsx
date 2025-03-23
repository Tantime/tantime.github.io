import React from 'react';
import styled from 'styled-components';
import { getTechIcon } from '../utils/techIcons';

interface Skill {
  name: string;
  category?: string;
}

const SkillsSection = styled.section`
  padding: 25px 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  padding: 4px 8px;
  background: ${props => props.theme.cardBackground};
  border-radius: 4px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const SkillIcon = styled.i`
  margin-right: 6px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Skills: React.FC = () => {
  // Populate with skills from your resume
  const skills: Skill[] = [
    { name: 'Git' },
    { name: 'Linux' },
    { name: 'C#' },
    { name: 'TypeScript' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'Postgres' },
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'MongoDB' },
    { name: 'Docker' },
    { name: 'AWS' },
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillIcon className={getTechIcon(skill.name)} />
              {skill.name}
            </SkillItem>
          ))}
        </SkillsList>
      </div>
    </SkillsSection>
  );
};

export default Skills;