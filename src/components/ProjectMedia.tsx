import React, { useState } from 'react';
import styled from 'styled-components';

export type MediaItem = {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  thumbnail?: string;
};

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
`;

// Apple-inspired container
const MediaContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  background: ${props => props.theme.cardBackground};
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
  
  img, video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

// Apple-style caption with frosted glass effect
const Caption = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  ${MediaContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
  
  // Dark mode support
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
    background: rgba(40, 40, 40, 0.7);
  }
`;

// Elegant play button for videos
const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 18px;
    border-color: transparent transparent transparent white;
    margin-left: 4px;
  }
  
  ${MediaContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

// Apple-style modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  animation: fadeIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  img, video {
    max-width: 100%;
    max-height: 90vh;
    display: block;
    border-radius: 12px;
    object-fit: contain;
  }
`;

// Apple-style close button
const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Individual media component
const MediaItem: React.FC<{ item: MediaItem }> = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const renderMedia = (fullSize = false) => {
    if (item.type === 'image') {
      return <img src={item.url} alt={item.caption || 'Project image'} loading="lazy" />;
    } else {
      return (
        <video 
          src={item.url} 
          controls={fullSize}
          poster={item.thumbnail}
          preload="metadata"
          loop={!fullSize}
          muted={!fullSize}
          playsInline
        />
      );
    }
  };
  
  return (
    <>
      <MediaContainer onClick={() => setModalOpen(true)}>
        {renderMedia(false)}
        {item.type === 'video' && <PlayIcon />}
        {item.caption && <Caption>{item.caption}</Caption>}
      </MediaContainer>
      
      {modalOpen && (
        <ModalOverlay onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            {renderMedia(true)}
            <CloseButton onClick={() => setModalOpen(false)}>×</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

// Main component to render all media items
const ProjectMedia: React.FC<{ media: MediaItem[] }> = ({ media }) => {
  if (!media || media.length === 0) return null;
  
  return (
    <MediaGrid>
      {media.map((item, index) => (
        <MediaItem key={index} item={item} />
      ))}
    </MediaGrid>
  );
};

export default ProjectMedia;
export { MediaItem };