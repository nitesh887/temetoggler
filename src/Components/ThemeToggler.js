import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <div onClick={()=> {setTheme(theme==="light"?"dark":"light")}}>
            <span>
                {theme === "light" ? "dark" : "light"}

            </span>

        </div>
    )
}

export default ThemeToggler
