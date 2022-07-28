import './App.css';
import {Header} from './componentes/Header'
import { Navbar } from './componentes/Navbar';
import { Portada } from './componentes/Portada';
import { OfertaEducativa } from './componentes/OfertaEducativa';
import { PerfilEgreso } from './componentes/PerfilEgreso';
import { Instalaciones } from './componentes/Instalaciones';
import { ContactoRedesSociales } from './componentes/ContactoRedesSociales';
import data from './data.json'
import { Footer } from './componentes/Footer';

function App() {
  //console.log(data);
  const {navegacion, secciones, carreras, contacto_redes_sociales} = data

  return (
    <>
      <Header />
      <Navbar 
        navegacion={navegacion} />
      <Portada />
      <OfertaEducativa 
        seccion={secciones[0]}
        carreras={carreras} />
      <PerfilEgreso 
        seccion={secciones[1]}
        carreras={carreras} />
      <Instalaciones 
        seccion={secciones[2]} />
      <ContactoRedesSociales
        contactos={contacto_redes_sociales} />
      <Footer />
    </>
  );
}

export default App;
