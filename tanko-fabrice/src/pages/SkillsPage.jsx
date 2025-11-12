import { Code2, Settings, Palette } from "lucide-react";

function Skills() {
  return (
    <div
      className="bg-white min-h-screen text-gray-900 dark:bg-gray-900  dark:text-gray-200 font-poppins py-16 px-6 md:px-12"
    >
      <h2 className="text-xl m:text-3xl md:text-5xl lg:text-7xl  font-bold text-center  mb-10">
        Skills & Tools
      </h2>

      <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-10 mx-auto">
        {/* Front-End Development */}
        <div className="bg-gray-900 dark:bg-gray-700 dark:text-gray-900  rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-gray-200  w-15 h-15" />
            <h3 className=" font-semibold md:text-3xl sm:text-xl text-lg text-gray-200">
              Front-End Development
            </h3>
          </div>
          <ul className="space-y-2 list-disc list-inside text-lg text-gray-200">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>TypeScript, React.js, Next.js</li>
            <li>Tailwind CSS, Responsive Design</li>
            <li>API Integration (REST, Axios)</li>
            <li>Data handling(tanstack query, SWR)</li>
          </ul>
        </div>

        {/* Tools & Workflow */}
        <div className="bg-gray-900 dark:bg-gray-700 dark:text-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-white w-15 h-15" />
            <h3 className="md:text-3xl sm:text-2xl  font-semibold text-xl text-gray-200">
              Tools & Workflow
            </h3>
          </div>
          <ul className="space-y-2 list-disc list-inside text-lg text-gray-300">
            <li>Git & GitHub</li>
            <li>VS Code, Node.js, npm</li>
            <li>Figma, Chrome DevTools</li>
            <li>ESLint, Prettier</li>
            <li>Vercel and Netlify</li>
          </ul>
        </div>
      </div>

      <p className=" md:text-xl sm:text-lg text-base text-center dark:text-gray-200 mt-12 text-sm">
        ⚡ Continuously expanding my knowledge in modern web technologies.
      </p>
    </div>
  );
}

export default Skills;