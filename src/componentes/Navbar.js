import './Navbar.css'
import logoGobMich from '../img/logo_gob_mich_gris.png'

export function Navbar(props) {

    const {navegacion} = props

    return(
        <div className="contenedor-menu-navegacion">
            <img src={logoGobMich} alt="" />

            {
                navegacion.map((enlace, index) => (
                    <a href={index} key={index}>{enlace}</a>
                ))
            }
            
        </div>
    );
}