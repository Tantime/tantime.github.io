export const getTechIcon = (tech: string): string => {
  // Map for Devicon icons
  const deviconMap: {[key: string]: string} = {
    'C#': 'devicon-csharp-plain',
    'C++': 'devicon-cplusplus-plain',
    'TypeScript': 'devicon-typescript-plain',
    'Postgres': 'devicon-postgresql-plain',
    'PostgreSQL': 'devicon-postgresql-plain',
    'ASP.NET Core': 'devicon-dotnetcore-plain',
    'ASP.NET': 'devicon-dot-net-plain-wordmark',
    'Python': 'devicon-python-plain',
    'React': 'devicon-react-original',
    'Node.js': 'devicon-nodejs-plain',
    'JavaScript': 'devicon-javascript-plain',
    'Java': 'devicon-java-plain',
    'MongoDB': 'devicon-mongodb-plain',
    'Express': 'devicon-express-original',
    'HTML': 'devicon-html5-plain',
    'CSS': 'devicon-css3-plain',
    'Docker': 'devicon-docker-plain',
    'AWS': 'devicon-amazonwebservices-plain-wordmark',
    'Linux': 'devicon-linux-plain',
    'Git': 'devicon-git-plain',
    'ROS 2': 'devicon-ros-original',
    'OpenCV': 'devicon-opencv-plain',
    'Scikit-Learn SVC': 'devicon-scikitlearn-plain',
    'Cypress': 'devicon-cypressio-plain',
    'Swift': 'devicon-swift-plain',
    'iOS SDK': 'devicon-apple-original',
    'Xcode': 'devicon-xcode-plain',
    'Firebase': 'devicon-firebase-plain',
    'Core Data': 'devicon-apple-original',
    'Alamofire': 'devicon-swift-plain',
    'Back4App': 'devicon-nodejs-plain',
  };
  
  // Map for Font Awesome icons (as fallback)
  const fontAwesomeMap: {[key: string]: string} = {
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'JavaScript': 'fab fa-js',
    'TypeScript': 'fab fa-ts',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Python': 'fab fa-python',
    'Java': 'fab fa-java',
    'PHP': 'fab fa-php',
    'Docker': 'fab fa-docker',
    'AWS': 'fab fa-aws',
    'Vue': 'fab fa-vuejs',
    'Linux': 'fab fa-linux',
    'MongoDB': 'fas fa-database',
    'SQL': 'fas fa-database',
    'Postman': 'fas fa-paper-plane',
    'Splunk': 'fas fa-chart-line',
    'TCP/IP': 'fas fa-network-wired',
    'Cypress': 'fas fa-vial',
    'ROS 2': 'fas fa-robot',
    'OpenCV': 'fas fa-eye',
    'REST API': 'fas fa-exchange-alt',
    'HTTP': 'fas fa-globe',
    'XGBoost': 'fas fa-bolt',
    'Spectacular AI SDK': 'fas fa-location-crosshairs',
    'Surprise SVD': 'fas fa-exclamation',
    'UIKit': 'fa-brands fa-uikit',
  };
  
  // First check if we have a devicon for this technology
  if (deviconMap[tech]) {
    return deviconMap[tech];
  }
  
  // Fall back to Font Awesome if available
  if (fontAwesomeMap[tech]) {
    return fontAwesomeMap[tech];
  }
  
  // Default icon if nothing else matches
  return 'fas fa-code';
};