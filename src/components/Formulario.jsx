import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from './Alert';
import {useState} from 'react';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [confirma, setConfirma] = useState('');
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState('');

  function validateEmail(email){
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
    // Using test we can check if the text match the pattern
    if( validEmail.test(email) ){
      // alert('Email is valid, continue with form submission');
      return true;
    }else{
      // alert('Correo no es valido, intente nuevamente');
      setError(true);
      setTipo('danger');
      setMensaje('Correo no es valido, intente nuevamente');
      return false;
    }
  } 

  const validar = (e) => {
    
    e.preventDefault(); 

    if(nombre=='' || contra == '' || correo=='' || confirma == ''){
      setError(true);
      setTipo('danger');
      setMensaje('Complete todos los campos!');
      return;
    }

    if(contra !== confirma){
      // alert('Las contraseñas no coinciden, intente nuevamente!');
      setError(true);
      setTipo('danger');
      setMensaje('Las contraseñas no coinciden, intente nuevamente!');
      return;
    }

    validateEmail(correo);

    setNombre('');
    setConfirma('');
    setContra('');
    setCorreo('');
    setTipo('success');
    setMensaje('Cuenta Creada Exitosamente!');
    setError(false);
    setExito(true);
  }


  return (
    <Form onSubmit={validar}>
      <Form.Control 
        type="text" 
        className='mt-3' 
        placeholder="Nombre" 
        onChange={event => setNombre(event.target.value)}
        value={nombre} />
      <Form.Control 
        type="email" 
        className='mt-3' 
        placeholder="micorreo@example.com"
        onChange={event => setCorreo(event.target.value)}
        value={correo}  />

      <Form.Control 
        type="password" 
        className='mt-3' 
        placeholder="Contraseña"
        onChange={event => setContra(event.target.value)}
        value={contra} />

      <Form.Control 
        type="password" 
        className='mt-3' 
        placeholder="Confirmar contraseña" 
        onChange={event => setConfirma(event.target.value)}
        value={confirma} />

      <div className="d-grid gap-2 mt-3">
        <Button variant="success" type='submit' >Registrarse</Button>
      </div>
      {
        error ? <Alert mensaje={mensaje} tipo={tipo} ></Alert> : null
      }
      {
        exito ? <Alert mensaje={mensaje} tipo={tipo} ></Alert> : null
      }      
    </Form>
  )
}

export default Formulario