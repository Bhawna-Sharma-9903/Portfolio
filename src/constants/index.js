import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  LorraineLane,
  shyam,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  freelancer,
  figma,
  chegg,
  dcs,
  carrent,
  onair,
  django,
  opencv,
  python,
  iot,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// import {chegg , dcs} from "../assets/company";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Open CV",
    icon: opencv,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "IoT",
    icon: iot,
  },
];

const experiences = [
  {
    title: "IoT Intern",
    company_name: "Dymech Consultancy & Services",
    icon: dcs,
    iconBg: "#383E56",
    date: "Jul 2020 - Aug 2020",
    points: [
      "Deep Learning for Real-Time IoT Applications: Explored IoT's role in Smart Water Management using deep learning.",
      "Team Collaboration: Worked with 8 diverse members, fostering teamwork and leadership development.",
      "Practical Implementation: Applied IoT to create, manage, and organize a Smart Water Management System.",
      "Cross-Functional Skills: Gained leadership qualities through collaboration, enhancing adaptability in diverse, dynamic environments",
    ],
  },
  {
    title: "Content Associate",
    company_name: "Chegg India pvt. ltd.",
    icon: chegg,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Oct 2022",
    points: [
      "Visual Concept Production: Crafted compelling visual concepts to inspire, inform, and captivate consumers with high-quality outcomes",
      "Consumer Engagement: Ensured project completion aligns with standards, delivering impactful visuals that resonate with audiences.",
      "Blog Graphics Creation: Followed brand guidelines to design graphics for the company blog, maintaining visual consistency.",
      "Quality Assurance: Upheld a standard of excellence, guaranteeing that all projects met high-quality standards and visual appeal.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Aug 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lorraine Lane",
    description:
      "This e-commerce platform, crafted with HTML, CSS, and JavaScript, enables seamless item purchases while offering users a diverse selection of clothing to browse through effortlessly.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LorraineLane,
    source_code_link: "https://github.com/Bhawna-Sharma-9903/LorrainLane-ecommerce-site",
  },
  {
    name: "On-air Devices",
    description:
      "This project, employing OpenCV and Artificial Intelligence, developed virtual devices like mouse, keyboard, and canvas for users with finger impairments, offering a touch-free and pressure-free working experience.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: onair,
    source_code_link: "https://github.com/Bhawna-Sharma-9903/On-Air-Virtual-Devices",
  },
  {
    name: "Shyam-website",
    description:
      "Built with React, our website offers a seamless platform for purchasing pooja items. Explore a curated selection, streamline your shopping experience, with just a few clicks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shyam,
    source_code_link: "https://github.com/Bhawna-Sharma-9903/Shyam_Website",
  },
  //  {
  //   name: "Shyam-website",
  //   description:
  //     "Built with React, our website offers a seamless platform for purchasing pooja items. Explore a curated selection, streamline your shopping experience, with just a few clicks.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "figma",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: shyam,
  //   source_code_link: "https://github.com/Bhawna-Sharma-9903/Shyam--ecommerc-website-",
  // },
  //  {
  //   name: "Shyam-website",
  //   description:
  //     "Built with React, our website offers a seamless platform for purchasing pooja items. Explore a curated selection, streamline your shopping experience, with just a few clicks.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "figma",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: shyam,
  //   source_code_link: "https://github.com/Bhawna-Sharma-9903/Shyam--ecommerc-website-",
  // },
];

export { services, technologies, experiences, testimonials, projects };