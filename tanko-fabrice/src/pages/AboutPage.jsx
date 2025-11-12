

function AboutMe(){
    return (
        <div 
         className="bg-white dark:text-gray-200 dark:bg-gray-900 text-gray-900 minh-h-screen
         iext-center flex flex-col px-6 md:px-20 py-10  justify-center font-poppins">  
        <h1 className="md:text-5xl lg:text-7xl sm:text-3xl text-xl font-bold mb-10 text-center">About Me</h1>
        <p className=" lg:text-4xl md:text-xl sm:text-lg mb-6 font-semibold"><q>Looking for a skilled software engineer to turn your 
            ideas into a responsive and intuitive website?
            </q></p>
        <p className="md:text-xl sm:text-lg mb-6 ">Hello, I’m <strong>Tanko Fabrice Ngala</strong>, a passionate Front-End
         Web Developer with a strong foundation in modern web technologies and
          a growing interest in cyber security.

         I recently graduated from the ALX Front-End Web Development program, where I 
         mastered core technologies including HTML, CSS, JavaScript, and React. My 
        focus is on building clean, accessible, and responsive user interfaces that
         offer exceptional user experiences.
         </p>

       <p className=" md:text-xl sm:text-lg mb-8" > Currently, I’m expanding my skill set by learning Next.js and TypeScript to build scalable, production-ready websites and web apps. 

        I’m driven by creativity and problem-solving 
         I love transforming ideas into functional digital experiences and continuously improving through hands-on projects.

         When I’m not coding, I enjoy exploring new design trends, learning about technology innovation, and sharing knowledge with other developers.
       </p>
       <h2 className="md:text-2xl sm:text-xl text-lg font-bold mb-2">Tech Stack</h2>
       <ul className="list-disc list-inside space-y-2 md:text-xl text-lg mb-6">
        <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, TypeScript</li>
        <li>Tools & Platforms: Git, GitHub, VS Code, Netlify, Vercel</li>
        <li>Design & Workflow: Figma, Responsive Web Design, Accessibility</li>
       </ul>
       <h3 className="md:text-2xl sm:text-xl mb-2 font-bold">Current focus</h3>
       <ul className="list-disc list-inside space-y-2 md:text-xl text-lg mb-6">
        <li>Mastering Next.js for dynamic web applications</li>
        <li>Expanding my open-source and community contributions</li>
       </ul>
    </div>
    );
}


export default AboutMe;
