const logotext = "Kami Developer";
const meta = {
     title: "Kami Web Development",
    description: "Portfolio website of Kami Web Development, showcasing web development, UI/UX, and design projects.",
};

const introdata = {
    title: "Kami Developers & Designers",
    animated: {
        first: "We love coding",
        second: "We code cool websites",
        third: "We develop mobile apps",
    },
    description: " We provide creative and effective digital solutions—ranging from web development and UI/UX design to graphic design and branding—helping businesses and individuals bring their ideas to life online",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hi, We are, a passionate web developer and graphic designer. I love creating beautiful, user-friendly websites and eye-catching designs that help businesses and individuals stand out. With a focus on creativity, functionality, and attention to detail, I turn ideas into digital experiences that make an impact.",
};
const worktimeline = [
  {
    jobtitle: "Frontend Developer",
    where: "Ezhar Travel",
    date: " Present",
    description: "Developed RESTful APIs, managed MongoDB & MySQL databases, and implemented authentication & security using JWT and Passport.js."
  },
  {
    jobtitle: "Full Stack Developer (Node.js & React)",
    where: "Software House GreeSoft",
    date: "2022 - 2024",
    description: "Built and maintained client projects, collaborated in Agile teams, and deployed applications using Docker and AWS."
  },
  {
    jobtitle: "WordPress Developer",
    where: "BN Movers",
    date: "2023",
    description: "Designed and customized WordPress websites, implemented plugins, optimized performance, and ensured responsive design."
  },
  {
    jobtitle: "WordPress",
    where: "Freelance Projects",
    date: "Remote",
    description: "Maintained client WordPress sites, integrated APIs, and handled backend fixes and updates."
  }
];


const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "WordPress",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 95,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "We create intuitive and visually appealing interfaces that provide seamless user experiences, turning complex ideas into simple, engaging designs using tools like Figma, Adobe XD, Sketch, and InVision.",
    },
    {
        title: "Web Developer",
        description: "We build responsive, fast, and user-friendly websites and applications using React.js and Node.js, bringing ideas to life and helping businesses grow online.",
    },
    {
        title: "Wordpress Design",
        description: "We create custom WordPress websites that are visually appealing, easy to manage, and fully optimized for performance using popular plugins like Elementor, WooCommerce, Yoast SEO, and Contact Form 7",
    },
];

const dataportfolio = [{
    img: "/4.jpg",
    description: "Created  an online book-selling platform with search, secure checkout, and responsive design.",
    link: "https://online-shopping-xi-six.vercel.app/",
      
},
    {
        img: "/5.png",
        description: "Developed   a medical laboratory management system covering test booking, reporting, and complete process tracking.",
        link: "https://medical-labortray-setup.vercel.app/",
    },
    {
        img: "/6.png",
        description: "Designed  an online platform for a travel agency with package listings, bookings, and enhanced digital presence",
        link: "https://ezhar-travel-and-tourism.vercel.app/",
    },
   
    {
        img: "/7.png",
        
        description: "Built   a web platform for car washing and related services with booking, service listings, and responsive design.car wash",
        link: "https://car-washing-services.vercel.app/",
    },
    {
        
        img: "/11.png",
        description: "Database security protects sensitive data, ensures integrity, and prevents unauthorized access.",
        link: "#",
    },

    {
        img: "/12.png",
        description: "Design in web development is important because it enhances user experience, builds trust, and makes websites more engaging and effective.",
        link: "#",
    },
    
    {
        img: "/8.png",
        description: "Implemented backend security using tools like Helmet, Passport, JWT, bcrypt, and CSRF protection to ensure safe authentication and data integrity.",
        link: "#",
    },
    {
        img: "/7.png",
        description: "The 7 wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },


    {
        
        img: "/9.jpg",
        description: "Secured WordPress sites using plugins and practices like Wordfence, SSL, strong authentication, and regular updates to protect against vulnerabilities.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "muhammad.inshaofficial143@gmail.com",
    YOUR_FONE: "+966 572857593",
    description: "Whether it’s a web project, design idea, or just a question feel free to reach out. I’m here to help make your vision a reality!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/insha143",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/muhammad-insha-8a86ab2a2/",
  twitter: "https://twitter.com",
  whatsapp: "https://wa.me/+966572857593", // better for direct chat
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};