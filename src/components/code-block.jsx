export default function CodeBlock() {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>

      {/* Main Code Block */}
      <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-2xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400 truncate">
            developer.js
          </span>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-6 overflow-x-auto">
          <pre className="text-sm whitespace-pre-wrap break-words md:whitespace-pre">
            <code className="text-gray-300">
              <span className="text-pink-500">const</span>{" "}
              <span className="text-blue-400">profile</span> = {"{"}
              {"\n  "}name:{" "}
              <span className="text-green-400">'Nazmul Hossain'</span>,{"\n  "}
              title:{" "}
              <span className="text-green-400">
                'Full-Stack Developer | Cloud Enthusiast | Problem Solver'
              </span>
              ,{"\n  "}skills: [{"\n    "}
              <span className="text-green-400">'React'</span>,{" "}
              <span className="text-green-400">'Next.js'</span>,{" "}
              <span className="text-green-400">'TypeScript'</span>,{"\n    "}
              <span className="text-green-400">'Node.js'</span>,{" "}
              <span className="text-green-400">'MongoDB'</span>,{" "}
              <span className="text-green-400">'PostgreSQL'</span>,{"\n    "}
              <span className="text-green-400">'AWS'</span>,{" "}
              <span className="text-green-400">'Docker'</span>
              {"\n  "}],
              {"\n  "}hardWorker: <span className="text-orange-400">true</span>,
              {"\n  "}quickLearner:{" "}
              <span className="text-orange-400">true</span>,{"\n  "}
              problemSolver: <span className="text-orange-400">true</span>,
              {"\n  "}yearsOfExperience:{" "}
              <span className="text-purple-400">4</span>,{"\n  "}
              <span className="text-cyan-400">hireable</span>:{" "}
              <span className="text-pink-500">function</span>() {"{"}
              {"\n    "}
              <span className="text-pink-500">return</span> ({"\n      "}
              <span className="text-cyan-400">this</span>.hardWorker &&
              {"\n      "}
              <span className="text-cyan-400">this</span>.problemSolver &&
              {"\n      "}
              <span className="text-cyan-400">this</span>.skills.length {">="}{" "}
              <span className="text-purple-400">5</span> &&
              {"\n      "}
              <span className="text-cyan-400">this</span>.yearsOfExperience{" "}
              {">="} <span className="text-purple-400">3</span>
              {"\n    "});
              {"\n  "}
              {"}"}
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
