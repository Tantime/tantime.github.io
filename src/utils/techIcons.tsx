export const getTechIcon = (tech: string): string => {
  const techIcons: {[key: string]: string} = {
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Express': 'fas fa-server',
    'JavaScript': 'fab fa-js',
    'TypeScript': 'fas fa-code',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Python': 'fab fa-python',
    'PHP': 'fab fa-php',
    'Docker': 'fab fa-docker',
    'AWS': 'fab fa-aws',
    'Vue': 'fab fa-vuejs',
    'Linux': 'fab fa-linux',
    'C#': 'fab fa-microsoft',
    'ASP.NET Core': 'fab fa-microsoft',
    'SQL': 'fas fa-database',
    'Postgres': 'fas fa-database',
    'Postman': 'fas fa-paper-plane',
    'Splunk': 'fas fa-chart-line',
    'TCP/IP': 'fas fa-network-wired',
    'Cypress': 'fas fa-vial',
    'ROS 2': 'fas fa-robot',
    'OpenCV': 'fas fa-eye',
    'Spectacular AI SDK': 'fas fa-vr-cardboard',
    'Surprise SVD': 'fas fa-chart-line',
    'Scikit-Learn SVC': 'fas fa-brain',
    'XGBoost': 'fas fa-bolt',
    'Java': 'fab fa-java',
    'HTTP web server': 'fas fa-server',
    'REST API': 'fas fa-exchange-alt',
  };
  
  return techIcons[tech] || 'fas fa-code'; // Default icon
};