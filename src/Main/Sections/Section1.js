import profilePhoto from "../../assets/profilePhoto.jpg"
function Section1(props) {
    

    return (
        <section id="section1" className="section1">
            <img className="profilePhoto" alt="Profile" src={profilePhoto}/>
            <div className="description">
                <h1>Altérnante en développement web</h1>
                <p className="quote">"You create your own opportunities"</p>
                <p>Bientôt diplômée en tant qu'Expert Informatique et Système d'Information </p>
            </div>
        </section>
    )
}
export default Section1;