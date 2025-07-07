import {
  mobile,
  app_dev,
  java_dev,
  web,
  javascript,
  
  html,
  css,
  reactjs,
 
  tailwind,
  nodejs,

  mongodb,
  git,
 
  ingram,
  
  arcon,
  TIP,
  o_cakes,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  android,
  kotlin,
  placement_trainee,
  python,
  flask,
  firebase,
  aws,
  health_care,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android App Developer",
    icon: app_dev,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: java_dev,
  },
 
];

const technologies = [
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
  },
 
  
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
   {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "O-Cakes",
    icon: o_cakes,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "Web Development Expertise: Developed a website for O-Cakes using HTML, CSS, JavaScript, and PHP, strengthening skills in creating user-friendly web interfaces.",
      "Data Management Knowledge: Explored O-Cakes' data management systems, learning how data is structured and leveraged for efficient business operations.",
      "Manufacturing-to-Customer Process: Gained insights into the end-to-end workflow, from product manufacturing to delivery, understanding customer service operations.",
      "Professional Environment Experience: Worked remotely in a dynamic industry setting, collaborating with a team to meet project goals and adapt to workplace demands.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TIP Community",
    icon: TIP,
    iconBg: "#E6DEDD",
    date: "February 2022 - March 2022",
    points: [
      "Backend Development: Contributed as a backend developer for projects like YSDFindia, MyGov, and c360.tipcommunity.org, creating and mapping forms to databases for seamless data management.",
      "Creative Design Contributions: Proposed innovative website design concepts, enhancing user experience and visual appeal for various project interfaces.",
      "Team Collaboration & Deadlines: Worked effectively in a team environment, meeting project deadlines while delivering high-quality backend and frontend solutions.",
    ],
  },
  {
    title: "Security Analyst",
    company_name: "Arcon",
    icon: arcon,
    iconBg: "#E6DEDD",
    date: "January 2025 - June 2025",
    points: [
      "PAM Troubleshooting: Troubleshoot issues in ARCON’s PAM product, ensuring secure access control and resolving technical challenges.",
      "Networking Expertise: Applied concepts like TCP forwarding, gateways, bridges, hubs, port numbers, and TCP three-way handshake to enhance system security.",
      "Product Upgrades: Supported upgrades for PAM, EPM, and MyVault, ensuring seamless integration and improved security features.",
      "Database Skills: Utilized MySQL and MSSQL, crafting queries for secure data management in ARCON’s cybersecurity solutions.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Ingram Micro",
    icon: ingram,
    iconBg: "#ffffff",
    date: "July 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Placement Trainee",
    description:
      "Placement Trainee is a student-focused app that streamlines placement preparation through curated roadmaps, coding challenges, quizzes, and a resume parser. It helps users set career goals and follow structured, week-wise study plans while analyzing their resume for ATS optimization.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: placement_trainee,
    video: "/videos/Placement_trainee.mp4", 
    source_code_link: "https://github.com/nashdabre/Placement-Trainee",
  },
   {
    name: "Landslide Prediction using Machine Learning",
    description:
      "Developed a landslide prediction system using U-Net, Python, and TensorFlow for real-time forecasts. "+
      "Integrated into an Android app with historical data, awareness videos, and emergency contacts. "+
      "Focused on enhancing community safety through AI-driven insights.",
    tags: [
      {
        name: "u-net",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    video: "/videos/landslide.mp4", 
    source_code_link: "https://github.com/nashdabre/Landslide_Prediction-using-ML",
  },
  
  {
    name: "Health Care App",
    description:
      "The Rural Health Care App is designed to provide essential healthcare services to rural areas. Built using Kotlin and Jetpack Compose, this Android application offers a variety of features to ensure comprehensive healthcare support.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: health_care,
    video: "/videos/HealthCareApp.mp4", 
    source_code_link: "https://github.com/nashdabre/HealthCare-App",
  }
 
];

export { services, technologies, experiences,  projects };
