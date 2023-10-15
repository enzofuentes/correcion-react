import {Link} from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
     <header>
      <Logo />
     
     <h1>Revealed: venta de Indumentaria</h1>
      <nav id="links">
  
        <Link to="empresa.html">Empresa</Link>
        <Link to="#productos">Productos</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/micuenta">Mi cuenta</Link>
        <Link to="/contacto#contacto">Contacto</Link> 
        <Link to="/detail/algo">Detalle</Link> 
       
        
      </nav>
  
      <hr /> 
      
    </header>
   );
}

export default Header; 

