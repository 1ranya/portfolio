import Navbar from '../Components/Navbar'
import Section1 from '../Main/Sections/Section1'
import './Main.css'
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import mockup from "../assets/mockup.png"
function Fullpage(props) {
    

    return (
        <>
            <Navbar/>
            <div className="sectionTitle">QUI SUIS JE?</div>
            <Section1/>  
            <div className="sectionTitle">PROJECTS</div>
            <Section2/> 
            <section className="mockup">
                <img alt="" src={mockup} width="100%"/>
            </section>
            <p className="sectionTitle">INFORMATIONS </p>
            <Section3/>
        </>
    )
}
export default Fullpage;