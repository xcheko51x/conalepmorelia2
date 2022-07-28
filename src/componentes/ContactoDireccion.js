import './ContactoDireccion.css'

export function ContactoDireccion(props) {
    //console.log('CD',props)

    const {
        textSeccionDireccion, 
        telefono, 
        direccion, 
        iconClassDireccion,
        iconClassTelefono
    } = props

    const arrTexto = direccion.split('-')

    return(
        <div className="contenedor-informacion">
            <h3>{textSeccionDireccion.toUpperCase()}</h3>
            <span> <i className={iconClassDireccion}></i> {arrTexto[0]}, <br/>{arrTexto[1]}</span>
            <span> <i className={iconClassTelefono}></i> {telefono}</span>
        </div>
    );
}