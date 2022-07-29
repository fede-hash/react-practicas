import React,{Component} from 'react'
class CicloDeVida extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        nombre: 'martin',
        evento : null
     }
    }
    cambiarNombre(){
        this.setState({nombre:'federico'})
    }
    
    //definir componente (eventos, peticiones http)
    componentDidMount(){
        this.state.evento=window.addEventListener('resize',()=>{
            console.log(window.innerWidth);
        })
    }
    //actualizaciones de componentes(actulizaciones)
    componentDidUpdate(prevProps,prevState){
        if(prevState===this.state.nombre){
            alert("el estado no cambio");
          
        }else{
            alert("El estado si cambio, ahora me llamo "+this.state.nombre);
        }
        }
    //desmontaje del componente(limpieza de eventes y timers)  
    componentWillUnmount(){
        window.removeEventListener('resize',this.state.evento)
    }

     render() { 
        return ( 
            <>
            <p>Este ese el ciclo de vida de un componente</p>
            <p>{this.state.nombre}</p>
            <button onClick={this.cambiarNombre.bind(this)}>Cambia el nombre a federico</button>
            </>
         );
    }
}
 
export default CicloDeVida;