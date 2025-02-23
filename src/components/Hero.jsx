import { createSignal } from "olova";
import Header from "./Header";
import CodeBlock from "./code-block";
import TypingEffect from "./TypingEffect.jsx";

export default function App() {
  const titles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const [data, setData] = createSignal({
    name: "Nazmul Hossain",
    profession: "Full-Stack Developer",
    description: "Crafting Digital Experiences.",
  });

  return (
    <div className="bg-black overflow-hidden px-10 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-full border-[0.5px] border-white/5"
          />
        ))}
      </div>

      {/* Dot Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vh] grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] gap-8">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white/10 rounded-full" />
          ))}
        </div>
      </div>

      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 min-h-[calc(80vh-5rem)] flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-0 lg:pt-20">
          {/* Left Side - Hero Section */}
          <div className="space-y-8 lg:space-y-12 relative z-10">
            {/* Gradient Orbs */}
            <div className="absolute -top-[25%] -left-[50%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-[25%] -right-[25%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Content */}
            <div className="relative space-y-6">
              <h2 className="text-white/80 text-xl sm:text-2xl font-light tracking-wide animate-fade-in-up">
                Hello 👋🏼,
              </h2>
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white animate-fade-in-up animation-delay-150">
                  I'm {() => data().name},
                </h1>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-fade-in-up animation-delay-300">
                  <span className="text-white/90">
                    <TypingEffect words={titles} speed={1330} />
                  </span>
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-fade-in-up animation-delay-450">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {() => data().description}
                  </span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative flex items-center gap-6 animate-fade-in-up animation-delay-600">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Portfolio"
              >
                <div className="w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Code Block */}
          <div className="relative z-0 animate-fade-in-up animation-delay-750">
            {/* Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative">
              <CodeBlock />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
