import './Components.css'

function Navbar(props) {
    const changeNavbarStyle = (id) => {
        console.log(document.getElementById(id))
        const element = document.getElementById(id)
        element.style.borderBottom = "#f6bd60 solid"
        element.style.color = "aliceblue"
    }
    return (
        <div>
            <div className="Navbar">
                <a id="1" href="#section1" onClick={()=>changeNavbarStyle("1")}>Qui suis je?</a>
                <a id="2" href="#section2" onClick={()=>changeNavbarStyle("2")}>Projects</a>
                <a id="4" href="#section4" onClick={()=>changeNavbarStyle("4")}>Prototype</a>
                <a id="3" href="#section3" onClick={()=>changeNavbarStyle("3")}>Informations</a>
            </div>
        </div>
    )
}
export default Navbar;