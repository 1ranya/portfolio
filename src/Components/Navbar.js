import './Components.css'
import $ from 'jquery'
function Navbar(props) {
    const changeNavbarStyle = (e) => {
        console.log(e)
        $(".Navbar a").css("color", "#f6bd60")
        // $(".Navbar a").css("border-bottom", "")
        $(e.target).css("color", "#ffffff")
        // $(e.target).css("border-bottom", "1px solid")
    }
    
    return (
        <div>
            <div className="Navbar">
                <a id="1" href="#section1" onClick={(e)=>changeNavbarStyle(e)}>Qui suis je?</a>
                <a id="1" href="#section2" onClick={(e)=>changeNavbarStyle(e)}>Projects</a>
                <a id="2" href="#section4" onClick={(e)=>changeNavbarStyle(e)}>Prototype</a>
                <a id="3" href="#section3" onClick={(e)=>changeNavbarStyle(e)}>Informations</a>
            </div>
        </div>
    )
}
export default Navbar;