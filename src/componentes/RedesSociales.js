import './RedesSociales.css'

export function RedesSociales({redesSociales}) {
    //console.log('RS', redesSociales)

    return(
        <div className="contenedor-redes-sociales">
            <h3>SIGUENOS EN NUESTRAS REDES SOCIALES</h3>

            {
                redesSociales.map((red, index) => (
                    <a href={red.url_perfil} target='_blank' key={index}><i className={red.icon_class}></i></a>
                ))
            }
            
        </div>
    );
}