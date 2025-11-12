import { useState } from "react";
import { ArrowBigDown } from "lucide-react";

const ProjectCard = ({ thumbnail, title, description, 
    techStack, demoLink, repoLink }) => {
        const [isExpanded, setIsExpanded] =useState(false);
        const toggleExpand = () => setIsExpanded(!isExpanded);

        return (
            <div className="my-6 overflow-hidden flex flex-col font-poppins items-center justify-center 
            transition-transform hover:scale-105 duration-300">
                <img src={thumbnail} alt={title} className="w-full h-90 object-cover" />
                <div>
                    <h3 className="md:text-2xl
                    text-center text-xl font-bold">{title}</h3>
                    {isExpanded && (
                        <>
                           <p className="
                           md:text-xl text-lg font-medium text-center mb-2" >{description}</p>
                           <div className="flex flex-wrap gap-2 mt-4">
                            {techStack?.map((tech, index) =>(
                                <span key={index} className="">
                                    {tech}
                                </span>
                           ))}
                        </div>
                           
                           <div className="flex flex-col p-4">
                            <a href={demoLink} target="_blank" className="
                            text-lg md:text-xl text-blue-600 text-center hover:underline">
                                Visit site
                            </a>
                            <a href={repoLink} target="_blank" className="
                            text-lg md:text-xl text-blue-600 hover:underline text-center">
                                View repository
                            </a>
                           </div>
                        </>
                    )}
                </div>
                <button onClick={toggleExpand} className=" 
                px-2 py-2 bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 rounded-xl px-4 py-2 flex my-4">
                    {isExpanded ? "Show less"  : 'Read more' } <ArrowBigDown  className="w-5 h-5" />
                </button>
            </div>
        );
    };

    export default ProjectCard;