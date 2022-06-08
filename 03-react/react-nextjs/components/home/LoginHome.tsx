interface LoginProperties {
    propiedradesImagen: {
        width: number;
        height: number;
        urlImagen: string;
    };
}

type LoginPropiertiesType = {
    propiedadesImagen: {
        width: number;
        height: number;
        urlImgane: string;
    };
}

const LoginHome = (props: LoginProperties) => {
    // const propiedadesImgane = {
    //     width: 400,
    //     heigh: 200,
    //     urlImagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
    // };
    return (
        <>
            <h1>Login home</h1>
            <img src={props.propiedradesImagen.urlImagen}
                 width={props.propiedradesImagen.width}
                 height={props.propiedradesImagen.height}
                 alt=""/>
        </>
    )
}
export default LoginHome

