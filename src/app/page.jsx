"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import ContextMenu from '@/components/ContextMenu';

function MainComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState(false);
  const isDark = false; 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    discordId: "",
    adMessage: "",
    memberCount: "",
    whyPartner: ""
  });
  
  const [activeCommandCategory, setActiveCommandCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const homeRef = useRef(null);
  const commandsRef = useRef(null);
  const helpRef = useRef(null);
  const partnersRef = useRef(null);
  
  // Context menu state
  const [showContextMenu, setShowContextMenu] = useState(false);
  
  // Context menu items
  const contextMenuItems = [
    {
      label: "Home",
      icon: "fas fa-home",
      onClick: () => scrollToSection("home")
    },
    {
      label: "Commands",
      icon: "fas fa-terminal",
      onClick: () => scrollToSection("commands")
    },
    {
      label: "Get Help",
      icon: "fas fa-hands-helping",
      onClick: () => scrollToSection("help")
    },
    {
      label: "Partners",
      icon: "fas fa-handshake",
      onClick: () => scrollToSection("partners")
    },
    { divider: true },
    {
      label: "Staff Page",
      icon: "fas fa-users",
      onClick: () => router.push("/staff")
    },
    {
      label: "Join Discord",
      icon: "fab fa-discord",
      onClick: () => router.push("/redirect?to=discord")
    },
    {
      label: "Add Bot",
      icon: "fas fa-robot",
      onClick: () => router.push("/redirect?to=bot")
    }
  ];
  

  useEffect(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 300ms';
    
    return () => {
      document.body.style.opacity = '1';
      document.body.style.transition = '';
    };
  }, []);
  
  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);

    localStorage.setItem('lastSection', sectionName);
    
    if (sectionName === 'home') {
      router.push('/', { scroll: false });
    } else {
      router.push(`/?section=${sectionName}`, { scroll: false });
    }
    
    if (sectionName !== 'home') {
      setTimeout(() => {
        let ref = null;
        switch(sectionName) {
          case 'commands':
            ref = commandsRef.current;
            break;
          case 'help':
            ref = helpRef.current;
            break;
          case 'partners':
            ref = partnersRef.current;
            break;
          default:
            break;
        }
        
        if (ref) {
          ref.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
      
      document.body.style.opacity = '0';
      
      setTimeout(() => {
        let ref = null;
        switch(section) {
          case 'commands':
            ref = commandsRef.current;
            break;
          case 'help':
            ref = helpRef.current;
            break;
          case 'partners':
            ref = partnersRef.current;
            break;
          default:
            break;
        }
        
        if (ref) {
          ref.scrollIntoView({ behavior: 'auto' });
        }
        
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 300ms';
      }, 0);
    }
  }, [searchParams]);
  
  useEffect(() => {
    const section = searchParams.get('section');
    if (!section) {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 300ms';
    }
    
    return () => {
      document.body.style.transition = '';
    };
  }, [searchParams]);

  // Command configuration
  const commands = {
    "Mental Health Support": [
      {
        name: "/emergency",
        desc: "Access emergency mental health support information",
      },
      {
        name: "/helplines",
        desc: "Get a list of mental health helplines you can contact",
      },
      {
        name: "/helpsites",
        desc: "Get a list of mental health websites you can visit",
      },
    ],
    "Wellness Tools": [
      {
        name: "/healthyhabits",
        desc: "Learn about healthy habits to maintain mental well-being",
      },
      {
        name: "/inspire",
        desc: "Get a random inspirational quote to brighten your day",
      },
      {
        name: "/gratitude",
        desc: "Log something you are grateful for to boost your mood",
      },
      {
        name: "/moodtracker",
        desc: "Track your mood over time and receive insights",
      }
    ],
    "Games": [
      {
        name: "/trivia",
        desc: "Play a mental health trivia game to test your knowledge",
      },
      {
        name: "/wordassociation",
        desc: "Play a word association game related to positive emotions",
      },
      {
        name: "/mentalmaths",
        desc: "Play a mental math game to test your mental calculation skills",
      },
      {
        name: "/riddle",
        desc: "Solve a mental riddle to test your logic skills",
      },
      {
        name: "/unscramble",
        desc: "Unscramble a word to test your vocabulary skills",
      },
      {
        name: "/bubblewrap",
        desc: "Pop bubblewrap"
      }
    ],
    "General": [
      {
        name: "/help",
        desc: "Lists all available commands and their descriptions",
      },
      {
        name: "/about",
        desc: "Learn about the Minds Matter bot and its creator",
      },
      { 
        name: "/randomfact", 
        desc: "Get a random fact to brighten your day" 
      },
    ],
  };
  
  // Filter commands based on search and category
  const getFilteredCommands = () => {
    let filteredCommands = {};
    
    Object.keys(commands).forEach(category => {
      if (activeCommandCategory === "all" || activeCommandCategory === category) {
        const categoryCommands = commands[category].filter(cmd => 
          cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          cmd.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (categoryCommands.length > 0) {
          filteredCommands[category] = categoryCommands;
        }
      }
    });
    
    return filteredCommands;
  };
  
  const partners = [
    {
      name: "BeePlayzz_ Hangout",
      logo: "/bee.png",
      invite: "https://discord.gg/jBjw2S6D2A",
      description: "A streaming community where you can hangout and make friends."
    }
  ];
  
  const helplines = [
    { name: "Samaritans", number: "116 123", available: "24/7" },
    { name: "Mind", number: "0300 123 3393", available: "Mon-Fri 9am-6pm" },
    { name: "CALM", number: "0800 58 58 58", available: "5pm-midnight" },
    { name: "YoungMinds", number: "85258", available: "24/7 (Text)" },
  ];
  const websites = [
    { name: "Mind", url: "https://www.mind.org.uk" },
    { name: "NHS Mental Health", url: "https://www.nhs.uk/mental-health" },
    { name: "Mental Health UK", url: "https://mentalhealth-uk.org" },
    { name: "Rethink Mental Illness", url: "https://www.rethink.org" },
  ];
  
  return (
    <div
      className={`min-h-screen font-poppins ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-white to-gray-100 text-gray-800"
      }`}
    >
      {/* Banner removed because apps shut */}

      <nav
        className={`backdrop-blur-lg ${
          isDark ? "bg-gray-800/80" : "bg-white/80"
        } sticky top-0 z-50 border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        } shadow-sm`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-brain text-[#4F46E5] text-2xl md:text-3xl" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text">
                Minds Matter
              </span>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 rounded-lg transition-all text-gray-600 hover:text-gray-800 flex items-center"
                  aria-label="Navigation dropdown"
                >
                  <span className="mr-1">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>
                  <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm`} />
                </button>
                
                {isDropdownOpen && (
                  <div className={`absolute top-full right-0 mt-1 w-48 rounded-md shadow-lg py-1 z-50 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <button
                      onClick={() => {
                        scrollToSection("home");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "home" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("commands");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "commands" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Commands
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("help");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "help" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Get Help
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("partners");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "partners" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Partners
                    </button>
                    <a
                      href="/staff"
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "staff" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Staff
                    </a>
                  </div>
                )}
              </div>
              
              {/* Removing dark mode button and hamburger menu button */}
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === "home"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("commands")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "commands"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Commands
              </button>
              <button
                onClick={() => scrollToSection("help")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "help"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Get Help
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "partners"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Partners
              </button>
              <a
                href="/staff"
                onClick={(e) => {
                  e.preventDefault();
                  document.body.style.opacity = '0.5';
                  document.body.style.transition = 'opacity 150ms';
                  
                  setTimeout(() => {
                    router.push('/staff');
                  }, 150);
                }}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "staff"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Staff
              </a>
              {/* Removing dark mode toggle button */}
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "home"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection("commands");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "commands"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Commands
                </button>
                <button
                  onClick={() => {
                    scrollToSection("help");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "help"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Get Help
                </button>
                <button
                  onClick={() => {
                    scrollToSection("partners");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "partners"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Partners
                </button>
                {/* Staff link with smooth transition */}
                <a
                  href="/staff"
                  onClick={(e) => {
                    e.preventDefault();
                    document.body.style.opacity = '0.5';
                    document.body.style.transition = 'opacity 150ms';
                    
                    setTimeout(() => {
                      router.push('/staff');
                    }, 150);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "staff"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Staff
                </a>
                
                {/* Dark mode toggle button */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    isDark
                      ? "text-yellow-400 hover:text-yellow-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} mr-2`} />
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">


        {activeSection === "home" && (
          <div ref={homeRef} id="home" className="text-center space-y-12 animate-[fadeIn_1s_ease-out]">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text">
                Welcome to Minds Matter
              </h1>
              <p
                className={`text-xl md:text-2xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Your mental health companion on Discord. Get support, resources,
                and tools to help maintain your mental well-being.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
              {/* Add to Discord Button */}
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="animate-[float_3s_ease-in-out_infinite]"
              >
                <a
                  href="/redirect?to=bot"
                  className={`bg-[#4F46E5] hover:bg-[#4338CA] px-8 py-4 rounded-xl text-white font-bold text-lg inline-flex items-center space-x-3 shadow-lg hover:shadow-[#4F46E5]/20 transition-all ${
                    isHovered ? "scale-105" : ""
                  }`}
                >
                  <i className="fab fa-discord text-2xl" />
                  <span>Add bot to server</span>
                </a>
              </div>

              {/* Join Discord Server Button */}
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="animate-[float_3s_ease-in-out_infinite]"
              >
                <a
                  href="/redirect?to=discord" 
                  className={`bg-[#4F46E5] hover:bg-[#4338CA] px-8 py-4 rounded-xl text-white font-bold text-lg inline-flex items-center space-x-3 shadow-lg hover:shadow-[#4F46E5]/20 transition-all ${
                    isHovered ? "scale-105" : ""
                  }`}
                >
                  <i className="fab fa-discord text-2xl" />
                  <span>Join Discord Server</span>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } p-8 rounded-xl border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } shadow-sm hover:border-[#4F46E5]/50 transition-all`}
              >
                <i className="fas fa-heart text-[#4F46E5] text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Access mental health resources and support anytime, anywhere.
                </p>
              </div>
              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } p-8 rounded-xl border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } shadow-sm hover:border-[#4F46E5]/50 transition-all`}
              >
                <i className="fas fa-users text-[#4F46E5] text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Join a supportive community that understands and cares.
                </p>
              </div>
              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } p-8 rounded-xl border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } shadow-sm hover:border-[#4F46E5]/50 transition-all`}
              >
                <i className="fas fa-tools text-[#4F46E5] text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Helpful Tools</h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Access various tools and resources for mental wellness.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "commands" && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text text-center mb-8">
              Bot Commands
            </h2>
            
            {/* Search and filter controls */}
            <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-sm border ${isDark ? "border-gray-700" : "border-gray-200"} mb-6`}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      className={`block w-full pl-10 pr-3 py-2 border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]`}
                      placeholder="Search commands..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <select
                    className={`block w-full px-3 py-2 border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]`}
                    value={activeCommandCategory}
                    onChange={(e) => setActiveCommandCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {Object.keys(commands).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Command cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(getFilteredCommands()).map(([category, cmds]) => (
                cmds.map((cmd) => (
                  <div
                    key={`${category}-${cmd.name}`}
                    className={`${
                      isDark ? "bg-gray-800" : "bg-white"
                    } rounded-lg p-5 shadow-md hover:shadow-lg border ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    } transition-all duration-300 hover:border-[#4F46E5] transform hover:translate-y-[-2px]`}
                  >
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        category === "Mental Health Support" ? "bg-red-100" :
                        category === "Wellness Tools" ? "bg-green-100" :
                        category === "Games" ? "bg-yellow-100" : "bg-blue-100"
                      }`}>
                        <i className={`fas ${
                          category === "Mental Health Support" ? "fa-heart" :
                          category === "Wellness Tools" ? "fa-leaf" :
                          category === "Games" ? "fa-gamepad" : "fa-cog"
                        } ${
                          category === "Mental Health Support" ? "text-red-500" :
                          category === "Wellness Tools" ? "text-green-500" :
                          category === "Games" ? "text-yellow-500" : "text-blue-500"
                        }`}></i>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-mono text-lg font-semibold text-[#4F46E5]">{cmd.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            category === "Mental Health Support" ? "bg-red-100 text-red-800" :
                            category === "Wellness Tools" ? "bg-green-100 text-green-800" :
                            category === "Games" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                          }`}>
                            {category}
                          </span>
                        </div>
                        <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {cmd.desc}
                        </p>
                        <div className="mt-3 pt-3 border-t border-dashed border-gray-200 flex justify-end">
                          <button 
                            className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors"
                            onClick={() => {
                              // Copy command to clipboard
                              navigator.clipboard.writeText(cmd.name);
                              // You could add a toast notification here
                            }}
                          >
                            <i className="far fa-copy mr-1"></i> Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ))}
            </div>
            
            {/* No results message */}
            {Object.keys(getFilteredCommands()).length === 0 && (
              <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg p-8 shadow-sm border ${isDark ? "border-gray-700" : "border-gray-200"} text-center`}>
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">No commands found</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCommandCategory("all");
                  }}
                  className="mt-4 px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
            
            {/* Command categories explanation */}
            <div className={`${isDark ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-6 mt-8 border ${isDark ? "border-gray-700" : "border-gray-200"}`}>
              <h3 className="text-lg font-semibold mb-4">Command Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <i className="fas fa-heart text-red-500"></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Mental Health Support</h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Emergency resources and support contacts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <i className="fas fa-leaf text-green-500"></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Wellness Tools</h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Tools to help maintain daily mental wellness
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <i className="fas fa-gamepad text-yellow-500"></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Games</h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Fun activities to boost your mood
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fas fa-cog text-blue-500"></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">General</h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Bot information and general commands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "help" && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text text-center mb-8">
              Mental Health Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } rounded-lg p-6 shadow-sm border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-[#4F46E5]">
                  UK Helplines
                </h3>
                {helplines.map((line) => (
                  <div
                    key={line.name}
                    className={`mb-4 ${
                      isDark ? "bg-gray-700" : "bg-gray-50"
                    } p-4 rounded-lg border ${
                      isDark ? "border-gray-600" : "border-gray-100"
                    }`}
                  >
                    <div className="font-bold">{line.name}</div>
                    <div className="text-[#4F46E5]">{line.number}</div>
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {line.available}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } rounded-lg p-6 shadow-sm border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-[#4F46E5]">
                  Helpful Websites
                </h3>
                {websites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block mb-4 ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-50 hover:bg-gray-100"
                    } p-4 rounded-lg border ${
                      isDark ? "border-gray-600" : "border-gray-100"
                    } transition-colors`}
                  >
                    <div className="font-bold">{site.name}</div>
                    <div className="text-[#4F46E5] text-sm">{site.url}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "partners" && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text text-center mb-8">
              Our Partners
            </h2>
            <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            We're proud to partner with these communities that support Minds Matter.
            </p>
            
            <div className="flex justify-center">
              {partners.map((partner) => (
                <div 
                  key={partner.name}
                  className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-sm border 
                  ${isDark ? "border-gray-700" : "border-gray-200"} hover:border-[#4F46E5]/50 transition-all flex flex-col items-center text-center max-w-md`}
                >
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder-logo.png";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#4F46E5]">{partner.name}</h3>
                  <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {partner.description}
                  </p>
                  <a
                    href={partner.invite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-[#4F46E5] hover:bg-[#4338CA] px-4 py-2 rounded-lg text-white font-medium inline-flex items-center space-x-2 transition-colors"
                  >
                    <i className="fab fa-discord" />
                    <span>Join Community</span>
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowPartnerModal(true)}
                className="fancy-button"
              >
                Apply for Partnership
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Success Confirmation Toast */}
            {showConfirmation && (
              <div className="fixed bottom-4 right-4 bg-[#4F46E5] text-white px-6 py-4 rounded-xl shadow-lg animate-[fadeIn_0.3s_ease-out] z-50 flex items-center space-x-2">
                <i className="fas fa-check-circle text-xl" />
                <span className="font-medium">Partnership application submitted successfully!</span>
              </div>
            )}
            
           {/* Partnership Application Modal */}
{showPartnerModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all animate-slideIn">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Partnership Application</h3>
          <button
            onClick={() => setShowPartnerModal(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl" />
          </button>
        </div>
        <form className="space-y-4" onSubmit={async (e) => {
          e.preventDefault();
          
          const webhookUrl = "https://discord.com/api/webhooks/1348010717277720617/ubzf0qsOAuAXMnbU7giF21_4BWt5amCaoWrSe9pV7hOPC9JqXcI1IR-vJULkBJXqdVN4";
          
          const embed = {
            title: "New Partnership Application",
            color: 5165349, // #4F46E5 in decimal
            fields: [
              {
                name: "Discord ID",
                value: partnerFormData.discordId,
                inline: true
              },
              {
                name: "Member Count",
                value: partnerFormData.memberCount,
                inline: true
              },
              {
                name: "Advertisement Message",
                value: partnerFormData.adMessage
              },
              {
                name: "Why should we partner with you?",
                value: partnerFormData.whyPartner
              }
            ],
            timestamp: new Date().toISOString()
          };
          
          try {
            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                embeds: [embed]
              })
            });
          } catch (error) {
            console.error('Error sending webhook:', error);
          }
          
          setShowConfirmation(true);
          setShowPartnerModal(false);
        }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Discord ID <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] hover:text-[#4338CA] text-xs underline">
                (How to get your ID?)
              </a>
            </label>
            <input
              type="text"
              required
              value={partnerFormData.discordId}
              onChange={(e) => setPartnerFormData({...partnerFormData, discordId: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your Discord ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Server Member Count
            </label>
            <input
              type="number"
              required
              value={partnerFormData.memberCount}
              onChange={(e) => setPartnerFormData({...partnerFormData, memberCount: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Number of members"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Advertisement Message
            </label>
            <textarea
              required
              value={partnerFormData.adMessage}
              onChange={(e) => setPartnerFormData({...partnerFormData, adMessage: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all min-h-[100px] placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your server's advertisement message"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Why should we partner with you?
            </label>
            <textarea
              required
              value={partnerFormData.whyPartner}
              onChange={(e) => setPartnerFormData({...partnerFormData, whyPartner: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all min-h-[100px] placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Tell us why we should partner with your community"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4F46E5] text-white py-3 rounded-lg font-semibold hover:bg-[#4338CA] transition-colors focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
)}

{/* Success Confirmation Modal */}
{showConfirmation && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-all animate-slideIn text-center">
      <div className="text-[#4F46E5] mb-4">
        <i className="fas fa-check-circle text-5xl" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Application Submitted!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for your interest in partnering with us. We'll review your application and get back to you soon.</p>
      <button
        onClick={() => setShowConfirmation(false)}
        className="w-full bg-[#4F46E5] text-white py-3 rounded-lg font-semibold hover:bg-[#4338CA] transition-colors focus:ring-2 focus:ring-[#4F46E5] transform hover:scale-[1.02] active:scale-[0.98] duration-200"
      >
        Close
      </button>
    </div>
  </div>
)}
          </div>
        )}
      </main>

      <footer
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } mt-20 py-8 border-t`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © 2025 Minds Matter. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
  <ContextMenu 
        items={contextMenuItems}
        onClose={() => setShowContextMenu(false)}
      />
    </div>
  );
}

export default MainComponent;
