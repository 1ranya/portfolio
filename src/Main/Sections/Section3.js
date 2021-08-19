import { FaLinkedin, FaGithub  } from 'react-icons/fa';
import { RiDiscussLine, RiPhoneLine } from "react-icons/ri";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Section3(props) {
    

    return (
        <section id="section3" className="section3">
            <p className="sectionTitle informations">INFORMATIONS</p>
            <div className="containerFooter">
                <div className="footerInformations">
                <p><RiDiscussLine/> Ranyamttn@gmail.com</p>
                <p><RiPhoneLine/> +33 7 62 09 00 86 </p>
                </div>
                <div className="SocialMedia">
                    <p className="socialMediaLinks"><a id="linkedinLink" href="https://www.linkedin.com/in/rania-tounsi-b0186a138/">Linked </a><FaLinkedin /></p>
                    <p className="socialMediaLinks"><a id="githubLink" href="https://github.com/1ranya">Github </a><FaGithub /></p>
                </div>
            </div>
            <p className="AllRightReserved">All Rights Reserved <AiOutlineCopyrightCircle/>Rania Tounsi 2021</p>
        </section>
    )
}
export default Section3;