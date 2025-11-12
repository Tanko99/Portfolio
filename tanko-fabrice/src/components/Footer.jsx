import { Facebook, Linkedin,  Github } from "lucide-react";
import logo from '../assets/logo.png';
import background from '../assets/bg-pic.jpg';
import icon from '../assets/x-icon.png';


function Footer(){
    return (
        <footer style={{backgroundImage: `url(${background})`}} className="bg-cover
        bg-center bg-no-repeat  mt-16 px-6 py-6 font-poppins text-gray-200 flex flex-col md:flex-row
        md:items-center  md:justify-between md:gap-0 gap-4" >
            <img src={logo} alt="my logo"  className="w-16 h-16 rounded-full" />
            <p className="text-sm  md:text-xl sm:text-lg text-center md:text-right">
                &copy; {new Date().getFullYear()} <em>Tanko Fabrice. All rights reserved.</em>
             </p>
            <div className="flex justify-center md:justify-start / md:justify-end text-gray-400  gap-4 md:gap-6">
                <a href="https://www.facebook.com/share/17gMMJNHhP/" target="_blank" rel="noopener nooreferrer">
                    <Facebook size={36}  />
                </a>
                <a href="https://x.com/tanko_fabrice" target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt="x(twitter) icon" className="w-10 h-10 rounded-full" />
                </a>
                <a href="https://github.com/Tanko99/" target="_blank" rel="noopener noreferrer">
                    <Github size={35}  />
                </a>
                <a href="https://www.linkedin.com/in/tanko-fabrice-042735253/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  />
                </a>
            </div>
        </footer>
    );
}

export default Footer;