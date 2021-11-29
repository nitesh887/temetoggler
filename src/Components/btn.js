import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'

const Btn = () => {
    const [toggle, setToggle] = useContext(ThemeContext)
    return (
        <div>
            <button onClick={()=> {setToggle(toggle==="light"?"dark":"light")}}> Click</button>
        </div>
    )
}

export default Btn
