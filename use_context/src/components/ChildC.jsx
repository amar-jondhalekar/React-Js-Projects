import React, {useContext} from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    function themeChange(){
        
    }
  return (
    <div>
        <button onClick={themeChange}>Change Theme</button>
        {theme}
    </div>
  )
}

export default ChildC