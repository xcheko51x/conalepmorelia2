import { PerfilCarrera } from './PerfilCarrera';
import './PerfilEgreso.css'

export function PerfilEgreso(props) {
    //console.log('PE', props)

    const {seccion, carreras} = props
    const arrTexto = seccion.texto_seccion.split('-')

    const abrCarreras = carreras.map(item => (
        item.abr_carrera
    ))

    return(
        <section id='2'>
            <div className="contenedor-titulo-perfil-egreso">
                <h2>{seccion.nom_seccion.toUpperCase()}</h2>
                <h3> <span>{arrTexto[0].toUpperCase()} </span> <br />{arrTexto[1].toUpperCase()}</h3>
            </div>

            <div className="contenedor-perfiles-egreso">
                
                {
                    carreras.map((carrera, index) => (
                        <PerfilCarrera 
                            carrera={carrera} 
                            key={index} />
                    ))
                }
                
            </div>
        </section>
    );
} 