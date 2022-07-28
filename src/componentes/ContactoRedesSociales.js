import { RedesSociales } from './RedesSociales';
import './ContactoRedesSociales.css'
import { ContactoDireccion } from './ContactoDireccion';

export function ContactoRedesSociales({contactos}) {
    //console.log('CONT', contactos)

    const {
        text_titulo_seccion, 
        redes_sociales, 
        text_seccion_direccion, 
        telefono, 
        direccion,
        icon_class_direccion,
        icon_class_telefono
    } = contactos

    return(
        <div id="3">
            <div className="contenedor-contacto-redes-sociales">
                <h2>{text_titulo_seccion.toUpperCase()}</h2>

                <div className="contenedor-contactos">
                    
                    <RedesSociales redesSociales={redes_sociales} />
                    
                    <ContactoDireccion
                        textSeccionDireccion={text_seccion_direccion}
                        direccion={direccion}
                        telefono={telefono}
                        iconClassDireccion={icon_class_direccion}
                        iconClassTelefono={icon_class_telefono} />

                </div>

            </div>

        </div>
    );
}