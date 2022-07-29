import {Component} from 'react'

class Props  extends Component {
    constructor(props) {
        super(props);
        state = {  }
    }
       render() { 
        return (
            <h1>El nombre seleccionado es {this.props.nombre}</h1>
          );
    }
}
 
export default Props ;