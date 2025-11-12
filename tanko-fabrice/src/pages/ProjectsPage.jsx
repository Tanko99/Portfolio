import { useState, useEffect } from "react";
import data from '../data/projects.json';
import ProjectCard from "../components/ProjectCard";

function ProjectsPage(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(data);
    }, []);

    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 dark:text-gray-400  font-poppins min-h-screen text-gray-900">
           <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-xl my-6 
            font-bold text-center">My Projects</h1>
           <div className="
            grid grid-col md:grid-cols-3 sm:grid-cols-2 px-6 py-12">
            
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </div>
    );
}

export default ProjectsPage;