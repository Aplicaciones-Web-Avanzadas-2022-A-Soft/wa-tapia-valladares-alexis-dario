import styles from "./login-home.module.css"
import styled from '@emotion/styled'

/*type LoginPropiertiesType = {
    propiedadesImagen: {
        width: number;
        height: number;
        urlImgane: string;
    };
}*/

interface LoginProperties {
    color: string;
    backgroudColor: string;
    propiedradesImagen: {
        width: number;
        height: number;
        urlImagen: string;
    };
}

//Styled components
const Titulo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  color: darkblue;
`;

const TituloRojo = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  color: red;
`;

const Subtitulo = styled.h2`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: green;
`;

const LoginHome = (props: LoginProperties) => {
    const misEstilos={
        color: props.color,
        backgroundColor: props.backgroudColor,
        borderBottom: '5px solid brown',
    }
    return (
        <>
            <Titulo>Hola Titulo Normal</Titulo>
            <TituloRojo>Hola Titulo Rojo</TituloRojo>
            <Subtitulo>Hola Subtitulo</Subtitulo>
            {/*<h1 style={{color: props.color, backgroundColor: props.backgroudColor}}>Login home</h1>*/}
            <h1 style={misEstilos}>Login Home - AT</h1>
            <h2 className={styles.azul}>AZUL</h2>
            <h2 className={styles.rojo}>ROJO</h2>
            <img src={props.propiedradesImagen.urlImagen}
                 width={props.propiedradesImagen.width}
                 height={props.propiedradesImagen.height}
                 alt=""/>
        </>
    )
}
export default LoginHome

