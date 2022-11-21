
import "./App.css";
import { useState, useEffect} from 'react';


function App() {
  const [theme, setTheme] = useState ("light");

  useEffect (() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  },[theme]);
  const HandleThemeSwitch = () => {
    setTheme (theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
      
      <button className='bg-green-200 px-4 rounded-3xl' onClick={HandleThemeSwitch}>
        Dark Mode
        </button> 
    </div>
    
  );
}

export default App;
