export const scrollToElement = (elementId: string | null) => {
    // If no element ID, do nothing (maintain current scroll)
    if (!elementId) return;
    
    // Allow DOM to update before scrolling
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 60; // Height of your header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Short delay to ensure DOM is ready
  };