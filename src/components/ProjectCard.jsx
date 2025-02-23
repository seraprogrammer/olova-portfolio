export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-gray-800/40 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="aspect-video group-hover:scale-105 transition-transform duration-500">
            <img
              src={project.image}
              alt={`${project.title} Interface`}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-4">
            {/* Feature List */}
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <span className="text-blue-400 mt-1 group-hover/item:text-blue-300 transition-colors">
                    →
                  </span>
                  <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full 
                    hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
