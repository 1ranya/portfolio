import Navbar from '../Components/Navbar'
import Section1 from '../Main/Sections/Section1'
import './Main.css'
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import mockup from "../assets/mockup.png";
import typoAndColors from "../assets/typo.svg";
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
                    <div id="mockup__typo">
                        <img alt="" src={mockup} width="100%"/>
                        <div className="sectionTitle">IDENTITE VISUELLE</div>
                        <img alt="" src={typoAndColors} width="100%"/>
                    </div>
                </div>
            </section>
            <section className="section5">
                <div id="stack">
                    <p className="descriptionPrototype descriptionPrototypeP1"> Portfolio intégralement développé from scratch par TOUNSI Rania </p>
                    <p className="descriptionPrototype"> <b>Frontend: </b>React, Css 3 et React-icons</p>
                    <p className="descriptionPrototype">  <b>Prototype:</b> Figma et Photoshop </p>
                </div>
            </section>
            <Section3/>
        </>
    )
}
export default Fullpage;