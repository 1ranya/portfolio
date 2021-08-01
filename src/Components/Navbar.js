import './Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navbar(props) {
    const [change, setChange] = useState(false)
    const changeNavbarStyle = (id) => {
        console.log(document.getElementById(id))
        const element = document.getElementById(id)
        element.style.borderBottom = "#f6bd60 solid"
        element.style.color = "aliceblue"
        // if(id){
        //     document.getElementById(id).style.borderBottom = "#f6bd60 solid"
        //     document.getElementById(id).style.color = "#ffffff"
        // }
    }
    return (
        <div >
            <div className="Navbar">
                <a id="1" href="#section1" onClick={()=>changeNavbarStyle("1")}>Qui suis je?</a>
                <a id="2" href="#section2" onClick={()=>changeNavbarStyle("2")}>Projects</a>
                <a id="3" href="#section3" onClick={()=>changeNavbarStyle("3")}>Informations</a>
            </div>
        </div>
    )
}
export default Navbar;