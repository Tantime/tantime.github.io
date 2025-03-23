import React, { useState } from 'react';
import styled from 'styled-components';

// Media item type definition
export type MediaItem = {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  thumbnail?: string; // For videos
};

// Container for all media items
const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

// Performance optimized container
const MediaContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
  background: ${props => props.theme.cardBackground};
  cursor: pointer;
  will-change: transform; // Optimize for GPU acceleration
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 75%,
      rgba(0, 0, 0, 0.2) 100%
    );
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  img, video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

// More subtle caption that only appears on hover
const Caption = styled.div`
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  padding: 4px 8px;
  font-size: 0.8rem;
  color: white;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
  pointer-events: none;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  
  ${MediaContainer}:hover & {
    opacity: 1;
  }
`;

// Play indicator for videos
const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 12px;
    border-color: transparent transparent transparent white;
    margin-left: 3px;
  }
`;

// Modal for larger view
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  
  img, video {
    max-width: 100%;
    max-height: 90vh;
    display: block;
    border-radius: 4px;
    object-fit: contain; /* Keep as contain in modal view to show full media */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
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