import Navbar from '../Components/Navbar'
import Section1 from '../Main/Sections/Section1'
import './Main.css'
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import mockup from "../assets/mockup.png"
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
function Fullpage(props) {
    

    return (
        <>
            <Navbar/>
            <Section1/>  
            <Section2/> 
            <section id="section4" className="section4" >
                <div className="mockup">
                    <div className="sectionTitle">PROTOTYPE</div>
                    <img alt="" src={mockup} width="100%"/>
                </div>
            </section>
            <section className="section5">
                <p className="descriptionPrototype descriptionPrototypeP1"> Portfolio totalement développé par TOUNSI Rania </p>
                <p className="descriptionPrototype"> <b>Frontend: </b>React <FaReact/>, Css <IoLogoCss3/> et React-icons</p>
                <p className="descriptionPrototype">  <b>Prototype:</b> Figma <CgFigma/> et Photoshop <SiAdobephotoshop/>   </p>
            </section>
            <Section3/>
        </>
    )
}
export default Fullpage;