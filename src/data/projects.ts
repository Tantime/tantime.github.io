import { MediaItem } from '../components/ProjectMedia';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  period: string;
  media?: MediaItem[];
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'autonomous-robotic-car',
    title: 'Autonomous Robotic Car',
    description: 'Search-and-rescue robotic application with vSLAM and real-time object detection to navigate and locate targets',
    period: 'Jan 2025 - Mar 2025',
    technologies: ['Python', 'ROS 2', 'OpenCV', 'Spectacular AI SDK'],
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
        url: '/assets/projects/autonomous-car/slam.mov',
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
    description: 'Personalized game recommendation system using collaborative filtering to predict user ratings from sparse data',
    period: 'Sep 2024 - Dec 2024',
    technologies: ['Python', 'Surprise SVD'],
    media: []
  },
  {
    id: 3,
    slug: 'diabetes-detector',
    title: 'Diabetes Detector',
    description: 'Machine learning models to predict patient diabetes with minimized false negatives for reliable diagnostics',
    period: 'Sep 2024 - Dec 2024',
    technologies: ['Python', 'Scikit-Learn SVC', 'XGBoost'],
    media: []
  },
  {
    id: 4,
    slug: 'pantrypal',
    title: 'PantryPal (GenAI Recipe App)',
    description: 'AI recipe app generating recipes from voice input with DALL-E image previews in under 10 seconds',
    period: 'Sep 2023 - Dec 2023',
    technologies: ['Java', 'MongoDB', 'HTTP', 'REST API'],
    media: [
      {
        type: 'image',
        url: '/assets/projects/pantrypal/recipe.jpeg',
        caption: 'PantryPal recipe generation'
      }
    ]
  },
  {
    id: 5,
    slug: 'twitter-clone-ios',
    title: 'Twitter Clone iOS App',
    description: 'Cloned the Twitter iOS app; users can tweet, like, and comment from their Twitter account',
    period: 'Sep 2022 - Dec 2022',
    technologies: ['iOS SDK', 'Swift', 'UIKit', 'Back4App', 'Alamofire', ],
    media: [
      {
        type: 'gif',
        url: '/assets/projects/ios-dev/twitter.gif',
        caption: 'Twitter feed view'
      },
    ]
  },
  {
    id: 6,
    slug: 'netflix-clone-ios',
    title: 'Netflix Clone iOS App',
    description: 'Netflix iOS app clone with browsing interface, movie details, and responsive video player',
    period: 'Sep 2022 - Dec 2022',
    technologies: ['iOS SDK', 'Swift', 'UIKit'],
    media: [
      {
        type: 'gif',
        url: '/assets/projects/ios-dev/netflix.gif',
        caption: 'Netflix movie details'
      },
    ]
  },
  {
    id: 7,
    slug: 'instagram-clone-ios',
    title: 'Instagram Clone iOS App',
    description: 'Instagram iOS app clone with photo browsing, posting, commenting, and user profiles',
    period: 'Sep 2022 - Dec 2022',
    technologies: ['iOS SDK', 'Swift', 'UIKit', 'Firebase'],
    media: [
      {
        type: 'gif',
        url: '/assets/projects/ios-dev/instagram.gif',
        caption: 'Instagram comment feature'
      },
    ]
  },
  {
    id: 8,
    slug: 'ucsd-cape-ios',
    title: 'UCSD CAPE iOS App',
    description: 'iOS app for accessing UCSD\'s Course and Professor Evaluations with search and filtering',
    period: 'Sep 2022 - Dec 2022',
    technologies: ['iOS SDK', 'Swift', 'UIKit', 'Core Data'],
    media: [
      {
        type: 'gif',
        url: '/assets/projects/ios-dev/triton-cape.gif',
        caption: 'Triton CAPE app'
      },
    ]
  }
];

// Full project descriptions for detail pages
export const getProjectDetailDescription = (slug: string): string => {
  const detailDescriptions: {[key: string]: string} = {
    'autonomous-robotic-car': `For the Autonomous Robotic Car project, I developed a sophisticated search-and-rescue application that integrates visual Simultaneous Localization and Mapping (vSLAM) with real-time object detection capabilities. The system generates a detailed 3D map of indoor environments while simultaneously locating specific targets. Once a target is identified, the application employs the A* pathfinding algorithm to determine the most efficient route to the nearest exit.

The hardware implementation utilizes an NVIDIA Jetson platform integrated with LiDAR sensors and camera modules, enabling robust real-time navigation and obstacle avoidance. For object detection, I implemented OpenCV and YOLOv5 to process RGB frames and accurately identify the target's location within the mapped environment.

To ensure precise movement control, I fine-tuned PID controllers for both GPS-based pathing and autonomous steering, which significantly enhanced the vehicle's navigation accuracy and throttle control.`,

    'steam-game-recommender': `The Steam Game Recommender System project addressed the challenge of providing personalized game recommendations from an inherently large, sparse, and imbalanced dataset. I implemented a sophisticated recommendation engine using probabilistic matrix factorization-based collaborative filtering techniques to predict how users would rate games they haven't yet played.

The core of the system relies on Singular Value Decomposition (SVD) implemented with the Surprise library, which I trained using stochastic gradient descent while minimizing Root Mean Square Error (RMSE). A significant portion of the development process involved extensive hyperparameter tuning to identify optimal values for learning rate and regularization parameters, which substantially improved model performance.

By extracting latent factors from user-item interaction data, the system effectively captures hidden relationships between users and games, enabling it to generate highly relevant recommendations even with limited explicit feedback. The final model successfully predicts user preferences across the Steam gaming platform, providing personalized suggestions that align with individual tastes.`,

    'diabetes-detector': `The Diabetes Detector project focused on developing a reliable clinical prediction tool using machine learning techniques. I built two complementary classification models—Support Vector Machine (SVM) and Extreme Gradient Boosting (XGBoost)—to predict whether patients have diabetes based on medical indicators.

The development process emphasized clinical application requirements, particularly by prioritizing the minimization of false negative results to reduce the potentially serious consequences of missed diagnoses. To optimize model performance, I implemented extensive feature engineering to extract meaningful patterns from the medical data and employed 10-fold cross-validation to ensure robust generalization capabilities.

The hyperparameter optimization process utilized grid search to systematically explore the parameter space, resulting in models with significantly improved prediction accuracy. The final implementation balances overall accuracy with a particular emphasis on sensitivity, making it suitable for real-world healthcare screening applications where early detection is critical.`,

    'pantrypal': `PantryPal represents an innovative application of generative AI technologies to solve the everyday problem of meal planning with available ingredients. I engineered this responsive recipe application that processes user voice input of available ingredients and rapidly generates creative, viable recipes in under 10 seconds.

The system integrates ChatGPT for intelligent recipe creation and DALL-E for generating appetizing visual previews of the finished dishes, providing users with both instructional and visual guidance. A key technical achievement was the implementation of a three-tier architecture combined with Java multithreading, which dramatically improved recipe generation speed by 6-fold compared to the initial design.

This architecture effectively manages the communication between the user interface, application logic, and external AI services while maintaining responsive performance. The result is a seamless user experience where spoken ingredients are quickly transformed into comprehensive recipes with minimal waiting time, making cooking more accessible and reducing food waste by utilizing available ingredients.`,

    'twitter-clone-ios': `Developed a full-featured clone of Twitter's iOS application that allows users to perform essential social media functions including tweeting, liking, and commenting directly through their Twitter accounts.

The app utilizes Alamofire to handle HTTP(S) requests efficiently, enabling seamless communication with Twitter's API endpoints. For user authentication and credential management, I integrated Back4App as a backend service, providing secure storage of login information while maintaining user privacy.`,

    'netflix-clone-ios': `Created a functional replica of the Netflix iOS application that demonstrates advanced iOS development techniques and UI implementation. The app features a familiar browsing interface with categorized content rows, detailed movie information screens, and a responsive video player.

The project incorporates custom animations and transitions to recreate Netflix's signature user experience, including smooth scrolling content carousels and dynamic header behaviors. Using modern iOS development practices, I implemented a clean architecture that separates data handling from presentation logic.`,

    'instagram-clone-ios': `Engineered a comprehensive clone of Instagram's iOS application, featuring core social media capabilities including photo browsing, posting, commenting, and user profiles. The app demonstrates advanced understanding of social networking functionality within the iOS ecosystem.

The project showcases custom UI implementations including tab-based navigation, photo grid layouts, and interactive stories interface. Users can browse a feed of photos, interact with content through likes and comments, and manage their personal profiles.

I implemented real-time data synchronization ensuring that user interactions are immediately reflected across the application.`,

    'ucsd-cape-ios': `Developed a specialized iOS application for accessing UCSD's Course and Professor Evaluations (CAPE) system, providing students with a convenient mobile interface to browse and search through historical course feedback and ratings.

The app enables UCSD students to make informed course selections by accessing comprehensive professor evaluations, grade distributions, and student comments. I implemented an intuitive search function that allows filtering by department, course number, professor name, and term, making it easy to find relevant information quickly.

By translating UCSD's web-based evaluation system into a native mobile experience, this project significantly improves accessibility to this critical academic resource. The app features offline caching of recently viewed evaluations, dark mode support, and bookmark functionality for saving courses of interest.`
  };

  return detailDescriptions[slug] || '';
};

export default projects;