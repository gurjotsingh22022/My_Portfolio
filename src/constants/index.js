import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    webners,
    jib,
    enactus,
    tesla,
    shopify,
    carrent,
    wepay,
    wesprints,
    weforms,
    // chickenwao,
    // aiBot,
    jobit,
    tripguide,
    threejs,
    bharatie,
    jervis,
    gtb
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML/AI Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Founder/Initiator",
      company_name: "Webners",
      icon: webners,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Established Webners, a Tech initiative aiming to create incredible Tech product and Science researches.",
        "Working on Machine Learning, Artificial Intelligence, IoT, SaaS Products and many more.",
        "Uniting passionate innovators who dare to think outside the box to establish a strong team.",
        "Driven by an entrepreneurial spirit, I strive to innovate, inspire, and create impactful solutions through Webners.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "JIB Square Foundation",
      icon: jib,
      iconBg: "#E6DEDD",
      date: "July 2024 - Dec 2024",
      points: [
        "Developed the official website of JIB Square Foundation.",
        "Planed, designed, implemented, and deployed Square Basket, an e-grocery store of JIB Square Foundation.",
        "Organization received more than 200% increase in monthly sales",
        "More than 10 Food Banks partnered with the organization within the last 2 months.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Enactus Canada",
      icon: enactus,
      iconBg: "#383E56",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Gurjot, you have done a really great job!! Our team is really happy to have you at Enactus!",
      name: "Bharatie Malik",
      designation: "Former President",
      company: "Enactus Humber",
      image: bharatie,
    },
    {
      testimonial:
        "The new Square Basket app that you have made is really good! I really appreciate you!!",
      name: "Jervis Wilson",
      designation: "Board of Director",
      company: "JIB Square Foundation",
      image: jervis,
    },
    {
      testimonial:
        "You are a brilliant student! I can clearly see your bright future. You've God Gifted skills.",
      name: "Tarunpreet Saini",
      designation: "Director/Owner",
      company: "GTB InfoTech & Computer Education",
      image: gtb,
    },
  ];
  
  const projects = [
    {
      name: "WePay (FinTech)",
      description:
        "Web-based platform that allows users to send and receive money anytime, anywhere. With lightning-fast processing and user-friendly features, staying connected financially has never been easier. Manage all aspects of your finances in one intuitive app.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "MariaDB",
          color: "pink-text-gradient",
        },
      ],
      image: wepay,
      source_code_link: "https://github.com/gurjotsingh22022/wepay",
    },
    {
      name: "WeSprints (SaaS)",
      description:
        "WeSprints is a modern, web-based Agile team sprint management tool. Built to streamline team collaboration, project management, and sprint planning, WeSprints is designed to boost your productivity while keeping your workflow simple and effective.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "NeonDB",
          color: "pink-text-gradient",
        },
      ],
      image: wesprints,
      source_code_link: "https://github.com/gurjotsingh22022/WeSprints",
    },
    {
      name: "WeForms (BaaS)",
      description:
        "WeForms is a powerful Backend-as-a-Service (BaaS) solution that simplifies HTML form handling. With WeForms, you can receive HTML form submissions directly in your email inbox without the need for servers or backend code. It's fast, reliable, and free to get started!",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "Automation",
          color: "pink-text-gradient",
        },
      ],
      image: weforms,
      source_code_link: "https://github.com/gurjotsingh22022/WeForms",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };