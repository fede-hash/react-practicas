import {Component} from 'react'
import ColorModulo from './EstilosModulos.module.css'

class EstilosMoludos extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
           <h1 style={ColorModulo}>Este componente se creo en Modulos...</h1>
            </>
         );
    }
}
 
export default EstilosMoludos;