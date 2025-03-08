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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Android Developer",
        icon: creator,
    },
];

const technologies = [{
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

const experiences = [{
        title: "Full Stack Developer",
        company_name: "ALX Software engineering",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023 - April 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Microsoft Learn Student Ambassador",
        company_name: "Microsoft",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023 - present",
        points: [
            "Holding workshops and webinars on various topics related to technology.",

            "Mentoring students and helping them build their technical skills.",
            "Collaborating with other ambassadors to create engaging content for the community.",
            "Representing Microsoft at various events and conferences.",

        ],
    },


    {
        title: "React Native Developer",
        company_name: "Mayo Clinic",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2025 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Buntu Labs Technologies",
        icon: shopify,
        iconBg: "#383E56",
        date: "Nov 2024 - present",
        points: [
            "Developing and maintaining web applications using Node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Moringa School Campus Ambassador",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Organizing and hosting events to promote Moringa School and its programs.",
            "Mentoring students and helping them navigate their learning journey.",
            "Collaborating with the admissions team to recruit new students.",
            "Representing Moringa School at various events and conferences.",

        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Milugo Geofrey proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Lecture Maseno University",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Geofrey does.",
        name: "Hamilton Conford",
        designation: "COO",
        company: "Buntu Labs",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Geofrey optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Buntu Labs",
        designation: "CTO",
        company: "",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Cemishop commercial store",
        description: "Web-based platform that allows users to search, book, and manage products , providing a convenient and efficient solution for Market needs.",
        tags: [{
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "SQL",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://cemishop.pythonanywhere.com/",
    },
    {
        name: "Bus Booking system",
        description: "Django Bus Booking system.",
        tags: [{
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "HTML templates",
                color: "green-text-gradient",
            },
            {
                name: "Postgresql",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/djangoBusBooking",
    },
    {
        name: "To Do App",
        description: "Simple To Do App built with React.js and Tailwind CSS.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };