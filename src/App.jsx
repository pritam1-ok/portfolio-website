import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }, { threshold: 0.15 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

// --- Orbiting 3D Planets Background ---
const PlanetsBackground = () => (
  <div className="orbit-container">
    <div className="planet-wrapper" style={{ '--radius': '20vw', '--duration': '45s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-moon" style={{ '--size': '35px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '35vw', '--duration': '70s' }}>
      <div className="planet planet-purple" style={{ '--size': '65px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '45vw', '--duration': '90s' }}>
      <div className="planet planet-neptune" style={{ '--size': '100px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '55vw', '--duration': '110s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-earth" style={{ '--size': '140px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '65vw', '--duration': '130s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-emerald" style={{ '--size': '80px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '75vw', '--duration': '150s' }}>
      <div className="planet planet-mars" style={{ '--size': '50px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '90vw', '--duration': '200s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-jupiter" style={{ '--size': '220px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '105vw', '--duration': '230s' }}>
      <div className="planet planet-crimson" style={{ '--size': '110px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '125vw', '--duration': '280s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-venus" style={{ '--size': '180px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '145vw', '--duration': '350s' }}>
      <div className="planet planet-purple" style={{ '--size': '280px' }}></div>
    </div>
    <div className="planet-wrapper" style={{ '--radius': '170vw', '--duration': '400s', animationName: 'revolve-reverse' }}>
      <div className="planet planet-neptune" style={{ '--size': '130px' }}></div>
    </div>
  </div>
);

// --- Dynamic Curved Lines with Bright Circular Spotlight Markers ---
const CurveLeftToRight = () => (
  <div className="w-full h-24 sm:h-32 my-2 relative flex justify-center pointer-events-none z-10">
    <svg className="w-full h-full text-amber-500 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
        <marker id="spotlight-ltr" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <circle cx="6" cy="6" r="5" fill="#f59e0b" opacity="0.4" />
          <circle cx="6" cy="6" r="2.5" fill="#fde68a" />
        </marker>
      </defs>
      <path 
        d="M 25 10 C 25 60, 75 40, 75 90" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeDasharray="8 8" 
        vectorEffect="non-scaling-stroke" 
        markerEnd="url(#spotlight-ltr)" 
        className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" 
      />
    </svg>
  </div>
);

const CurveRightToLeft = () => (
  <div className="w-full h-24 sm:h-32 my-2 relative flex justify-center pointer-events-none z-10">
    <svg className="w-full h-full text-amber-500 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
        <marker id="spotlight-rtl" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <circle cx="6" cy="6" r="5" fill="#f59e0b" opacity="0.4" />
          <circle cx="6" cy="6" r="2.5" fill="#fde68a" />
        </marker>
      </defs>
      <path 
        d="M 75 10 C 75 60, 25 40, 25 90" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeDasharray="8 8" 
        vectorEffect="non-scaling-stroke" 
        markerEnd="url(#spotlight-rtl)" 
        className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" 
      />
    </svg>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeCert, setActiveCert] = useState(null); 
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  // --- Header States ---
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      items: ["Java", "JavaScript", "Python", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      items: ["Node.js", "CrewAI", "Agentic AI", "Generative AI", "React", "Express", "Tailwind CSS"]
    },
    {
      title: "Databases, Tools & Platforms",
      items: ["MySQL", "MongoDB", "Git", "GitHub"]
    },
    {
      title: "Soft Skills",
      items: ["Leadership", "Teamwork", "Problem Solving", "Critical Thinking", "Adaptability"]
    }
  ];

  const experience = [
    {
      role: 'In-House Project-Based Training (Agentic AI, Generative AI, DevOps) | Trainee',
      company: 'IBM Datagami (via Medicaps University)',
      date: 'Jan 2026 - Apr 2026 | Indore (M.P)',
      points: [
        'Completed 240-hour Agentic AI and DevOps training, building an automated Hospitality Travel Management System.',
        'Engineered a scalable multi-agent system (CrewAI, LangChain) to optimize automated travel planning workflows.',
        'Designed robust FastAPI endpoints with a tri-database backend (MongoDB, MySQL) for secure data management.',
        'Developed multimodal workflows using Llama 3.3 to coordinate agents for personalized travel recommendations.',
        'Implemented Docker and core DevOps practices to streamline code integration across the multi-agent architecture.'
      ]
    },
    {
      role: 'Summer Internship – AI/ML',
      company: 'Medicaps University',
      date: 'Jun 2025 - Jul 2025 | Indore (M.P)',
      points: [
        'Completed hands-on training in TensorFlow and Keras for deep learning applications.',
        'Developed CNN-based models for Object Detection and Image Classification tasks.',
        'Built and trained ML models for human facial expression recognition with testing and validation.',
        'Implemented Product Image Search functionality using deep learning techniques.',
        'Worked with Python libraries: NumPy, Pandas, Scikit-learn, OpenCV for data preprocessing and model evaluation.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Agentic AI Hospitality System',
      tech: 'CrewAI, LangChain, Llama 3.3, Python, React, MongoDB',
      maintenance: true, // Added maintenance flag
      points: [
        'Engineered an autonomous multi-agent architecture using CrewAI, LangChain, and Llama 3.3 (via Groq) to automate complex travel research, showcasing advanced problem-solving and software design abilities.',
        'Developed a multimodal workflow integrating LLMs and image models to create visual resort concepts from text inputs.',
        'Designed a scalable full-stack platform with Python and React, implementing an optimized tri-database architecture (including MongoDB and MySQL) to enhance backend data management and system maintainability.'
      ]
    },
    {
      title: 'Airbnb-Inspired Web Application',
      tech: 'MongoDB, Express.js, React.js, Node.js',
      github: 'https://github.com/pritam1-ok/Airbnb-Inspired-Web-Application-P1.git',
      points: [
        'Developed a full-stack web application featuring user authentication and property listings.',
        'Implemented secure booking functionality and user profile management.',
        'Built RESTful APIs for backend operations, enabling Create, Read, Update, and Delete functionalities.',
        'Managed a MongoDB database to store user data and property information.',
        'Implemented React routing, state management using Context API, and developed interactive UI components.'
      ]
    },
    {
      title: 'Plant Disease Classifier',
      tech: 'TensorFlow, Keras, Python, CNN',
      github: 'https://github.com/pritam1-ok/Plant-disease_m.l.git',
      points: [
        'Collected and preprocessed leaf images with resizing, normalization, and data augmentation.',
        'Trained a Convolutional Neural Network (CNN) model for accurate plant disease classification.',
        'Evaluated model performance using accuracy, precision, recall, and confusion matrix.',
        'Implemented real-time disease detection functionality ready for web/mobile deployment.'
      ]
    },
    {
      title: 'Power BI IPL Dashboard',
      tech: 'Power BI, Power Query, DAX',
      github: 'https://github.com/pritam1-ok/IPL-Data-Analy_1Power_BI.git',
      points: [
        'Built an interactive Power BI dashboard to analyze IPL match results, team performance, venue trends, and win margins.',
        'Cleaned and transformed raw CSV data using Power Query and designed a relational data model for accurate reporting.',
        'Created DAX measures for KPIs such as wins, win percentage, toss impact, and Player of the Match awards.',
        'Added interactive slicers and visuals to enable season, team, and venue-based analysis with drill-down insights.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Medicaps University | Indore (Madhya Pradesh)',
      date: 'Aug 2022 - Jun 2026',
      grade: 'CGPA: 8.19'
    },
    {
      degree: 'Class 12th (PCM + IP)',
      institution: 'Shri Bal Vinay Mandir | Indore (Madhya Pradesh)',
      date: 'Jun 2022',
      grade: 'Percentage: 83.8%'
    }
  ];

  const certificates = [
    {
      title: 'Summer Internship (Google AI - ML)',
      issuer: 'Medicaps University',
      fileLink: '/115.jpg'
    },
    {
      title: 'Alpha (DSA with Java)',
      issuer: 'Apna College',
      fileLink: '/Apna DSA CERTI.pdf'
    },
    {
      title: 'Career Essentials in Data Analysis',
      issuer: 'Microsoft & LinkedIn Learning',
      fileLink: '/CertificateOfCompletion_Career Essentials in Data Analysis by Microsoft and LinkedIn.pdf'
    },
    {
      title: 'Generative AI',
      issuer: 'IBM Datagami',
      fileLink: '/certificate-EDU-2026-DBU9E.pdf'
    },
    {
      title: 'DevOps Foundation',
      issuer: 'IBM Datagami',
      fileLink: '/certificate-EDU-2026-EB7HS.pdf'
    },
    {
      title: 'Agentic AI',
      issuer: 'IBM Datagami',
      fileLink: '/certificate-EDU-2026-LMXD6.pdf'
    }
  ];

  useEffect(() => {
    if (!activeCert) setActiveCert(certificates[0]);
  }, [certificates, activeCert]);

  const handleCloseModal = () => {
    setShowSummaryModal(false);
    setShowContact(false); 
  };

  return (
    <div className="relative min-h-screen selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* Background Layers */}
      <div className="galaxy-bg"></div>
      <PlanetsBackground />

      {/* --- UPDATED TOP HEADER NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-[#030008]/80 backdrop-blur-md border-b border-purple-950/40 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
          
          {/* Left Side: Clickable Profile Trigger */}
          <button 
            onClick={() => setShowProfilePhotoModal(true)}
            className="flex items-center space-x-3 cursor-pointer group focus:outline-none"
          >
            <div className="relative">
              <img 
                src="/pritam-ibps.png" 
                alt="Pritam Kumar Ghosh" 
                className="w-10 h-10 rounded-full object-cover border-2 border-amber-400/60 shadow-[0_0_15px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform duration-300"
              />
              {/* Pulse ring indicating it's clickable */}
              <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping group-hover:border-amber-400"></div>
            </div>
            <span className="metallic-gold font-heading font-bold text-base tracking-widest uppercase group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all">
              Pritam Kumar Ghosh
            </span>
          </button>

          {/* Right Side: Innovative Menu Button */}
          <div className="relative">
            <button 
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className={`flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] ${
                isNavMenuOpen ? 'bg-purple-600/30 border-purple-400 rotate-90' : 'bg-[#130724] border-purple-600 hover:border-purple-400 hover:scale-110'
              }`}
            >
              {/* Custom Animated SVG Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                {isNavMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" className="origin-center animate-[pulse_0.5s_ease-in-out]"></line>
                    <line x1="6" y1="6" x2="18" y2="18" className="origin-center animate-[pulse_0.5s_ease-in-out]"></line>
                  </>
                ) : (
                  <>
                    <circle cx="12" cy="12" r="3" className="animate-pulse"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </>
                )}
              </svg>
            </button>

            {/* Dropdown Menu Modal */}
            {isNavMenuOpen && (
              <div className="absolute top-16 right-0 w-56 bg-[#0a0416]/95 backdrop-blur-xl border border-purple-500/50 rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] py-4 flex flex-col transform origin-top-right transition-all animate-[fadeIn_0.2s_ease-out]">
                {[
                  { name: "Skills", href: "#skills" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#projects" },
                  { name: "Education", href: "#education" },
                  { name: "Certificates", href: "#certificates" }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    onClick={() => setIsNavMenuOpen(false)}
                    className="px-6 py-3 text-sm font-semibold tracking-wider uppercase font-heading text-gray-300 hover:text-amber-400 hover:bg-purple-900/30 border-l-2 border-transparent hover:border-amber-400 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 w-full pb-32">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen pt-28 pb-12 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 1. Left Side: Speech Box + Avatar (Col 1-4) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start relative pt-4">
              <div className="relative bg-[#130724]/95 border-2 border-purple-500/60 p-5 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-md w-full max-w-[280px] text-left mb-6 z-20">
                <p className="text-xs text-gray-200 leading-relaxed font-light">
                  Hi! I'm <strong className="text-white font-medium">Pritam Kumar Ghosh</strong>, a Software Engineer specializing in MERN Full-Stack & Agentic AI. Explore my portfolio below!
                </p>
                <div className="mt-4 pt-3 border-t border-purple-900/40 text-center relative z-20">
                  <a href="#skills" className="text-[11px] text-amber-400 font-bold tracking-widest uppercase animate-pulse inline-block hover:text-amber-300 transition-colors relative z-20">
                    ↓ SCROLL DOWN ↓
                  </a>
                </div>
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-4 right-10 w-4 h-4 bg-[#130724] border-r-2 border-b-2 border-purple-500/60 rotate-45"></div>
              </div>

              <img 
                src="/1782406641040.png" 
                alt="Pritam Kumar Ghosh avatar" 
                className="w-52 sm:w-60 h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] z-10 mt-2"
              />
            </div>

            {/* 2. Middle: Name, Title, Summary, Contact & Education (Col 5-7) */}
            <div className="lg:col-span-4 z-20 flex flex-col justify-start space-y-4 px-2 pt-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tighter font-heading mb-1">
                  Pritam Kumar Ghosh
                </h1>
                <h2 className="text-sm sm:text-base text-purple-400 font-medium tracking-wide">
                  Software Engineer | Full-Stack MERN & AI
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-300 leading-relaxed font-light text-justify">
                  Results-driven Software Engineer with a strong foundation in full-stack MERN development, Java-based Data Structures & Algorithms, and proficient in Python and Generative AI development.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-purple-500/50 pl-3">
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-300 font-light tracking-wide">
                  <span className="sm:w-20 font-semibold text-purple-400 uppercase text-xs tracking-widest">EMAIL</span> 
                  <span>pritamcv7@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-300 font-light tracking-wide">
                  <span className="sm:w-20 font-semibold text-purple-400 uppercase text-xs tracking-widest">PHONE</span> 
                  <span>+91 8319990962</span>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-900/40 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">Education</h3>
                <div>
                  <p className="text-sm font-medium text-purple-300">B.Tech in Computer Science & Engineering</p>
                  <p className="text-xs text-gray-400 font-light">Medicaps University • CGPA: 8.19</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-300">Class 12th (PCM + IP)</p>
                  <p className="text-xs text-gray-400 font-light">Shri Bal Vinay Mandir • Percentage: 83.8%</p>
                </div>
              </div>
            </div>

            {/* 3. Right Side: Official Resume Viewer Box (Col 8-12) */}
            <div className="lg:col-span-4 z-25">
              <div className="bg-[#080312]/90 p-5 rounded-3xl border border-purple-900/50 backdrop-blur-xl shadow-2xl flex flex-col h-[540px]">
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-purple-900/30">
                  <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest text-purple-300">
                    OFFICIAL RESUME VIEWER
                  </h3>
                  <a 
                    href="/Pritam_CS_1.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs bg-purple-900/40 text-purple-300 px-3.5 py-1.5 rounded-full border border-purple-500/30 hover:bg-purple-900/70 transition-colors uppercase font-semibold"
                  >
                    OPEN FULL PDF
                  </a>
                </div>
                <div className="flex-1 w-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-purple-900/20 relative">
                  <iframe 
                    src="/Pritam_CS_1.pdf#toolbar=1&view=FitH" 
                    title="Pritam Kumar Ghosh Resume"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SPEECH BUBBLE SECTIONS CONNECTED BY CURVED SPOTLIGHT LINES --- */}
        <div className="flex flex-col w-full max-w-5xl mx-auto px-6 relative z-10">
          
          {/* 1. Curved Line from Scroll Down to Technical Skills */}
          <CurveLeftToRight />

          {/* SKILLS SECTION */}
          <section id="skills" className="w-full md:w-[85%] self-end relative z-10">
            <FadeInSection>
              <div className="speech-bubble-section p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold metallic-gold mb-8 tracking-tighter font-heading text-center">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.map(category => (
                    <div key={category.title} className="bg-black/40 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
                      <h4 className="font-bold text-lg text-amber-300 mb-4 font-heading">{category.title}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {category.items.map(skill => (
                          <span key={skill} className="bg-amber-500/10 border border-amber-400/40 text-gray-100 px-3.5 py-1.5 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </section>

          {/* 2. Curved Line from Skills to Experience */}
          <CurveRightToLeft />

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="w-full md:w-[85%] self-start relative z-10">
            <FadeInSection>
              <div className="speech-bubble-section p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold metallic-gold mb-8 tracking-tighter font-heading text-center">Experience</h3>
                <div className="space-y-8">
                  {experience.map(exp => (
                    <div key={exp.role} className="bg-black/40 p-6 rounded-2xl border border-amber-500/30">
                      <h4 className="font-bold text-xl md:text-2xl text-white tracking-tight font-heading">{exp.role}</h4>
                      <div className="text-sm md:text-base text-amber-400 mb-4 font-medium mt-1 tracking-widest uppercase">
                        {exp.company} • {exp.date}
                      </div>
                      <ul className="space-y-2.5 mt-4">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed font-light flex items-start">
                            <span className="text-amber-400 mr-2.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </section>

          {/* 3. Curved Line from Experience to Projects */}
          <CurveLeftToRight />

          {/* PROJECTS SECTION */}
          <section id="projects" className="w-full md:w-[85%] self-end relative z-10">
            <FadeInSection>
              <div className="speech-bubble-section p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold metallic-gold mb-8 tracking-tighter font-heading text-center">Featured Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map(project => (
                    <div key={project.title} className="bg-black/40 p-6 rounded-2xl border border-amber-500/30 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xl md:text-2xl text-white tracking-tight font-heading">{project.title}</h4>
                        <p className="text-xs font-semibold text-amber-400 mb-4 mt-2 tracking-widest uppercase">{project.tech}</p>
                        <ul className="space-y-2.5">
                          {project.points.map((point, idx) => (
                            <li key={idx} className="text-gray-300 text-sm leading-relaxed font-light flex items-start">
                              <span className="text-amber-400 mr-2.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* GitHub Link Button OR Maintenance Indicator */}
                      {(project.github || project.maintenance) && (
                        <div className="mt-5 pt-4 border-t border-amber-500/20">
                          {project.github ? (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-bold bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-500/30 px-4 py-2 rounded-lg transition-colors uppercase tracking-wider"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              View Code on GitHub
                            </a>
                          ) : project.maintenance ? (
                            <div className="inline-flex items-center gap-2 text-[11px] font-bold bg-amber-500/5 text-amber-500/80 border border-amber-500/20 px-4 py-2 rounded-lg uppercase tracking-widest cursor-not-allowed">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_4s_linear_infinite]">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                              </svg>
                              Under Process / Maintenance
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </section>

          {/* 4. Curved Line from Projects to Education */}
          <CurveRightToLeft />

          {/* EDUCATION SECTION */}
          <section id="education" className="w-full md:w-[85%] self-start relative z-10">
            <FadeInSection>
              <div className="speech-bubble-section p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold metallic-gold mb-8 tracking-tighter font-heading text-center">Education</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {education.map(edu => (
                    <div key={edu.degree} className="bg-black/40 p-6 rounded-2xl border border-amber-500/30">
                      <h4 className="font-bold text-white text-lg md:text-xl tracking-tight font-heading">{edu.degree}</h4>
                      <p className="text-sm text-gray-300 mt-2 font-light">{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm mt-4 pt-4 border-t border-amber-500/20">
                        <span className="text-gray-400 font-medium tracking-widest uppercase text-xs">{edu.date}</span>
                        <span className="text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-full text-xs">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </section>

          {/* 5. Curved Line from Education to Certificates */}
          <CurveLeftToRight />

          {/* CERTIFICATES VIEWER SECTION */}
          <section id="certificates" className="w-full md:w-[85%] self-end relative z-10">
            <FadeInSection>
              <div className="speech-bubble-section p-6 md:p-8 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold metallic-gold mb-8 tracking-tighter font-heading text-center">
                  Official Certificates Viewer
                </h3>
                
                {/* Responsive Layout for Viewer */}
                <div className="flex flex-col lg:flex-row gap-6 lg:h-[540px]">
                  
                  {/* Certificate Selection Menu */}
                  <div className="flex flex-col gap-3 max-h-[350px] lg:max-h-full lg:h-full lg:w-1/3 overflow-y-auto custom-scrollbar pr-2 shrink-0">
                    {certificates.map((cert, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCert(cert)}
                        className={`text-left p-4 rounded-xl border transition-all ${
                          activeCert?.title === cert.title 
                            ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                            : 'bg-black/40 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10'
                        }`}
                      >
                        <h4 className="font-bold text-white text-sm md:text-base font-heading leading-snug">{cert.title}</h4>
                        <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                      </button>
                    ))}
                  </div>

                  {/* Active Certificate Display Frame */}
                  <div className="flex-1 h-[450px] lg:h-auto bg-[#080312]/90 rounded-2xl border border-amber-500/30 flex flex-col overflow-hidden relative shadow-2xl">
                    <div className="flex justify-between items-center p-3 border-b border-amber-500/20 bg-black/60">
                      <h4 className="font-heading font-bold text-amber-300 text-xs sm:text-sm uppercase tracking-widest truncate pr-4">
                        {activeCert?.title}
                      </h4>
                      <a 
                        href={activeCert?.fileLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="shrink-0 text-[10px] sm:text-xs bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full border border-amber-400/40 hover:bg-amber-500/40 transition-colors uppercase font-semibold"
                      >
                        Open Full PDF
                      </a>
                    </div>
                    <div className="flex-1 w-full bg-[#1e1e1e] relative flex items-center justify-center p-2">
                      {activeCert && (activeCert.fileLink.endsWith('.jpg') || activeCert.fileLink.endsWith('.png')) ? (
                        <img 
                          src={activeCert.fileLink} 
                          alt={activeCert.title} 
                          className="max-w-full max-h-full object-contain rounded-lg" 
                        />
                      ) : activeCert ? (
                        <iframe 
                          src={`${activeCert.fileLink}#toolbar=0&view=FitH`} 
                          title={activeCert.title} 
                          className="w-full h-full border-0 rounded-lg" 
                        />
                      ) : null}
                    </div>
                  </div>

                </div>
              </div>
            </FadeInSection>
          </section>

        </div>
      </main>

      {/* --- QUICK SUMMARY ACTION BUTTON --- */}
      <button
        onClick={() => setShowSummaryModal(true)}
        className="fixed bottom-6 right-6 z-50 px-5 md:px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all flex items-center gap-2.5 font-heading font-bold uppercase tracking-wide text-xs md:text-sm bg-amber-500 hover:bg-amber-400 hover:scale-105 text-black border-2 border-amber-400"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Quick Profile Summary</span>
      </button>

      {/* --- VISUAL SUMMARY MODAL (Fixed Layout) --- */}
      {showSummaryModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={handleCloseModal} /* Clicking outside closes modal */
        >
          {/* Inner Wrapper for the Modal Box */}
          <div 
            className="bg-[#130724] border-2 border-amber-500/60 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.3)] w-full max-w-2xl relative flex flex-col max-h-[85vh] overflow-hidden animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()} /* Prevents closing when clicking inside the box */
          >
            
            {/* Close Button pinned to the top right corner of the outer box */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors bg-black/40 hover:bg-black/80 rounded-full p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Scrollable Area safely contained within the rounded borders */}
            <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 pt-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold metallic-gold font-heading mb-2">Pritam Kumar Ghosh</h3>
                <p className="text-purple-400 font-medium">Software Engineer (MERN & AI)</p>
              </div>

              <div className="space-y-6 text-sm text-gray-300">
                
                {/* About & Education */}
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-5">
                  <h4 className="font-heading font-bold text-amber-300 uppercase tracking-widest mb-3 border-b border-amber-500/20 pb-2">About & Education</h4>
                  <ul className="space-y-2">
                    <li><strong className="text-white">Profile:</strong> Full-stack developer with expertise in React, Node.js, Agentic AI workflows, and proficient in Python and Generative AI development.</li>
                    <li><strong className="text-white">Degree:</strong> B.Tech CSE at Medicaps University (Expected Jun 2026) • <span className="text-amber-400 font-bold">8.19 CGPA</span></li>
                    <li><strong className="text-white">Schooling:</strong> Class 12th (PCM + IP) • <span className="text-amber-400 font-bold">83.8%</span></li>
                    <li><strong className="text-white">Relocation:</strong> Open to relocate anywhere in India.</li>
                  </ul>
                </div>

                {/* Training & Certifications */}
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-5">
                  <h4 className="font-heading font-bold text-amber-300 uppercase tracking-widest mb-3 border-b border-amber-500/20 pb-2">Top Training & Certifications</h4>
                  <ul className="space-y-2">
                    <li>• <strong className="text-white">Agentic AI, Gen AI & DevOps (240 hrs)</strong> – IBM Datagami</li>
                    <li>• <strong className="text-white">Summer Internship (AI/ML)</strong> – Medicaps University</li>
                    <li>• <strong className="text-white">Career Essentials in Data Analysis</strong> – Microsoft & LinkedIn</li>
                    <li>• <strong className="text-white">Alpha (DSA with Java)</strong> – Apna College</li>
                  </ul>
                </div>

                {/* Key Projects */}
                <div className="bg-black/40 border border-amber-500/20 rounded-xl p-5">
                  <h4 className="font-heading font-bold text-amber-300 uppercase tracking-widest mb-3 border-b border-amber-500/20 pb-2">Key Projects</h4>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-white">Agentic AI Hospitality System:</strong> Autonomous multi-agent travel architecture using CrewAI, LangChain, and Llama 3.3.
                    </li>
                    <li>
                      <strong className="text-white">Airbnb-Inspired App:</strong> Full-stack MERN platform with secure booking and React state management.
                    </li>
                    <li>
                      <strong className="text-white">Plant Disease Classifier:</strong> CNN model built with TensorFlow & Keras for accurate image classification.
                    </li>
                    <li>
                      <strong className="text-white">Power BI IPL Dashboard:</strong> Interactive DAX-driven dashboard for analyzing match outcomes and venue trends.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-5 border-t border-purple-900/40 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/Pritam_CS_1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] uppercase text-sm tracking-wide"
                >
                  Open Full Resume PDF
                </a>
                
                {/* Contact Reveal Logic */}
                {showContact ? (
                  <div className="flex-1 flex flex-col justify-center items-center bg-white/5 rounded-xl border border-amber-500/40 py-2 animate-[pulse_1s_ease-in-out]">
                    <div className="text-amber-300 font-bold tracking-wider text-sm">pritamcv7@gmail.com</div>
                    <div className="text-gray-300 text-xs mt-0.5 font-medium">+91 8319990962</div>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowContact(true)}
                    className="flex-1 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl border border-white/10 transition-all uppercase text-sm tracking-wide"
                  >
                    View Contact Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- HEADER PROFILE PHOTO VIEWER MODAL --- */}
      {showProfilePhotoModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg transition-opacity"
          onClick={() => setShowProfilePhotoModal(false)}
        >
          <div 
            className="relative flex flex-col items-center justify-center w-full max-w-sm transform animate-[fadeIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setShowProfilePhotoModal(false)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src="/pritam-ibps.png" 
              alt="Pritam Kumar Ghosh Full View" 
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.6)]"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default App;