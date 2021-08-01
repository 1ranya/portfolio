import { FaLinkedin, FaGithub  } from 'react-icons/fa';
import { RiDiscussLine, RiPhoneLine } from "react-icons/ri";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Section3(props) {
    

    return (
        <section id="section3" className="section3">
            <p className="sectionTitle">INFORMATIONS</p>
            <div className="containerFooter">
                <div className="footerInformations">
                <p><RiDiscussLine/> Ranyamttn@gmail.com</p>
                <p><RiPhoneLine/> +33 7 62 09 00 86 </p>
                </div>
                <div className="SocialMedia">
                    <a href="https://www.linkedin.com/in/rania-tounsi-b0186a138/"> <p className="socialMediaLinks">Linked <FaLinkedin /></p></a>
                    <a href="https://github.com/1ranya"><p className="socialMediaLinks">Github <FaGithub /></p></a>
                </div>
            </div>
            <p className="AllRightReserved"><AiOutlineCopyrightCircle/>All Rights Reserved</p>
        </section>
    )
}
export default Section3;