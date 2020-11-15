
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const splashSection = {
  /* Your Summary And Greeting Section */
  username: "Then An Z hi",
  jobTitle: "Frontend Developer",
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Then An Z hi",
  greetingTitle: "Hi there! I'm An Zhi",
  subTitle: emoji("Frontend Developer based in Singapore 🇸🇬. I am recent graduate with a passion for software and web development. While I have participated in IT internships to try out different roles, my expertise and interests lie in building interactive and scalable web applications."),
  resumeLink: "https://drive.google.com/file/d/1Bzp7OrOsrUymGaLzaYvUIWK1Km12021Q/view?usp=sharing"
};

const socialMediaLinks = {
  github: "https://github.com/anzhithen",
  linkedin: "https://www.linkedin.com/in/then-an-zhi/",
  gmail: "anzhi.then@gmail.com",
  instagram: "https://www.instagram.com/eddie_taz/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  skillsTitle: emoji("About me 🖥️"),
  subTitle:('A Frontend developer that enjoys building webpages by tinkering with various Javascript libraries and frameworks.'),
  skills: [
    emoji("⚡ Transforming web mockups to highly interactive web applications"),
    emoji("⚡ Ensuring consistency of web components across different browsers"),
    emoji("⚡ Develop tests to ensure high code coverage in web components"),
    emoji("⚡ Develop maintainable and reusable web components and utilities")
  ],
  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ]
};

// Your education background
const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  educationTitle: emoji("Education 🎓"),
  schools: [
    {
      schoolName: "Nanyang Technological University",
      logo: require("./assets/images/ntuLogo.png"),
      subHeader: "Bachelor of Engineering (Computer Science)",
      duration: "August 2015 - December 2018",
      desc: "Focus in Information and Cyber Security, Networking and Mobility",
      descBullets: []
    },
    {
      schoolName: "Nanyang Polytechnic",
      logo: require("./assets/images/nypLogo.png"),
      subHeader: "Diploma in Information Technology with Merit",
      duration: "April 2010 - April 2013",
      desc: "Focus in Information Security",
      descBullets: []
    }
  ]
}

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experienceTitle: emoji("Work Experiences 💼"),
  linkedinLink:"https://www.linkedin.com/in/then-an-zhi/",
  experience: [
    {
      role: "Front-End Developer",  
      company: "Acronis",
      companylogo: require("./assets/images/Acronis.png"),
      date: "January 2019 – Present",
      desc: "",
      descBullets: [
        "Developed and maintained a client-facing web application that facilitates security settings configuration across multiple operating system platforms.",
        "Developed Jest tests to ensure a code coverage of at least 90% on UI components.",
        "Introduced custom components to remove the use of “v-html” syntax that renders arbitrary HTML as they are vulnerable to XSS attacks.",
        "Removed 100% data inconsistencies of old UI components by integrating with VueX which hold the single source of truth.",
        "Improve code maintainability and reduce error occurrences by 50% by integrating Typescript to leverage on its OOP properties and static type checks."
      ]
    },
    {
      role: "Front-End Developer",  
      company: "Acronis",
      companylogo: require("./assets/images/autodesk-logo.png"),
      date: "August 2018 – December 2018",
      desc: "",
      descBullets: [
        "Perform smoke tests on the latest patches of software to ensure full compatibility with other Autodesk products.",
        "Developed C# test cases for client and server API modules to ensure correct functionality."
      ]
    },
    {
      role: "Front-End Developer",  
      company: "Acronis",
      companylogo: require("./assets/images/Acronis.png"),
      date: "May 2019 – July 2018",
      desc: "",
      descBullets: [
        "Designed and developed VueJS UI toolkit for internal consumption.",
        "Developed virtual scrolling in the Scrollbar component to render data of large datasets efficiently.",
        "Developed Jest tests to ensure a code coverage of at least 95% on UI components."
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Reach out to me! ☎️"),
  subtitle: "Always open for new opportunities! Feel free to drop an e-mail or reach me through any of the links below!",
  location: "Singapore",
  email_address: "anzhi.then@gmail.com"
};

export { splashSection, greeting, socialMediaLinks, skillsSection, educationInfo, workExperiences, contactInfo };
