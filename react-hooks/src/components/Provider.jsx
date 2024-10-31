import React, { useState } from 'react'

function Provider ({{children}}){
    const[isDarkTheme, setIsDarkTheme] = useState(false);

    // Toggle theme function 
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

  return (
    <>
        <h1> Theme Provider </h1>
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
  );
}

export default [ThemeContext, Provider]