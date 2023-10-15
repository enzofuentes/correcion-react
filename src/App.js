import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

import Nosotros from './components/Nosotros';
import './assets/css/style.css';

import MiCuenta from './components/Micuenta';
import Registro from './components/Registro'
import Contact from './components/Contact';
import Gracias from './components/Gracias';
import Detail from './pages/Detail';







function App() {
  return (
    <>
    <Header />
    <Switch>
   
    <Route path="/Micuenta" component={MiCuenta} />
    <Route path="/Registro" component={Registro} />
    <Route path="/contacto" component={Contact} />
    <Route path="/gracias" component={Gracias} />
    <Route path="/detail/:id" component={Detail}/>
    

  
          
     
     <Route exact path="/" component={Main}/>
     


    </Switch>
    <Main />
    <Nosotros />
   
    
    <Footer/>
   
    
    </>
    
    );
}

export default App;
