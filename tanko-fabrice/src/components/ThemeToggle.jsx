import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle(){
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme] );

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? (<Moon size={18} />) : (<Sun size={18} />)}
        </button>
    );
}

export default ThemeToggle;