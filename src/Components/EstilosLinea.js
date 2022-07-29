import {Component} from 'react'
class EstilosLinea extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const estilosLinea = {
            textAlign: 'right',
            fontFamily: 'Sans-Serif',
            fontSize : '35px',
            color: 'blue',
            backgroundColor: 'orange'
        }
        return ( 
          <h1 style={estilosLinea}>Estilos en Linea</h1>
         );
    }
}
 
export default EstilosLinea;