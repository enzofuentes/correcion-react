import React from 'react';
import { useHistory } from 'react-router-dom';

function Contact() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    history.push('/gracias');
  };

  return (
    <div className="Fondoparacontacto">
      <h4 id="contacto">Mándanos tu consulta</h4>
      <form className="formularioregistro" onSubmit={handleSubmit}>
        <input className="controls" type="text" name="nombres" placeholder="Ingrese su Nombre" />
        <input className="controls" type="text" name="apellidos" placeholder="Ingrese su Apellido" />
        <input className="controls" type="number" name="dni" placeholder="Ingrese su DNI" />
        <input className="controls" type="email" name="correo" placeholder="Ingrese su Correo" />
        <input className="controls" type="text" name="consulta" placeholder="Consulta" />
        <input className="botons" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
