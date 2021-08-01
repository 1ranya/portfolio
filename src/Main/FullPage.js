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
            <Section1/>  
            <Section2/> 
            <section id="section4" className="mockup">
                <div className="sectionTitle">PROTOTYPE</div>
                <img alt="" src={mockup} width="100%"/>
            </section>
            <Section3/>
        </>
    )
}
export default Fullpage;