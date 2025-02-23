import { createSignal } from "olova";
import Toastify from "./toastify.jsx";
import { showToast, ToastTypes, ToastPosition } from "./toastify";

// Success Component
const SuccessMessage = () => (
  <div className="bg-[#0F172A] p-8 rounded-2xl text-center">
    <div className="mb-6">
      <svg
        className="w-16 h-16 mx-auto text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">
      Message Sent Successfully!
    </h3>
    <p className="text-gray-400 mb-6">
      Thank you for reaching out. I'll get back to you soon.
    </p>
    <div className="space-y-4">
      <p className="text-gray-400">Follow me on:</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/yourusername"
          className="text-gray-400 hover:text-[#60A5FA] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="text-gray-400 hover:text-[#60A5FA] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="text-gray-400 hover:text-[#60A5FA] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default function Contact() {
  const [isLoading, setIsLoading] = createSignal(false);
  const [submitted, setSubmitted] = createSignal(false);
  const [errors, setErrors] = createSignal({});

  const validateForm = (formData) => {
    const newErrors = {};
    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");

    // Name validation
    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      showToast({
        message: "Name must be at least 2 characters long",
        type: ToastTypes.ERROR,
        position: ToastPosition.TOP_LEFT,
        duration: 3000,
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      showToast({
        message: "Please enter a valid email address",
        type: ToastTypes.ERROR,
        position: ToastPosition.TOP_LEFT,
        duration: 3000,
      });
    }

    // Message validation
    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      showToast({
        message: "Message must be at least 10 characters long",
        type: ToastTypes.ERROR,
        position: ToastPosition.TOP_LEFT,
        duration: 3000,
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Validate form before submission
    if (!validateForm(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const data = Object.fromEntries(formData);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5b73bc63-7ad1-4982-879f-e4f735602a39",
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        showToast({
          message: "Message sent successfully!",
          type: ToastTypes.SUCCESS,
          position: ToastPosition.TOP_LEFT,
          duration: 3000,
        });
      } else {
        setErrors({ submit: result.message || "Failed to submit form" });
        showToast({
          message: result.message || "Failed to submit form",
          type: ToastTypes.ERROR,
          position: ToastPosition.TOP_LEFT,
          duration: 3000,
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrors({ submit: "Failed to submit form. Please try again later." });
      showToast({
        message: "Failed to submit form. Please try again later.",
        type: ToastTypes.ERROR,
        position: ToastPosition.TOP_LEFT,
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1
          className="inline-block text-2xl font-extrabold text-transparent mb-12 px-10 py-3 
            relative bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
            transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
            before:content-[''] before:absolute before:top-0 before:left-1/2 
            before:-translate-x-1/2 before:h-[3px] before:w-[160px]
            before:bg-gradient-to-r before:from-transparent before:via-pink-500 before:to-transparent
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 
            after:-translate-x-1/2 after:h-[3px] after:w-[160px]
            after:bg-gradient-to-r after:from-transparent after:via-pink-500 after:to-transparent
            hover:before:via-red-500 hover:after:via-red-500
            hover:before:w-[180px] hover:after:w-[180px]
            before:transition-all before:duration-500
            after:transition-all after:duration-500
            animate-bounce"
        >
          Contact Me
        </h1>
      </div>
      <section className="w-full bg-[#000000] flex items-center justify-center px-10 py-20">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#60A5FA]">
                Get in Touch
              </h2>
              <p className="text-gray-400 mt-2">
                Have a question or want to work together? Drop us a message!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#60A5FA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">olovajs@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#60A5FA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">Laxmipure, Natore 6400</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form or Success Message */}
          {!submitted() ? (
            <div className="bg-[#0F172A] p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`w-full bg-[#1E293B] text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors().name ? "border-2 border-red-500" : ""
                    }`}
                  />
                  {errors().name && (
                    <p className="text-red-500 text-sm mt-1">{errors().name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`w-full bg-[#1E293B] text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors().email ? "border-2 border-red-500" : ""
                    }`}
                  />
                  {errors().email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors().email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className={`w-full bg-[#1E293B] text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors().message ? "border-2 border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors().message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors().message}
                    </p>
                  )}
                </div>

                {errors().submit && (
                  <div className="text-red-500 bg-red-500/10 px-4 py-2 rounded">
                    {errors().submit}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading()}
                  className="w-full bg-gradient-to-r from-[#60A5FA] to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                >
                  {isLoading() ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          ) : (
            <SuccessMessage />
          )}
        </div>
      </section>
    </>
  );
}
