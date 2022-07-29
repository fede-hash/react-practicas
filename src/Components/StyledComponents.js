import {Component} from 'react'
import styled,{keyframes} from 'styled-components';
import '../variablesCss.css'

class StyledComponent1  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const Borde = {
            border: '18px solid red',
            borderRadio: '25px'
        }
        const AnimaText =keyframes`
            from{
                color: green
            }
            to{
                color : red
            }
        `
        const Parrafo = styled.p`
            text-align: center;
            background-color: black;
            color: aqua;
            margin-top: 25px;
            padding: 100px;
            font-size: 35px;
            font-weight: bold;

            animation: ${AnimaText} 2s linear infinite;

        `
        const Titulo = styled.h1`
            font-size: var(--textSize);
            background-color: red;
            color: white;
            padding: var(--espacioPadding);
            border: ${Borde.border};
            border-radius: ${Borde.borderRadio};

            &:hover{
                background-color: var(--colorFondo);
                color:var(--colorTexto);
                font-size: var(--textSize);
                padding: var(--espacioPadding);
                border: ${Borde.border};
                border-radius: ${Borde.borderRadio};
            }
            @media(max-width: 700px) {
                background-color: white;
                color: black;
            }
       
       `

        return (
            <>
            <Titulo>Este es el Titulo del Componente</Titulo>
            <Parrafo>Componente creado a travez de Styled Component...</Parrafo>
            </>
          );
    }
}
 
export default StyledComponent1;