import './OfertaEducativa.css'
import {Carrera} from './Carrera';

export function OfertaEducativa(props) {
    //console.log('OE', props)

    const {seccion, carreras} = props
    const arrTexto = seccion.texto_seccion.split('-')

    return(
        <section id='1'>
            <div className="contenedor-titulo-oferta-educativa">
                <h2>{seccion.nom_seccion.toUpperCase()}</h2>
                <h3> <span>{arrTexto[0].toUpperCase()}</span> <br />{arrTexto[1].toUpperCase()}</h3>

                <div className="contenedor-oferta-educativa">
                    {
                        carreras.map((carrera, index) => (
                            <Carrera key={index} nomCarrera={carrera.nom_carrera} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}