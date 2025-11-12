import { Link } from "react-router-dom"
import { Mail, Download } from "lucide-react"
import picture from '../assets/my-pic.jpg';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home(){
    
    return(
        <div
          className="font-poppins, text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-200
           w-full min-h-screen ">
            <Navbar />
               <div className=" gap-x-8 flex flex-col md:flex-row items-center justify-center  items-center w-full">
                   <div className="max-w-md w-60 md:w-1/2 h-auto mx-2 mt-8">
                        <img src={picture} alt="portfolio illustrator" className="rounded-full" />
                    </div>
                    <div className="w-60 md:w-1/2">
                        <h1 className="md:text-5xl lg:text-6xl sm:text-3xl text-2xl  mt-6 font-bold md:text-left">Bringing Ideas to Life Through Code and Design.</h1>
                         <p className="md:text-2xl sm:text-xl text-lg mt-8 mb-8 font-semibold">Hi, I'm <strong>Tanko Fabrice Ngala</strong> a frontend web developer and a cyber security enthusiast, passionate
                        about crafting interactive websites and seamless digital experiences!
                </p>
                <Link to="/projects" className="flex items-center text-lg font-bold px-4 py-2 mb-6 rounded-xl bg-gray-900 text-gray-200 dark:bg-gray-300 dark:text-gray-900 transition "> View my work</Link>
                <Link to="/contact" className="flex items-center text-lg mb-6  font-bold  gap-2 px-4 py-2 rounded-xl bg-gray-900 text-gray-200 dark:bg-gray-300 dark:text-gray-900">
                <Mail className="w-8 h-8"/>
                Contact Me
                </Link>
                <a href="/Tanko_Fabrice_resume.pdf" download="Tanko_Fabrice_resume.pdf"
                className="flex items-cemter gap-2 px-2 py-2 rounded-xl bg-gray-900 text-gray-200 dark:bg-gray-300 dark:text-gray-900  font-semibold">
                   <Download className="w-8 h-8" />  Download resume
                </a>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Home;