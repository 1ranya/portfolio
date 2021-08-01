import './Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navbar(props) {
    const [change, setChange] = useState(false)
    return (
        <div >
            <div className="Navbar">
                <a href="#section1" className={change?"changed":""} onClick={()=>setChange(true)}>Qui suis je?</a>
                <a href="#section2" >Projects</a>
                <a href="#section3" >Informations</a>
            </div>
        </div>
    )
}
export default Navbar;