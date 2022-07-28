import './Instalaciones.css'

export function Instalaciones(props) {
    //console.log('INST',props)

    const {seccion, carreras} = props
    const arrTexto = seccion.texto_seccion.split('-')

    return(
        <section id="3">
            <div className="contenedor-titulo-instalaciones">
                <h2>{seccion.nom_seccion.toUpperCase()}</h2>
                <h3> <span>{arrTexto[0].toUpperCase()} </span> <br />{arrTexto[1].toUpperCase()}</h3>
            </div>

            <div className="contenedor-video-instalaciones">
                <div className="contenedor-video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/9gFFtHl7WX8" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}