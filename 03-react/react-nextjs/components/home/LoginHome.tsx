import styles from "./login-home.module.css"

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

const LoginHome = (props: LoginProperties) => {
    const misEstilos={
        color: props.color,
        backgroundColor: props.backgroudColor,
        borderBottom: '5px solid brown',
    }
    return (
        <>
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

