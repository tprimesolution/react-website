import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  aws,
  azure,
  docker,
  gcp,
  helm,
  kafka,
  postgresql
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Cyber Security",
    // company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    // date: "Sep 2023 - Nov 2023",
    points: [
      "We provide the strength and security of firewalls to protect online data from malicious sources.",
    ],
  },
  {
    title: "Data Analytics & solution",
    // company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    // date: "Sep 2023 - Nov 2023",
    points: [
      "We analyze the data to better understand your business, increase and accelerate the business value.",
    ],
  },
  {
    title: "DevSecOps & Automation",
    // company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    // date: "Sep 2023 - Nov 2023",
    points: [
      "Our DevSecOps Transformation & Automation service modernizes your software delivery pipeline. Through automation and security integration, your teams gain agility, consistency, and control. Deliver secure, high-quality software faster and with lower risk.",
    ],
  },
  {
    title: "Cloud Solution",
    // company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    // date: "May 2023 - Sep 2023",
    points: [
      "We provide professional and cost-effective Cloud solutions on different Cloud Platforms to help enterprises grow, and develop, host, manage and scale their applications on Cloud.",
    ],
  },
  {
    title: "SEO Optimization",
    // company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    // date: "May 2023 - Sep 2023",
    points: [
      "we offer comprehensive SEO optimization services Boost your website’s visibility, drive organic traffic, and rank higher with our expert SEO optimization services.",
    ],
  },
  {
    title: "Artificial Intelligence",
    // company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    // date: "May 2023 - Sep 2023",
    points: [
      "We excel in designing, developing, and integrating customized solutions by combining the power of cloud and AI/ML.Discover now",
    ],
  },
  {
    title: "IT Consulting Service",
    // company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    // date: "May 2023 - Sep 2023",
    points: [
      "We propose feasible and practical plans for successfully transform businesses based on their needs.",
    ],
  },
  {
    title: "Apps Development",
    // company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    // date: "June 2023 - July 2023",
    points: [
      "We design user-friendly, highly usable software with responsive interface to bring about great experience.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
