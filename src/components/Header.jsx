import { createSignal, createEffect } from "olova";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [activeSection, setActiveSection] = createSignal(
    window.location.hash || "#home"
  );
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);

  // Update active section immediately when component loads
  createEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    // Add event listener
    window.addEventListener("hashchange", handleHashChange);

    // Initial call
    handleHashChange();

    // Cleanup
    return () => window.removeEventListener("hashchange", handleHashChange);
  });

  // Close dropdown when clicking outside
  createEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown-menu");
      const button = document.getElementById("dropdown-button");
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <div className="w-fit">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 flex items-center h-14 shadow-lg shadow-black/5">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <a href="#" className="text-white text-2xl font-bold">
              <img src="https://olova.js.org/olova.png" width="30" alt="logo" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen())}
              className="text-white/80 hover:text-white p-2 cursor-pointer transition-colors"
            >
              {isMenuOpen() ? "X" : svg}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <nav className="flex space-x-2">
              {() => (
                <>
                  <a
                    href="#home"
                    className={`text-white/90 hover:text-white px-4 py-1.5 rounded-full text-sm transition-colors ${
                      activeSection() === "#home" ? "bg-white/10" : ""
                    }`}
                    onClick={() => setActiveSection("#home")}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className={`text-white/90 hover:text-white px-4 py-1.5 rounded-full text-sm transition-colors ${
                      activeSection() === "#about" ? "bg-white/10" : ""
                    }`}
                    onClick={() => setActiveSection("#about")}
                  >
                    About
                  </a>
                  <a
                    href="#work"
                    className={`text-white/90 hover:text-white px-4 py-1.5 rounded-full text-sm transition-colors ${
                      activeSection() === "#work" ? "bg-white/10" : ""
                    }`}
                    onClick={() => setActiveSection("#work")}
                  >
                    Work
                  </a>
                  <a
                    href="#contact"
                    className={`text-white/90 hover:text-white px-4 py-1.5 rounded-full text-sm transition-colors ${
                      activeSection() === "#contact" ? "bg-white/10" : ""
                    }`}
                    onClick={() => setActiveSection("#contact")}
                  >
                    Contact
                  </a>
                  <a
                    href="https://www.facebook.com/codervai"
                    className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    Book a Call
                  </a>

                  {/* Dropdown Button moved here after "Book a Call" */}
                  <div className="relative">
                    <button
                      id="dropdown-button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen())}
                      className="text-white/80 hover:text-white px-4 py-1.5 rounded-full text-sm transition-colors flex items-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          d="M8 2a4 4 0 0 1 4 4v12a4 4 0 1 1-4-4h12a4 4 0 1 1-4 4V6a4 4 0 0 1 4-4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {() =>
                      isDropdownOpen() && (
                        <div
                          id="dropdown-menu"
                          className="absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg shadow-black/20 z-10 overflow-hidden"
                        >
                          <div className="py-1">
                            <a
                              href="https://olova.js.org/"
                              target="_blank"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4M12 8h.01" />
                              </svg>
                              <div>
                                <div className="font-medium">Olova JS</div>
                                <div className="text-xs text-white/60">
                                  Modern JavaScript Framework
                                </div>
                              </div>
                            </a>
                            <a
                              href="https://github.com/seraprogrammer"
                              target="_blank"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                              </svg>
                              <div>
                                <div className="font-medium">
                                  Sera Programmer
                                </div>
                                <div className="text-xs text-white/60">
                                  Development Resources
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {() =>
          isMenuOpen() && (
            <div className="md:hidden mt-3">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl py-2 shadow-lg shadow-black/5">
                <nav className="flex flex-col">
                  <a
                    href="#home"
                    className="text-white/90 hover:text-white px-4 py-2 text-sm transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#work"
                    className="text-white/90 hover:text-white px-4 py-2 text-sm transition-colors"
                  >
                    Work
                  </a>
                  <a
                    href="#about"
                    className="text-white/90 hover:text-white px-4 py-2 text-sm transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="https://www.facebook.com/codervai"
                    className="text-white px-4 py-2 text-sm bg-white/10 mx-4 rounded-full text-center mt-2 hover:bg-white/20 transition-colors"
                  >
                    Book a Call
                  </a>
                </nav>
              </div>
            </div>
          )
        }
      </div>
    </header>
  );
}
