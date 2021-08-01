import profilePhoto from "../../assets/profilePhoto.jpg"
import ouidouLogo from "../../assets/ouidouLogo.png"
import { GrLocation } from "react-icons/gr";
import { GiDiploma } from "react-icons/gi";

function Section1(props) {
    

    return (
        <section id="section1" className="section1">
            <img className="profilePhoto" alt="Profile" src={profilePhoto}/>
            <div className="description">
                <p className="quote">"You create your own opportunities"</p>
                <h1>Altérnante en développement web </h1><h1>chez Ouidou Consulting <GrLocation color="red"/> Paris</h1>
                <p>Expert Informatique et Système d'Information </p>
            </div>
        </section>
    )
}
export default Section1;