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

// Enhanced interface for structured project details with subheaders
export interface ProjectDetails {
  sections: {
    title: string;
    content: string;
    media?: MediaItem[];
    subheaders?: {
      title: string;
      content: string;
      media?: MediaItem[];
    }[];
  }[];
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
      }
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
    media: [
      {
        type: 'image' as const,
        url: '/assets/projects/diabetes-detector/correlation-matrix.png',
        caption: 'Feature correlation matrix'
      },
      {
        type: 'image' as const,
        url: '/assets/projects/diabetes-detector/pairplots.png',
        caption: 'Feature importance analysis'
      }
    ]
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

// Structured project details with sections and subheaders
export const projectDetails: Record<string, ProjectDetails> = {
  'autonomous-robotic-car': {
    sections: [
      {
        title: 'Overview',
        content: `For the Autonomous Robotic Car project, I developed a sophisticated search-and-rescue application that integrates visual Simultaneous Localization and Mapping (vSLAM) with real-time object detection capabilities. The system generates a detailed 3D map of indoor environments while simultaneously locating specific targets. Once a target is identified, the application employs the A* pathfinding algorithm to determine the most efficient route to the nearest exit.

The hardware implementation utilizes an NVIDIA Jetson platform integrated with LiDAR sensors and camera modules, enabling robust real-time navigation and obstacle avoidance. For object detection, I implemented OpenCV and YOLOv5 to process RGB frames and accurately identify the target's location within the mapped environment.

To ensure precise movement control, I fine-tuned PID controllers for both GPS-based pathing and autonomous steering, which significantly enhanced the vehicle's navigation accuracy and throttle control.`,
        media: [
          {
            type: 'video' as const,
            url: '/assets/projects/autonomous-car/gps-laps.mp4',
            caption: 'Autonomous laps w/ GPS',
          },
          {
            type: 'video' as const,
            url: '/assets/projects/autonomous-car/opencv-laps.mp4',
            caption: 'Autonomous laps w/ OpenCV',
          },
          {
            type: 'video' as const,
            url: '/assets/projects/autonomous-car/remote-autonomous-laps.mp4',
            caption: 'Remote autonomous laps w/ deep learning',
          },
          {
            type: 'video' as const,
            url: '/assets/projects/autonomous-car/local-autonomous-laps.mp4',
            caption: 'Local autonomous laps w/ deep learning',
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
          }
        ]
      }
    ]
  },
  
  'steam-game-recommender': {
    sections: [
      {
        title: 'Overview',
        content: `The Steam Game Recommender System project addressed the challenge of providing personalized game recommendations from an inherently large, sparse, and imbalanced dataset. I implemented a sophisticated recommendation engine using probabilistic matrix factorization-based collaborative filtering techniques to predict how users would rate games they haven't yet played.

The core of the system relies on Singular Value Decomposition (SVD) implemented with the Surprise library, which I trained using stochastic gradient descent while minimizing Root Mean Square Error (RMSE). A significant portion of the development process involved extensive hyperparameter tuning to identify optimal values for learning rate and regularization parameters, which substantially improved model performance.

By extracting latent factors from user-item interaction data, the system effectively captures hidden relationships between users and games, enabling it to generate highly relevant recommendations even with limited explicit feedback. The final model successfully predicts user preferences across the Steam gaming platform, providing personalized suggestions that align with individual tastes.`
      }
    ]
  },
  
  'diabetes-detector': {
    sections: [
      {
        title: 'Overview',
        content: `The Diabetes Detector project focused on developing a reliable clinical prediction tool using machine learning techniques. I built two complementary classification models—Support Vector Machine (SVM) and Extreme Gradient Boosting (XGBoost)—to predict whether patients have diabetes based on medical indicators.

The development process emphasized clinical application requirements, particularly by prioritizing the minimization of false negative results to reduce the potentially serious consequences of missed diagnoses. To optimize model performance, I implemented extensive feature engineering to extract meaningful patterns from the medical data and employed 10-fold cross-validation to ensure robust generalization capabilities.

The hyperparameter optimization process utilized grid search to systematically explore the parameter space, resulting in models with significantly improved prediction accuracy. The final implementation balances overall accuracy with a particular emphasis on sensitivity, making it suitable for real-world healthcare screening applications where early detection is critical.`
      },
      {
        title: 'Background and Data Exploration',
        content: `The project began with thorough exploration of the Diabetes Health Indicators Dataset, which contains medical and demographic data from over 250,000 Americans.`,
        subheaders: [
          {
            title: 'Context',
            content: `Diabetes is among the most prevalent chronic diseases in the United States, impacting millions of Americans each year and exerting a significant financial burden on the economy. Diabetes is a serious chronic disease in which individuals lose the ability to effectively regulate levels of glucose in the blood and can lead to reduced quality of life and life expectancy. After different foods are broken down into sugars during digestion, the sugars are then released into the bloodstream. This signals the pancreas to release insulin. Insulin helps enable cells within the body to use those sugars in the bloodstream for energy. Diabetes is generally characterized by either the body not making enough insulin or being unable to use the insulin that is made as effectively as needed.

Complications like heart disease, vision loss, lower-limb amputation, and kidney disease are associated with chronically high levels of sugar remaining in the bloodstream for those with diabetes. While there is no cure for diabetes, strategies like losing weight, eating healthily, being active, and receiving medical treatments can mitigate the harms of this disease in many patients. Early diagnosis can lead to lifestyle changes and more effective treatment, making predictive models for diabetes risk important tools for public health officials.

The scale of this problem is also important to recognize. The Centers for Disease Control and Prevention (CDC) has indicated that as of 2018, 34.2 million Americans have diabetes and 88 million have prediabetes. Furthermore, the CDC estimates that 1 in 5 diabetics, and roughly 8 in 10 prediabetics are unaware of their risk. While there are different types of diabetes, type II diabetes is the most common form, and its prevalence varies by age, education, income, location, race, and other social determinants of health. Much of the burden of the disease falls on those of lower socioeconomic status as well. Diabetes also places a massive burden on the economy, with diagnosed diabetes costs of roughly $327 billion, and total costs with undiagnosed diabetes and prediabetes approaching $400 billion annually.`
          },
          {
            title: 'Content',
            content: `The Behavioral Risk Factor Surveillance System (BRFSS) is a health-related telephone survey that is collected annually by the CDC. Each year, the survey collects responses from over 400,000 Americans on health-related risk behaviors, chronic health conditions, and the use of preventative services. It has been conducted every year since 1984. For this project, a CSV of the dataset available on Kaggle for the year 2015 was used. This original dataset contains responses from 441,455 individuals and has 330 features. These features are either questions directly asked of participants or calculated variables based on individual participant responses.

diabetes_binary_5050split_health_indicators_BRFSS2015.csv is a clean dataset of 70,692 survey responses to the CDC's BRFSS 2015. It has an equal 50-50 split of respondents with no diabetes and with either prediabetes or diabetes. The target variable Diabetes_binary has 2 classes: 0 is for no diabetes, 1 is for prediabetes or diabetes. This dataset has 21 feature variables and is balanced.`,
            media: [
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/boxplot.png',
                caption: 'Boxplot'
              },
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/boxplot-normalized.png',
                caption: 'Normalized boxplot'
              }
            ]
          }
        ]
      },
      {
        title: 'Predictive Task and Choosing Features',
        content: ``,
        subheaders: [
          {
            title: 'Predictive Task',
            content: `The predictive task is to classify whether an individual has diabetes (including prediabetes) or not based on the given health indicators.

It is important to note that in a diabetes detector, the worst case scenario is if our model produces a false negative. This means that the patient would be incorrectly evaluated as NOT HAVING diabetes when in reality THEY DO. This error would be potentially detrimental to the future wellbeing of the patient, as they would not be able to make the changes necessary to either prevent or control their diabetes.

Therefore, when choosing, training, and evaluating my models, it is important that I try to minimize the false negative rate. This can be done using different methods, such as adjusting the decision threshold (increasing FP to avoid FN), tuning hyperparameters, and class weighting.`
          },
          {
            title: 'Evaulation Metrics',
            content: `- Accuracy: The proportion of correctly classified instances.

- Precision: The proportion of true positive instances among the instances classified as positive.

- Recall: The proportion of true positive instances among all actual positive instances.

- F1 Score: The harmonic mean of precision and recall.

- ROC-AUC: The area under the receiver operating characteristic curve.`
          },
          {
            title: 'Baseline Model',
            content: `- Logistic Regression: A simple linear model for binary classification.

- Decision Tree: A non-linear model that splits the data based on feature values.

- Random Forest: An ensemble method that uses multiple decision trees to improve performance.`
          },
          {
            title: 'Advanced Model',
            content: `- Support Vector Machine (SVM): A model that finds the optimal hyperplane to separate classes.

- Gradient Boosting: An ensemble method that builds trees sequentially to reduce errors.`
          },
          {
            title: 'Even More Advanced Model',
            content: `- Extreme Gradient Boosting (XGBoost): An ensemble method known for its efficiency and effectiveness in classification and regression tasks. It provides better performance compared to traditional boosting algorithms by incorporating regularization techniques and parallel processing.`
          },
          {
            title: 'Feature Comparison',
            content: `I am going to start with the top 6 features that are most correlated with diabetes, and then add additional features in descending order of correlation to look for any signs of improvement.

Correlation of features with the target variable:

- Diabetes_binary: 1.0

- GenHlth: 0.4076115984949182

- HighBP: 0.3815155489073117

- BMI: 0.29337274476103575

- HighChol: 0.28921280708865016

- Age: 0.27873806628188813

- DiffWalk: 0.272646006159808

- Income: -0.2244487149638171

- PhysHlth: 0.21308101903810317

- HeartDiseaseorAttack: 0.21152340436022687

- Education: -0.17048063498806143

- PhysActivity: -0.15866504846405157

- Stroke: 0.12542678468516733

- CholCheck: 0.11538161710207915

- HvyAlcoholConsump: -0.09485313995926549

- MentHlth: 0.08702877147509416

- Smoker: 0.08599896420800192

- Veggies: -0.07929314561269872

- Fruits: -0.05407655628666651

- Sex: 0.044412858371260695

- NoDocbcCost: 0.040976657326664394

- AnyHealthcare: 0.02319074853112824`
          }
        ]
      },
      {
        title: 'Model Training and Justification',
        content: `From the data exploration and identifying the predictive task, I knew I was working with a binary classification problem, and also with a fairly large amount of observations at ~70k. Therefore, I decided that I would use Logistic Regression as my baseline model and SVM as my more advanced (and hopefully better performing) model. This made sense in my situation because both of those models are intrinsically meant to deal with binary classification problems. It didn't make sense to try a Random Forest model, because it's meant for multi-class classification.

From there, I started training baseline models and playing around with the number of features, mainly using my correlation matrix as a guide as to which features to include initially, and then referenced the test accuracy in the evaluation stage to decide whether to keep or remove certain features. For me, the main difficulty with working with SVM was that I could not get it to run in parallel, so even though I had a CPU with 12 logical processors I wasn't taking advantage of those extra cores. Due to the large number of observations, this meant SVM was taking 10+ minutes every time I wanted to tweak my model, when it could have been taking just a few minutes if I had figured out how to run it in parallel. Doing GridSearch for 4x4x2 SVM parameters took 275 minutes or over 4.5 hours!

Once I was set on which features to use, I started tuning the SVM hyperparameters. To do this, I used sklearn.model_selection's GridSearchCV library, which enabled me to tune the C, gamma, and kernel type parameters together. This resulted in a slight accuracy improvement on the validation set, but the accuracy hovered around 74-75%.

GeeksForGeeks Article: Support Vector Machine vs Extreme Gradient Boosting

Use SVM when:

- Working with datasets characterized by a high number of features compared to the number of samples.

-The decision boundary between classes is clear and well-defined.

- Interpretability of the model's decision boundary is crucial.

- You want a model less prone to overfitting, especially in high-dimensional spaces.

Use XGBoost when:

- Dealing with structured/tabular data with a moderate number of features.

- Predictive accuracy is crucial and you're aiming for high performance.

- The features exhibit intricate relationships with the target variable.

- You need a model capable of handling both regression and classification tasks.

- You're willing to spend time tuning hyperparameters to achieve optimal performance.

Once I had done two rounds of tuning on my SVM model, I decided it was time to check out how Decision Tree, Random Forest, and Gradient Boosting models would perform on my dataset. The first thing I noticed was that evaluating these models was much quicker than evaluating SVM because they are much more efficient on large datasets. For reference, evaluating one SVM model would take 10+ minutes whereas evaluating Decision Tree, Random Forest, or Gradient Boosting all took under a minute. After doing basic evaluation, I found that on my validation set, Decision Tree had a relatively low accuracy of 67%, Random Forest predicted at 71%, and Gradient Boosting had 75%. Therefore, I decided to proceed with hyperparameter tuning a Gradient Boosting model.`,
        subheaders: [
          {
            title: 'Data processing and feature engineering',
            content: `I chose the 10 most correlated features with the target variable, and then added additional features in descending order of correlation to my feature vector. I used the StandardScaler function to scale my data columns, and then split the data into training, test, and validation sets using a 60/20/20 split.`,
            media: [
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/feature-engineering.png',
                caption: 'Choosing features'
              },
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/scaling-and-split.png',
                caption: 'Scaling and splitting the data'
              }
            ]
          },
          {
            title: 'Baseline Model (Logistic Regression) and Comparing Models',
            content: `Choosing models and function for model evaluation:`,
            media: [
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/baseline-model.png',
                caption: 'Logistic Regression and Support Vector Machine'
              }
            ]
          },
          {
            title: 'Model Peformance Results and Hyperparameter Tuning',
            content: `Model: Logistic Regression, Training Accuracy: 0.7442, Validation Accuracy: 0.7416

Model: SVM, Training Accuracy: 0.747, Validation Accuracy: 7447

Model: Decision Tree, Training Accuracy: 0.9460, Validation Accuracy: 0.6632

Model: Random Forest, Training Accuracy: 0.9460, Validation Accuracy: 0.7106

Model: Gradient Boosting, Training Accuracy: 0.7523, Validation Accuracy: 0.7508

It seems like Gradient Boosting is our best choice -- it is much more efficient than SVM for large datasets, and resulted in relatively good accuracy on the validation set.`,
            media: [
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/gb-gridsearch.png',
                caption: 'Gradient boosting grid search'
              }
            ]
          },
          {
            title: 'Gradient Boosting 10-Fold Cross Validation',
            content: `I used 10-fold cross validation to evaluate the performance of the Gradient Boosting model. This technique divides the dataset into 10 subsets, training the model on 9 of them and validating it on the remaining one. This process is repeated 10 times, with each subset serving as the validation set once. The final performance metric is the average of all 10 iterations, providing a more robust estimate of the model's generalization ability.`,
            media: [
              {
                type: 'image' as const,
                url: '/assets/projects/diabetes-detector/10fold-crossvalidation.png',
                caption: '10-fold cross validation'
              }
            ]
          }
        ]
      },
      {
        title: 'Related Literature',
        content: ``,
        subheaders: [
          {
            title: 'About the Dataset',
            content: `I'm using a dataset from Kaggle called 'Diabetes Health Indicators Dataset' created by Alex Teboul. In his acknowledgements, he states "It is important to reiterate that I did not create this dataset, it is just a cleaned and consolidated dataset created from the BRFSS 2015 dataset already on Kaggle. That dataset can be found here and the notebook I used for the data cleaning can be found here." The original dataset is from the CDC's Behavioral Risk Factor Surveillance System (BRFSS) 2015 survey.

He notes that "The Behavioral Risk Factor Surveillance System (BRFSS) is a health-related telephone survey that is collected annually by the CDC. Each year, the survey collects responses from over 400,000 Americans on health-related risk behaviors, chronic health conditions, and the use of preventative services. It has been conducted every year since 1984." His dataset contains three files, one unbalanced dataset with ~250k survey responses and 3 classes (a separate class for prediabetes), one dataset with ~70k survey responses a 50/50 split (so it's balanced), binary diabetes class (combined prediabetes and diabetes), and a third dataset with all ~250k survey responses but with binary class for diabetes.

The dataset I chose to use is the 50/50 split balanced dataset with ~70k survey responses, because I wanted to work with balanced data. Overall, the dataset was well-preprocessed and easy to work with.`
          },
          {
            title: 'Similar Datasets Studied in the Past',
            content: `Referencing the following paper: "Optimizing diabetes classficiation with a machine learning-based framework" (Feng et al., 2023)

The above article is similar work in classifying whether or not a patient has diabetes using machine learning. The study uses two datasets which are similar to the 'Diabetes Health Indicators Dataset I used in my project

1. PIMA Dataset: This dataset presents several challenges such as class imbalance, a significant number of missing values, and low data quality. Previous studies using simple machine learning techniques on this dataset have yielded subpar performance. The proposed framework addresses these challenges using a combination of mean and median imputation for missing values, capping method for outliers, and SMOTEENN for handling data imbalance.

2. GEO Database Diabetes Dataset: The proposed framework also evaluates its performance on a diabetes dataset obtained from the GEO database. The DCSGAN model, which is part of the framework, has shown promising results in achieving high accuracy in diabetes diagnosis on this dataset as well.

These datasets have been studied using various machine learning techniques, including simple machine learning models and complex deep learning models, but the proposed framework in the paper aims to improve upon these by addressing data quality and imbalance issues more effectively.`
          }
        ]
      },
      {
        title: 'Results and Conclusion',
        content: ``,
        subheaders: [
          {
            title: 'My Model vs. Alternatives',
            content: `My model performed quite poorly compared to existing alternatives that I found in current research papers. They all boast high accuracy of diabetes diagnosis of 95% or above, whereas my best model sat around 75% accuracy. Additionally, the state-of-the-art models for diabetes detection have false negative rates of below 0.08, whereas my best model had a false negative rate of 0.2.

The significance of this is that if my model were to be deployed in the real-world, the worst-case scenario of telling someone who has diabetes that they don't have diabetes has a higher chance of happening than we would like. We would ideally never want this situation to happen, and in the state-of-the-art models a false negative rate of below 0.08 means that below 8% of the true positive cases were incorrectly classified as negative, which is still not ideal, but usable in the real-world.`
          },
          {
            title: 'Which Feature Representations Worked Well?',
            content: `The feature representation that worked the best for me was the mostly-binary data of different lifestyle-based attributes of each person/observation. I was able to run a correlation matrix heatmap that easily showed me which traits were most correlated (either positively or negatively) with having diabetes (or prediabetes). In my final model, I chose to use the 10 most correlated features to prevent the curse of dimensionality while still maintaining a good description of each observation.`
          },
          {
            title: 'Interpretation of My Model\'s Parameters',
            content: `After training and evaluating Logistic Regression and Support Vector Machine models as my baselines (and hyperparameter tuning for SVM), my final model was a Gradient Boosting model. To land on my final tuned parameters, I did three rounds of GridSearch on the following parameters: n_estimators, learning_rate, max_depth, min_samples_split and min_samples_leaf. After each round, I shifted the range of parameters in the direction that the best model from the previous GridSearch had suggested. My best Gradient Boosting model looked like this:

gb = GradientBoostingClassifier(n_estimators = 100, learning_rate = 0.1, max_dept = 5, min_samples_split = 10, min_samples_leaf = 2)

A higher max_depth can capture more complexity, but has a chance to overfit. This is the same with min_samples_split and min_samples_leaf. A lower learning_rate led to better generalization but requires more trees.`
          },
          {
            title: 'Why Did Proposed Model Succeed or Fail?',
            content: `I would say my proposed model failed in that I wasn't able to tune my model to achieve a high enough accuracy to be deployed in the real-world. However, a model usable for diabetes diagnoses likely takes a much longer time than two weeks to engineer, so for a school assignment I would say this project was a success!`
          }
        ]
      }
    ]
  },
  
  'pantrypal': {
    sections: [
      {
        title: 'Overview',
        content: `PantryPal represents an innovative application of generative AI technologies to solve the everyday problem of meal planning with available ingredients. I engineered this responsive recipe application that processes user voice input of available ingredients and rapidly generates creative, viable recipes in under 10 seconds.

The system integrates ChatGPT for intelligent recipe creation and DALL-E for generating appetizing visual previews of the finished dishes, providing users with both instructional and visual guidance. A key technical achievement was the implementation of a three-tier architecture combined with Java multithreading, which dramatically improved recipe generation speed by 6-fold compared to the initial design.

This architecture effectively manages the communication between the user interface, application logic, and external AI services while maintaining responsive performance. The result is a seamless user experience where spoken ingredients are quickly transformed into comprehensive recipes with minimal waiting time, making cooking more accessible and reducing food waste by utilizing available ingredients.`
      }
    ]
  },
  
  'twitter-clone-ios': {
    sections: [
      {
        title: 'Overview',
        content: `Developed a full-featured clone of Twitter's iOS application that allows users to perform essential social media functions including tweeting, liking, and commenting directly through their Twitter accounts.

The app utilizes Alamofire to handle HTTP(S) requests efficiently, enabling seamless communication with Twitter's API endpoints. For user authentication and credential management, I integrated Back4App as a backend service, providing secure storage of login information while maintaining user privacy.`
      }
    ]
  },
  
  'netflix-clone-ios': {
    sections: [
      {
        title: 'Overview',
        content: `Created a functional replica of the Netflix iOS application that demonstrates advanced iOS development techniques and UI implementation. The app features a familiar browsing interface with categorized content rows, detailed movie information screens, and a responsive video player.

The project incorporates custom animations and transitions to recreate Netflix's signature user experience, including smooth scrolling content carousels and dynamic header behaviors. Using modern iOS development practices, I implemented a clean architecture that separates data handling from presentation logic.`
      }
    ]
  },
  
  'instagram-clone-ios': {
    sections: [
      {
        title: 'Overview',
        content: `Engineered a comprehensive clone of Instagram's iOS application, featuring core social media capabilities including photo browsing, posting, commenting, and user profiles. The app demonstrates advanced understanding of social networking functionality within the iOS ecosystem.

The project showcases custom UI implementations including tab-based navigation, photo grid layouts, and interactive stories interface. Users can browse a feed of photos, interact with content through likes and comments, and manage their personal profiles.

I implemented real-time data synchronization ensuring that user interactions are immediately reflected across the application.`
      }
    ]
  },
  
  'ucsd-cape-ios': {
    sections: [
      {
        title: 'Overview',
        content: `Developed a specialized iOS application for accessing UCSD's Course and Professor Evaluations (CAPE) system, providing students with a convenient mobile interface to browse and search through historical course feedback and ratings.

The app enables UCSD students to make informed course selections by accessing comprehensive professor evaluations, grade distributions, and student comments. I implemented an intuitive search function that allows filtering by department, course number, professor name, and term, making it easy to find relevant information quickly.

By translating UCSD's web-based evaluation system into a native mobile experience, this project significantly improves accessibility to this critical academic resource. The app features offline caching of recently viewed evaluations, dark mode support, and bookmark functionality for saving courses of interest.`
      }
    ]
  }
};

// Function to get project details sections
export const getProjectDetailSections = (slug: string): Array<{
  title: string;
  content: string;
  media?: MediaItem[];
  subheaders?: {
    title: string;
    content: string;
    media?: MediaItem[];
  }[];
}> => {
  return projectDetails[slug]?.sections || [{ title: 'Overview', content: 'Project details not found.' }];
};

// Maintain backward compatibility for simple string descriptions
export const getProjectDetailDescription = (slug: string): string => {
  const sections = projectDetails[slug]?.sections;
  if (!sections || sections.length === 0) return '';
  
  // Return just the overview section content for backward compatibility
  return sections[0].content;
};

export default projects;