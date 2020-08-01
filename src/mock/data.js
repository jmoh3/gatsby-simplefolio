import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jackie Oh | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello!  My name is ',
  name: 'Jackie Oh',
  subtitles: ["I'm  a software engineer", "I'm a UIUC student", "I'm a researcher"],
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, my name is Jackie! I’m a software engineer currently studying Computer Science at University of Illinois at Urbana Champaign. I am passionate about developing beautiful products that people can use in their everyday lives.',
  paragraphTwo:
    'In addition to studying Computer Science, I am also pursuing a minor in Mathematics. I love finding ways I can apply my interest in math to things I do.',
  paragraphThree:
    'I have experience in web, iOS, and backend development. I have so much more to explore in this field and I love learning new things.',
  resume: 'https://drive.google.com/file/d/1VR8gHRlGPnLf-XMJZqW92EXmTrweDBhH/view?usp=sharing',
};

// SKILLS DATA
export const skillsData = {
  skillOne: 'iOS Development',
  skillTwo: 'Web Development',
  skillThree: 'Backend Development',
  skillFour: 'Data Visualization',
  skillOneImg: 'ios.png',
  skillTwoImg: 'web.png',
  skillThreeImg: 'backend.png',
  skillFourImg: 'data.png',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'mmm-header.png',
    title: 'ACM Member to Meeting Matcher',
    info:
      'My team and I developed a service that organizes meeting and event information in one central calendar for ACM (Association for Computing Machinery), a CS student organization that has over 1,000 members at UIUC. It also recommends meetings and events to users based on keywords parsed from their resume.',
    info2:
      'I worked on the recommendation system and resume parsing API. This project won second place at HackIllinois 2020! Check out our DevPost below for a full description.',
    url: 'Devpost',
    repo: 'https://devpost.com/software/uiuc-acm-member-to-meeting-matcher-service', // if no repo, the button will not show up
    url2: 'GitHub',
    repo2: 'https://github.com/jmoh3/mmm-resume-parsing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dollosat.png',
    title: 'DolloSAT',
    info:
      'Single Cell Sequencing allows one to observe the presence of Single Nucleotide Variants within tumor cells. Using this data, we want to be able to infer the evolutionary history of mutations within a tumor in order to understand the mechanisms behind intra-tumor heterogeneity and identify targets for treatment.',
    info2:
      'This project samples phylogenetic trees for tumor cells using UniGen, a sampler for the boolean satisfiability problem. This project has been developed under the guidance of Professor El-Kebir.',
    url: 'GitHub',
    repo: 'https://github.com/jmoh3/DolloSAT', // if no repo, the button will not show up
    url2: '',
    repo2: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'solar.jpg',
    title: 'Solar Energy Dashboard',
    info:
      "Under the guidance of Professor Wade Fagen-Ulmschneider, my team developed a data visualization that showcases environmental benefits of the solar panels on the Electrical and Computer Engineering Building on our school's campus.",
    info2:
      'We used D3.js, Node.js, and Microsoft SQL server to develop a visualization that runs on real time data.',
    // url: '',
    // repo: '', // if no repo, the button will not show up
    // url2: '',
    // repo2: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'salus.png',
    title: 'Salus',
    info:
      'With the recent rise of school shootings, schools and communities are racing to find ways to be better prepared for the worst. Salus is a campus emergency preparation system that helps school administrators keep students safe in the event of an emergency.',
    info2:
      'We developed a web interface that allows administrators to view the locations of students when an emergency is activated and mark safe zones, and a mobile app for students that will track their location and allow them to view safe zones if (and only if) an emergency is initiated.',
    url: 'Devpost',
    repo: 'https://devpost.com/software/salus-zn7twj', // if no repo, the button will not show up
    url2: 'GitHub',
    repo2: 'https://github.com/jmather625/Salus', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Scan2Plan.png',
    title: 'Scan2Plan',
    info:
      "For my freshman honors course, I pitched Scan2Plan, an iOS app that uses event information scanned from flyers by user's camera to create calendar events.",
    info2:
      'Over the course of a semester I developed this app as a part of a team composed of myself and four other freshmen.',
    url: 'GitHub',
    repo: 'https://github.com/jookimmy/scan2plan', // if no repo, the button will not show up
    url2: '',
    repo2: '', // if no repo, the button will not show up
  },
];

// WORK DATA
export const workData = [
  {
    id: uuidv1(),
    title: 'Uber Technologies, Inc.',
    year: 'Software Engineer Intern, Summer 2020',
    info:
      "I've joined the Safety Controls team as a Backend Engineer, developing APIs in Golang. I'm currently working on a project that automates the transfer of Geofence data from the RapidSOS API to Uber using Slackbot and Cadence workflow.",
    info2: 'More on this coming soon!',
  },
  {
    id: uuidv1(),
    title: 'State Farm',
    year: 'Enterprise Technology Intern, Summer 2019',
    info:
      "I developed an intranet web application for State Farm's local philanthropy efforts using the ASP.NET framework and Microsoft SQL Server. This web application serves as the primary management and registration platform for State Farm's internal facing volunteering, education, career development, and social events, and allows administrators to see real time analytics on attendance and feedback for events.",
    info2:
      "I also served as the lead iOS developer for the team that was voted the Executive's Choice Winner at State Farm's annual Hack Day out of roughly 1,000 participants. We built a computer vision application that assisted with the insurance claims process at the scene of an accident.",
  },
  {
    id: uuidv1(),
    title: 'Athinoula Martinos Center for Biomedical Imaging',
    year: 'Research Associate, Summer 2017',
    info:
      'At this internship, I developed an iOS camera application that implemented Core ML and Metal Performance Shaders to denoise images. I also developed iOS camera application to take RAW format images with custom exposure and ISO to assist in collection of training data for neural networks.',
    info2:
      'In addition to iOS development, I also learned the basics of Keras and Tensorflow and assisted in the development of the neural network architecture.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me? Send me an email!',
  btn: '',
  email: 'jmoh3@illinois.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jmoh3/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/jmoh3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
