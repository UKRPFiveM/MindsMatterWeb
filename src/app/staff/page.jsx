"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

function StaffPage() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("staff");
  const router = useRouter();
  

  useEffect(() => {

    const timer = setTimeout(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode !== null) {
        setIsDark(storedDarkMode === 'true');
      }
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);
  

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };
  

  const navigateToSection = (section) => {

    localStorage.setItem('lastSection', section);
    

    document.body.style.opacity = '0.5';
    document.body.style.transition = 'opacity 150ms';
    
    setTimeout(() => {
      router.push(`/?section=${section}`);
    }, 150);
  };
  

  const staffMembers = [
    {
      name: "Jack",
      discordName: "jackfm16",
      role: "Owner",
      avatar: "/Jayown.png", 
      description: "Founder and owner of Minds Matter UK"
    },
    {
      name: "Daniel",
      discordName: "beeplayzz_",
      role: "Management Team",
      avatar: "/beepart.png",
      description: "Handles moderation and community management"
    },
    {
      name: "Luppy",
      discordName: "luppy025",
      role: "Management Team",
      avatar: "/luppu.png",
      description: "Handles community management"
    },
    {
      name: "Connor",
      discordName: "cxznnoro",
      role: "Partnership Manager",
      avatar: "/connor.png",
      description: "Handles outreach and new partnerships"
    },
    {
      name: "Tubbzz",
      discordName: "del_sys32",
      role: "Support Team",
      avatar: "/tubzz.png",
      description: "Provides community support and assistance"
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


  useEffect(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 300ms';
    
    return () => {
      document.body.style.opacity = '1';
      document.body.style.transition = '';
    };
  }, []);

  return (
    <div className={`min-h-screen font-poppins ${
      isDark ? "bg-gray-900 text-white" : "bg-gradient-to-b from-white to-gray-100 text-gray-800"
    }`}>
      {/* Navigation */}
      <nav className={`backdrop-blur-lg ${
        isDark ? "bg-gray-800/80" : "bg-white/80"
      } sticky top-0 z-50 border-b ${
        isDark ? "border-gray-700" : "border-gray-200"
      } shadow-sm`}>
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
                  <span className="mr-1">Staff</span>
                  <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm`} />
                </button>
                
                {isDropdownOpen && (
                  <div className={`absolute top-full right-0 mt-1 w-48 rounded-md shadow-lg py-1 z-50 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <button
                      onClick={() => navigateToSection("home")}
                      className={`block w-full text-left px-4 py-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => navigateToSection("commands")}
                      className={`block w-full text-left px-4 py-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Commands
                    </button>
                    <button
                      onClick={() => navigateToSection("help")}
                      className={`block w-full text-left px-4 py-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Get Help
                    </button>
                    <button
                      onClick={() => navigateToSection("partners")}
                      className={`block w-full text-left px-4 py-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}
                    >
                      Partners
                    </button>
                    <a
                      href="/staff"
                      className={`block w-full text-left px-4 py-2 text-sm text-[#4F46E5] font-medium`}
                    >
                      Staff
                    </a>
                  </div>
                )}
              </div>
              
              {/* Removed dark mode button and hamburger menu button */}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigateToSection("home")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isDark ? "hover:text-[#4F46E5] text-white" : "hover:text-[#4F46E5]"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateToSection("commands")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isDark ? "hover:text-[#4F46E5] text-white" : "hover:text-[#4F46E5]"
                }`}
              >
                Commands
              </button>
              <button
                onClick={() => navigateToSection("help")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isDark ? "hover:text-[#4F46E5] text-white" : "hover:text-[#4F46E5]"
                }`}
              >
                Get Help
              </button>
              <a
                onClick={() => navigateToSection("partners")}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  isDark ? "hover:text-[#4F46E5] text-white" : "hover:text-[#4F46E5]"
                }`}
              >
                Partners
              </a>
              <a
                href="/staff"
                className={`px-4 py-2 rounded-lg transition-all bg-[#4F46E5]/10 text-[#4F46E5]`}
              >
                Staff
              </a>
              {/* Removed dark mode toggle button */}
            </div>
          </div>
          
          {/* Removed Mobile Menu that appears when hamburger is clicked */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text mb-4">
            Meet Our Team
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            The dedicated individuals who make Minds Matter possible. Our team is committed to supporting mental health awareness and providing resources to those in need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member) => (
            <div 
              key={member.name}
              className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl shadow-md overflow-hidden border ${
                isDark ? "border-gray-700" : "border-gray-200"
              } hover:shadow-lg transition-all`}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#4F46E5]/30">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-avatar.png";
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#4F46E5] font-medium mb-2">{member.role}</p>
                <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Discord: {member.discordName}
                </p>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className={`${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } mt-20 py-8 border-t`}>
        <div className="container mx-auto px-4 text-center">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © 2025 Minds Matter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default StaffPage;