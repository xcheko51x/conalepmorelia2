import './Header.css'
import imgHeader from '../img/cabezal.png'

export function Header() {
    return(
        <>
            <div className="contenedor-cabecera">
                <div className="contenedor-logos">
                    <img className="logos-cabecera" src={imgHeader} alt="cabezal" />
                </div>
            </div>
        </>
    );
}