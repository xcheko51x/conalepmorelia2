import './PerfilCarrera.css'
import imgSOMA from '../img/carrera_soma.jpg'
import imgINFO from '../img/carrera_info.jpg'
import imgEKIN from '../img/carrera_ekin.jpg'
import imgENFE from '../img/carrera_enfe.jpg'

export function PerfilCarrera({carrera}) {
    //console.log('PC', props)
    const {nom_carrera, perfil_egreso, abr_carrera} = carrera

    function comparaAbr(abr) {
        if(abr==='SOMA') {
            return imgSOMA
        } else if(abr === 'INFO') {
            return imgINFO
        } else if(abr === 'EKIN') {
            return imgEKIN
        } else if(abr === 'ENFE') {
            return imgENFE
        }
    }


    return(
        <div className="contenedor-pe">
            <div className="contenedor-info">
                <h3>{nom_carrera.toUpperCase()}</h3>
                <ul>
                    {
                        perfil_egreso.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="contenedor-pe-img">
                <img src={comparaAbr(abr_carrera)} alt="" />
            </div>
        </div>
    );
}