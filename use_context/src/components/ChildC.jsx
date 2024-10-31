import React, {useContext} from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

    function themeChange(){
        if(theme === 'light')
          setTheme('dark');
        else
          setTheme('light');   
    }
  return (
    <div>
        <button onClick={themeChange}>Change Theme</button>
        {theme}
    </div>
  )
}

export default ChildC