import React from 'react';
import styled from 'styled-components';

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  duration: string;
}

const EducationSection = styled.section`
  padding: 25px 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EducationCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-left: 1px solid ${props => props.theme.accent}40;
  padding-left: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const SchoolName = styled.h3`
  font-size: 1rem;
  margin-bottom: 2px;
`;

const DegreeInfo = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0;
  color: ${props => props.theme.accent};
  font-weight: 500;
`;

const DurationInfo = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    margin-top: 4px;
  }
`;

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      school: 'University of California, San Diego',
      degree: 'Bachelor of Science',
      field: 'Computer Engineering',
      duration: '2021 - 2025'
    }
  ];

  return (
    <EducationSection id="education">
      <div className="container">
        <SectionTitle>Education</SectionTitle>
        <EducationList>
          {educationItems.map((item, index) => (
            <EducationCard key={index}>
              <EducationInfo>
                <SchoolName>{item.school}</SchoolName>
                <DegreeInfo>{item.degree} in {item.field}</DegreeInfo>
              </EducationInfo>
              <DurationInfo>{item.duration}</DurationInfo>
            </EducationCard>
          ))}
        </EducationList>
      </div>
    </EducationSection>
  );
};

export default Education;