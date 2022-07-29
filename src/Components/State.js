import {Component} from 'react'
class State extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        nombre: 'federico',
        apellido: 'abdala'
      }

    cambiarDatos(){
        // alert('se hiso click');
        if(this.state.nombre==="federico" && this.state.apellido==='abdala')
        this.setState({nombre:'martin', apellido: 'gomez'})
        
        else
        this.setState({nombre:'federico', apellido: 'abdala'})

    }

    render() { 
        return ( 
            <>
            <h2>Mi nombre es {this.state.nombre} y mi apellido {this.state.apellido}</h2>
            <button onClick={this.cambiarDatos.bind(this)}>Hace click aca</button>
            </>
         );
    }
}
 
export default State;