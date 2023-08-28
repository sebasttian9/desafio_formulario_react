import Alert from "./Alert";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";


const Registro = () => {
  return (
    <div className="caja_principal mt-5">
        <h1>Crea una cuenta</h1>
        <SocialButton></SocialButton>
        <p className="mt-2">O usa tu email para registrarte</p>
        <Formulario></Formulario>
    </div>
  )
}

export default Registro