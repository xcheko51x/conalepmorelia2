import './Carrera.css'
import 'animate.css'

export function Carrera(props) {
    //console.log(props)

    const {nomCarrera} = props

    return(
        <div className="contenedor-carrera animate__bounce">
            <span>{nomCarrera}</span>
        </div>
    );    
}