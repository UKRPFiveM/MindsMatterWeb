"use client";
import React, { useState } from "react";

function StaffPage() {
  const [showBanner, setShowBanner] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("staff");
  
  // Staff members data
  const staffMembers = [
    {
      name: "Jack",
      discordName: "jackfm16",
      role: "Owner",
      avatar: "/Jayown.png", 
      description: "Founder and owner of Minds Matter UK"
    },
    {
      name: "Luppy",
      discordName: "luppy025",
      role: "Partnership Manager",
      avatar: "/luppu.png",
      description: "Manages partnerships and community relations"
    },
    {
      name: "Daniel",
      discordName: "beeplayzz_",
      role: "Partnership Manager",
      avatar: "/beepart.png",
      description: "Handles outreach and new partnerships"
    },
    {
      name: "Connor",
      discordName: "cxznnoro",
      role: "Partnership Manager",
      avatar: "/connor.png",
      description: "Handles outreach and new partnerships"
    },
    {
      name: "Charlie",
      discordName: "charlie_298",
      role: "Support Team",
      avatar: "/charlie.png",
      description: "Provides community support and assistance"
    },
    {
      name: "Solar",
      discordName: ".sol\_69.",
      role: "Support Team",
      avatar: "/sol.png",
      description: "Provides community support and assistance"
    }
  ];

  return (
    <div
      className={`min-h-screen font-poppins ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-white to-gray-100 text-gray-800"
      }`}
    >
      {/* Recruitment Banner */}
      {showBanner && (
        <div className="w-full bg-[#4F46E5] text-white py-4 px-0 relative">
          <div className="w-full px-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fas fa-bullhorn mr-4 text-2xl animate-pulse"></i>
              <p className="font-bold text-lg">
                We are recruiting staff in our Discord!<a href="https://discord.gg/w44ttXFrGK" className="underline font-bold hover:text-white/80 transition-colors ml-1">Join now</a> to apply!
              </p>
            </div>
            <button 
              onClick={() => setShowBanner(false)} 
              className="text-white/80 hover:text-white transition-colors text-xl"
              aria-label="Close banner"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
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
                    <a
                      href="/"
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "home" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Home
                    </a>
                    <a
                      href="/#commands"
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "commands" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Commands
                    </a>
                    <a
                      href="/#help"
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "help" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Get Help
                    </a>
                    <a
                      href="/#partners"
                      className={`block w-full text-left px-4 py-2 text-sm ${activeSection === "partners" ? "text-[#4F46E5] font-medium" : isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Partners
                    </a>
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
              <a
                href="/"
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === "home"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Home
              </a>
              <a
                href="/#commands"
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "commands"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Commands
              </a>
              <a
                href="/#help"
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "help"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Get Help
              </a>
              <a
                href="/#partners"
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "partners"
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : isDark
                    ? "hover:text-[#4F46E5] text-white"
                    : "hover:text-[#4F46E5]"
                }`}
              >
                Partners
              </a>
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
                <a
                  href="/"
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "home"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/#commands"
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "commands"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Commands
                </a>
                <a
                  href="/#help"
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "help"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Get Help
                </a>
                <a
                  href="/#partners"
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === "partners"
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : isDark
                      ? "hover:text-[#4F46E5] text-white"
                      : "hover:text-[#4F46E5]"
                  }`}
                >
                  Partners
                </a>
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
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Staff Team
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
            Meet the dedicated team behind Minds Matter UK. Our staff members work tirelessly on moderation and community engagement to support our Discord bot's mental health resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {staffMembers.map((member, index) => (
              <div 
                key={index}
                className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl overflow-hidden shadow-lg border ${isDark ? "border-gray-700" : "border-gray-200"} transition-all hover:shadow-xl hover:transform hover:scale-105 p-4 md:p-6`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-4 border-[#4F46E5]">
                    <img 
                      src={member.avatar} 
                      alt={`${member.name}'s avatar`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn.discordapp.com/embed/avatars/0.png";
                      }}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm md:text-base">{member.discordName}</p>
                  <p className="text-[#4F46E5] font-medium mb-2 md:mb-3 text-sm md:text-base">{member.role}</p>
                  <p className="text-sm md:text-base">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default StaffPage;