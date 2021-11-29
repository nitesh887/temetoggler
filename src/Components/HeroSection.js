import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'
import Btn from './btn'

const HeroSection = () => {
 const theme= useContext(ThemeContext)[0]
 const currentTheme = AppTheme[theme]
    return (
        <div
        
        style = {{

          padding : "1rem",
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
          textAlign:"center"

        }}
        
        >
        



<h1>Theme Toggler</h1> 
           <p>This is a nice pragraph</p>

           <Btn/>
           
</div>

        
    )
}

export default HeroSection
