"use client";
import React, { useState } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
      <nav
        className={`backdrop-blur-lg ${
          isDark ? "bg-gray-800/80" : "bg-white/80"
        } sticky top-0 z-50 border-b ${
          isDark ? "border-gray-700" : "border-gray-200"
        } shadow-sm`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <i className="fas fa-brain text-[#4F46E5] text-3xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-transparent bg-clip-text">
                Minds Matter
              </span>
            </div>
            <div className="flex items-center space-x-8">
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
                onClick={() => setActiveSection("help")}
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
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />

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
                  <span>Add to Discord</span>
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
