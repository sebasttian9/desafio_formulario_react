import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Registro = () => {
  return (
    <div className="caja_principal mt-5">
        <h1 className="text-center">Crea una cuenta </h1>
        <SocialButton 
          face={<FontAwesomeIcon icon={faFacebook} size="2xl" />} 
          github={<FontAwesomeIcon icon={faGithub} size="2xl" />}
          link={<FontAwesomeIcon icon={faLinkedinIn} size="2xl" />}
        ></SocialButton>
        <p className="mt-2 text-center">O usa tu email para registrarte</p>
        <Formulario></Formulario>
    </div>
  )
}

export default Registro