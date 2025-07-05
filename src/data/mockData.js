export const mockData = {
  about: {
    description: "I'm a passionate 3rd year BTech Computer Science student at NMIMS Indore with a deep fascination for artificial intelligence, machine learning, and full-stack development. My journey in tech has been driven by curiosity and a desire to create innovative solutions that can make a real impact.",
    education: "BTech Computer Science Engineering student at NMIMS Indore (3rd year as of 2025)",
    passion: "I love exploring the intersection of AI and practical applications, from building intelligent systems to creating user-friendly interfaces. My goal is to bridge the gap between complex algorithms and real-world solutions.",
    facts: [
      "Currently in 3rd year of BTech CSE",
      "Specialized in AI/ML and Data Science",
      "5+ projects in machine learning domain",
      "Strong foundation in full-stack development",
      "Active contributor to open-source projects"
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      category: "AI/ML & Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning (CNN)", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Scikit-learn", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Plotly", level: 80 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Streamlit", level: 80 }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "Git/GitHub", level: 80 },
        { name: "Excel/Data Analysis", level: 75 }
      ]
    },
    {
      category: "Specialized Technologies",
      skills: [
        { name: "FAISS (Vector DB)", level: 75 },
        { name: "RAG Systems", level: 70 },
        { name: "DBSCAN Clustering", level: 80 },
        { name: "Financial Modeling", level: 75 }
      ]
    }
  ],
  projects: [
    {
      title: "Real-Time Sign Language Interpreter",
      description: "ISL recognition system using CNN and histogram matching for real-time translation of Indian Sign Language to text.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Python", "OpenCV", "CNN", "Deep Learning", "Computer Vision"],
      features: [
        "Real-time hand gesture recognition",
        "CNN-based classification model",
        "Histogram matching for accuracy",
        "Support for Indian Sign Language",
        "Live video processing"
      ],
      github: "https://github.com/ram/sign-language-interpreter",
      live: "https://sign-language-demo.vercel.app"
    },
    {
      title: "Traffic Violation Management System",
      description: "Full-stack DBMS project with comprehensive 10-table schema and animated dashboard for traffic management.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
      technologies: ["MySQL", "HTML/CSS", "JavaScript", "PHP", "DBMS"],
      features: [
        "Normalized 10-table database schema",
        "Interactive animated dashboard",
        "Violation tracking and reporting",
        "User management system",
        "Fine calculation automation"
      ],
      github: "https://github.com/ram/traffic-management",
      live: "https://traffic-demo.herokuapp.com"
    },
    {
      title: "Cash Strategy Stats Analytics",
      description: "Streamlit application for analyzing trading data with PnL analysis, stop-loss strategies, and performance metrics.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      technologies: ["Streamlit", "Plotly", "Pandas", "Python", "Finance"],
      features: [
        "CSV/XLSX data upload and processing",
        "Comprehensive PnL analysis",
        "Stop-loss strategy evaluation",
        "Win ratio and drawdown analysis",
        "Interactive data visualizations"
      ],
      github: "https://github.com/ram/cash-strategy-stats",
      live: "https://cash-strategy-stats.streamlit.app"
    },
    {
      title: "AI Product Recommendation System",
      description: "Intelligent recommendation system using RAG and FAISS for product suggestions similar to major e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c",
      technologies: ["Python", "FAISS", "RAG", "NLP", "Vector DB"],
      features: [
        "Advanced RAG implementation",
        "FAISS vector database integration",
        "Semantic product matching",
        "Scalable recommendation engine",
        "Real-time similarity search"
      ],
      github: "https://github.com/ram/ai-product-recommendation",
      live: "https://ai-recommendations-demo.vercel.app"
    },
    {
      title: "Portfolio Investment Strategy",
      description: "Advanced investment analysis tool with penalty ranking system and trailing stop-loss logic for portfolio optimization.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Python", "Pandas", "Finance", "Algorithmic Trading"],
      features: [
        "Portfolio optimization algorithms",
        "Penalty ranking system",
        "Trailing stop-loss implementation",
        "Risk-return analysis",
        "Backtesting capabilities"
      ],
      github: "https://github.com/ram/portfolio-investment-strategy",
      live: "https://portfolio-strategy-demo.streamlit.app"
    }
  ],
  achievements: [
    {
      title: "Best Project Award",
      description: "Recognized for outstanding innovation in AI/ML project development during college tech fest.",
      date: "March 2024",
      icon: "🏆"
    },
    {
      title: "Hackathon Winner",
      description: "1st place in inter-college hackathon for developing real-time sign language interpreter.",
      date: "January 2024",
      icon: "🥇"
    },
    {
      title: "Research Publication",
      description: "Published research paper on 'Deep Learning Applications in Sign Language Recognition' in IEEE conference.",
      date: "November 2023",
      icon: "📄"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to multiple open-source projects with 500+ GitHub contributions.",
      date: "Ongoing",
      icon: "💻"
    },
    {
      title: "Academic Excellence",
      description: "Maintained 9.2+ CGPA throughout the academic journey with consistent top performance.",
      date: "2022-2025",
      icon: "🎓"
    },
    {
      title: "Technical Leadership",
      description: "Led a team of 8 developers in building the college's student management system.",
      date: "September 2023",
      icon: "👥"
    }
  ],
  timeline: [
    {
      id: 1,
      year: "2022",
      title: "Started BTech Journey",
      description: "Began Computer Science Engineering at NMIMS Indore with a focus on programming fundamentals and mathematics.",
      status: "completed",
      type: "education",
      achievements: ["Learned Python basics", "First programming project", "9.0+ CGPA in first semester"]
    },
    {
      id: 2,
      year: "2023",
      title: "Deep Dive into AI/ML",
      description: "Discovered passion for artificial intelligence and machine learning. Started building first ML projects.",
      status: "completed",
      type: "milestone",
      achievements: ["First CNN project", "OpenCV exploration", "Data structures mastery"]
    },
    {
      id: 3,
      year: "2023",
      title: "Sign Language Interpreter",
      description: "Developed real-time ISL recognition system using CNN and computer vision - my breakthrough project.",
      status: "completed",
      type: "project",
      achievements: ["Hackathon winner", "Research paper published", "Industry recognition"]
    },
    {
      id: 4,
      year: "2024",
      title: "Full-Stack Development",
      description: "Expanded skills to web development, building comprehensive database management systems.",
      status: "completed",
      type: "skill",
      achievements: ["Traffic Management System", "10-table DBMS design", "Frontend expertise"]
    },
    {
      id: 5,
      year: "2024",
      title: "Advanced Analytics & AI",
      description: "Built sophisticated systems for financial analysis and AI-powered recommendations.",
      status: "completed",
      type: "project",
      achievements: ["RAG implementation", "FAISS integration", "Financial modeling"]
    },
    {
      id: 6,
      year: "2025",
      title: "Industry-Ready Phase",
      description: "Currently perfecting skills, building portfolio, and preparing for the professional world.",
      status: "current",
      type: "milestone",
      achievements: ["Portfolio development", "Open source contributions", "Interview preparation"]
    },
    {
      id: 7,
      year: "2025",
      title: "Graduation & Career Launch",
      description: "Completing BTech degree and transitioning to professional software development career.",
      status: "upcoming",
      type: "education",
      achievements: ["BTech completion", "Job placement", "Professional development"]
    }
  ]
};