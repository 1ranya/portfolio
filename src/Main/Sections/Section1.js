import profilePhoto from "../../assets/profilePhoto.jpg"
import { GrLocation } from "react-icons/gr";

function Section1(props) {
    return (
        <section id="section1" className="section1">
            <div className="sectionTitle">QUI SUIS JE?</div>
            <div className="quisuisje">
                <img className="profilePhoto" alt="Profile" src={profilePhoto}/>
                <div className="big__circle circle"></div>
                <div className="small__circle circle"></div>
                <div className="description">
                    <p className="quote">"You create your own opportunities"</p>
                    <h1 style={{fontWeight:100}}>Altérnante en développement web </h1>
                    <h1 style={{fontWeight:100}}>chez Ouidou Consulting <GrLocation color="red"/> Paris</h1>
                    <p>Expert en Informatique et Système d'Information </p>
                </div>
            </div>
        </section>
    )
}
export default Section1;