"use client";
import React, { useState } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
  const partners = [
    {
      name: "London's Frontline RP",
      logo: "/LFRP_Logo.png",
      invite: "https://discord.gg/E276UvPTBm",
      description: "A returning FiveM community called London's Frontline Roleplay"
    },
    {
      name: "Blake's Community",
      logo: "/blake.png",
      invite: "https://discord.gg/SqPKkBxWhc",
      description: "A streaming community where you can make friends that last. "
    },
    {
      name: "BeePlayzz_ Hangout",
      logo: "/bee.png",
      invite: "https://discord.gg/jBjw2S6D2A",
      description: "A streaming community where you can hangout and make friends."
    }
  ];
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
    ],
    General: [
      {
        name: "/help",
        desc: "Lists all available commands and their descriptions",
      },
      {
        name: "/about",
        desc: "Learn about the Minds Matter bot and its creator",
      },
      { name: "/randomfact", desc: "Get a random fact to brighten your day" },
    ],
  };
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
                        setActiveSection("home");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "home" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => {
                        setActiveSection("commands");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "commands" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Commands
                    </button>
                    <button
                      onClick={() => {
                        setActiveSection("help");
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "help" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Get Help
                    </button>
                    <button
                      onClick={() => {
                        setActiveSection("partners");
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
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all ${isDark ? "text-yellow-400" : "text-gray-600"}`}
                aria-label="Toggle dark mode"
              >
                <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} />
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-all text-gray-600 hover:text-gray-800"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveSection("home")}
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
                onClick={() => setActiveSection("commands")}
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
                onClick={() => setActiveSection("help")}
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
                onClick={() => setActiveSection("partners")}
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
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "staff"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Staff
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setActiveSection("home");
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
                    setActiveSection("commands");
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
                    setActiveSection("help");
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
                    setActiveSection("partners");
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
                <a
                  href="/staff"
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
          <div className="text-center space-y-12 animate-[fadeIn_1s_ease-out]">
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
                  href="https://discord.com/api/oauth2/authorize?client_id=1282723690311581756&permissions=0&scope=bot%20applications.commands"
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
                  href="https://discord.gg/w44ttXFrGK" // Replace with your actual invite link
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
            <h2 className="text-3xl font-bold text-center mb-8">
              Bot Commands
            </h2>
            {Object.entries(commands).map(([category, cmds]) => (
              <div
                key={category}
                className={`${
                  isDark ? "bg-gray-800" : "bg-white"
                } rounded-lg p-6 shadow-sm hover:transform hover:scale-[1.01] transition-transform border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-[#4F46E5]">
                  {category}
                </h3>
                <div className="grid gap-4">
                  {cmds.map((cmd) => (
                    <div
                      key={cmd.name}
                      className={`${
                        isDark ? "bg-gray-700" : "bg-gray-50"
                      } p-4 rounded-lg border ${
                        isDark ? "border-gray-600" : "border-gray-100"
                      }`}
                    >
                      <div className="font-mono text-[#4F46E5]">{cmd.name}</div>
                      <div
                        className={
                          isDark ? "text-gray-300 mt-1" : "text-gray-600 mt-1"
                        }
                      >
                        {cmd.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "help" && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-center mb-8">
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
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Partners
            </h2>
            <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            We're proud to partner with these communities that support those struggling with mental health.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div 
                  key={partner.name}
                  className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-sm border 
                  ${isDark ? "border-gray-700" : "border-gray-200"} hover:border-[#4F46E5]/50 transition-all flex flex-col items-center text-center`}
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
            
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowPartnerModal(true)}
                className="bg-[#4F46E5] hover:bg-[#4338CA] px-8 py-4 rounded-xl text-white font-bold text-lg inline-flex items-center space-x-3 shadow-lg hover:shadow-[#4F46E5]/20 transition-all"
              >
                <i className="fas fa-handshake mr-2" />
                Apply for Partnership
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
                <div className="w-full max-w-md bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl shadow-xl transform transition-all animate-slideIn">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-white">Partnership Application</h3>
                      <button
                        onClick={() => setShowPartnerModal(false)}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <i className="fas fa-times text-xl" />
                      </button>
                    </div>
                    <form className="space-y-4" onSubmit={async (e) => {
                      e.preventDefault();
                      
                      // Discord webhook URL
                      const webhookUrl = "https://discord.com/api/webhooks/1348010717277720617/ubzf0qsOAuAXMnbU7giF21_4BWt5amCaoWrSe9pV7hOPC9JqXcI1IR-vJULkBJXqdVN4";
                      
                      // Create embed for Discord webhook
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
                      
                      // Send data to Discord webhook
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
                        <label className="block text-sm font-medium text-white mb-2">
                          Discord ID <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline text-xs">(How to get your ID?)</a>
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerFormData.discordId}
                          onChange={(e) => setPartnerFormData({...partnerFormData, discordId: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all placeholder-white/50"
                          placeholder="Your Discord ID"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Server Member Count
                        </label>
                        <input
                          type="number"
                          required
                          value={partnerFormData.memberCount}
                          onChange={(e) => setPartnerFormData({...partnerFormData, memberCount: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all placeholder-white/50"
                          placeholder="Number of members"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Advertisement Message
                        </label>
                        <textarea
                          required
                          value={partnerFormData.adMessage}
                          onChange={(e) => setPartnerFormData({...partnerFormData, adMessage: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all min-h-[100px] placeholder-white/50"
                          placeholder="Your server's advertisement message"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Why should we partner with you?
                        </label>
                        <textarea
                          required
                          value={partnerFormData.whyPartner}
                          onChange={(e) => setPartnerFormData({...partnerFormData, whyPartner: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/50 focus:border-white/30 transition-all min-h-[100px] placeholder-white/50"
                          placeholder="Tell us why we should partner with your community"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-white text-[#4F46E5] py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4F46E5] transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                      >
                        Submit Application
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {showConfirmation && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                <div className="w-full max-w-md bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl shadow-xl p-6 transform transition-all animate-slideIn text-center">
                  <div className="text-white mb-4">
                    <i className="fas fa-check-circle text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
                  <p className="text-white/80 mb-6">Thank you for your interest in partnering with us. We'll review your application and get back to you soon.</p>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="w-full bg-white text-[#4F46E5] py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors focus:ring-2 focus:ring-white transform hover:scale-[1.02] active:scale-[0.98] duration-200"
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
    </div>
  );
}

export default MainComponent;
