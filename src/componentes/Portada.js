import './Portada.css'
import imgPortada from '../img/portada.png'

export function Portada() {
    return(
        <div className="contenedor-imagen-principal" >
            <img src={imgPortada} alt="" />
            <span>CONALEP MORELIA II</span>
        </div>
    );
}