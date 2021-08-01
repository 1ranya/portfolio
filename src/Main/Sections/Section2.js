import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faClock, faFileCode, faPeopleArrows, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { BiFace } from "react-icons/bi";
import { BsClockHistory, BsBuilding } from "react-icons/bs";
import { AiOutlineCodepen } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
function Section2(props) {
    

    return (
        <section id="section2" className="section2">
            <div className="containerProject">
                <div className="projectDescription container">
                    <h2><BiFace color="#f6bd60"/> ROLE:</h2> Alternante développeur web
                    <h2><BsBuilding color="#f6bd60"/>  ENTREPRISE:</h2> Ouidou Consulting, Paris
                    <h2><BsClockHistory color="#f6bd60"/>  PERIODE :</h2> 09/09/2019 - 30/09/2021
                    
                </div>
                <div  className="missions">
                    <h2><AiOutlineCodepen color="#f6bd60"/>  MISSIONS :</h2>
                    <p><BiCodeAlt /> Développement d'une application web de gestion d'équipe avec : <b>React, Typescript, SpringBoot.</b></p>
                    <p><BiCodeAlt /> Développement et Maintenance d'un logiciel en :  <b>React, NodeJs, SailsJs et PostgresSQL.</b></p>
                    <p><BiCodeAlt /> Projet d'automatisation avec la technologie <b>RPA</b> en utilisant les frameworks UiPath et Microsoft Power Automate.</p>
                </div>
            </div>
            <div className="containerProject">
                <div className="projectDescription container">
                    <h2><BiFace color="#f6bd60"/> ROLE:</h2> Développeur web
                    <h2><BsBuilding color="#f6bd60"/>  ENTREPRISE:</h2> Freelance <p>Client: Association ACSJF</p>
                    <h2><BsClockHistory color="#f6bd60"/>  PERIODE :</h2> 04/2021 - 07/2021
                </div>
                <div  className="missions">
                    <h2><AiOutlineCodepen color="#f6bd60"/>  MISSIONS :</h2>
                    <p><BiCodeAlt /> Développement frontend des nouvelles fonctionnalités web  </p>
                    <p>&nbsp;&nbsp;&nbsp; Développées en<b>VueJs, HTML, CSS et Bootstrap</b></p>
                </div>
            </div>
            <div className="containerProject">
                <div className="projectDescription container">
                    <h2><BiFace color="#f6bd60"/> ROLE:</h2> Stagiaire développeur web
                    <h2><BsBuilding color="#f6bd60"/>  ENTREPRISE:</h2> Namek, Paris
                    <h2><BsClockHistory color="#f6bd60"/>  PERIODE :</h2> 04/2019 - 07/2019
                    
                </div>
                <div  className="missions">
                    <h2><AiOutlineCodepen color="#f6bd60"/>  MISSIONS :</h2>
                    <p><BiCodeAlt /> Développement d'une application web de gestion d'équipe avec : <b>React, Typescript, SpringBoot.</b></p>
                    <p><BiCodeAlt /> Développement et Maintenance d'un logiciel en :  <b>React, NodeJs, SailsJs et PostgresSQL.</b></p>
                    <p><BiCodeAlt /> Projet d'automatisation avec la technologie <b>RPA</b> en utilisant les frameworks UiPath et Microsoft Power Automate.</p>
                </div>
            </div>
            <div className="containerProject">
                <div className="projectDescription container">
                    <h2><BiFace color="#f6bd60"/> ROLE:</h2> Assistante d'éducation dans un lycée professionel, Villebon, Paris
                    <h2><BsClockHistory color="#f6bd60"/>  PERIODE :</h2> 09/2018 - 09/2019
                    
                </div>
                <div  className="missions">
                    <h2><AiOutlineCodepen color="#f6bd60"/>  MISSIONS :</h2>
                    <p>Surveiller et accompagner les éléves dans un acdre éducatif</p>
                </div>
            </div>
            <div className="containerProject">
                <div className="projectDescription container">
                    <h2><BiFace color="#f6bd60"/> ROLE:</h2> Stagiaire en fin d'étude
                    <h2><BsBuilding color="#f6bd60"/>  ENTREPRISE:</h2> SQLExpert, Tunisie
                    <h2><BsClockHistory color="#f6bd60"/>  PERIODE :</h2> 02/2017 - 06/2017
                    
                </div>
                <div  className="missions">
                    <h2><AiOutlineCodepen color="#f6bd60"/>  MISSIONS :</h2>
                    <p><BiCodeAlt /> Développement d'une application web pour la Gestion des contrats de maintenance logicielle. 
                    <p>&nbsp; &nbsp; Environnement: <b>OracleApex</b> Langages: <b>JavaScript, HTML, CSS, jQuery et SQL</b></p></p>
                </div>
            </div>
            
        </section>
    )
}
export default Section2;