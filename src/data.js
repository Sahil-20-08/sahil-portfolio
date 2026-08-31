export const portfolioData = {
  personalInfo: {
    name: "Sahil Sharma",
    role: "Full-Stack Developer",
    tagline: "Building High-Performance Web Applications and Scalable Systems.",
    about: "I'm a Computer Science student passionate about building modern web applications. I love optimizing algorithms, writing clean code, and solving real-world problems through technology.",
    contact: {
      email: "mailto:your-email@gmail.com",
      github: "https://github.com/Sahil-20-08",
      linkedin: "#" // Yahan apna LinkedIn link daal dena baad me
    }
  },
  projects: [
    {
      id: 1,
      title: "Internship & Career Hub",
      description: "An end-to-end recruitment platform designed for seamless hiring.",
      features: [
        "Real-time candidate tracking",
        "Recruiter dashboard",
        "Application management"
      ],
      techStack: ["Next.js", "Tailwind CSS", "Python FastAPI", "PostgreSQL"],
      links: {
        live: "#", // Yahan apna live Vercel link daal sakte ho
        github: "#"  // Yahan project ka GitHub link aayega
      }
    },
    {
      id: 2,
      title: "Intelligent Query Assistant",
      description: "Smart assistant for automated query responses and document summarization.",
      features: [
        "Dynamic document summarization",
        "Automated responses using LLMs",
        "Fast and secure REST API integration"
      ],
      techStack: ["Python", "REST APIs", "LLM Integration"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ],
  skills: [
    "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", 
    "Python", "FastAPI", "PostgreSQL", "Git & GitHub"
  ],
  coreCompetencies: [
    "Design & Analysis of Algorithms", "Time Complexity Optimization", 
    "Dynamic Programming", "Advanced Data Structures"
  ]
};