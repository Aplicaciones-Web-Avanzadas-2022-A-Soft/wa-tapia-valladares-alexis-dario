import Layout from "../components/Layout";
import {func} from "prop-types";
import BienvenidaHome from "../components/home/BienvenidaHome";
import LoginHome from "../components/home/LoginHome";

const MiPerfilPage = () => {

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
    const listaNumeros = arreglo
        .filter(a => a <= 5)
        .map((a) => {
            return (
                <li>
                    {a}
                </li>
            )
        })
    const estaLogeado = true;

    // function mostrarLogin(){
    //     return(
    //         <>
    //             <h1>login</h1>
    //             <p>Campos login</p>
    //         </>
    //     )
    // }
    //
    // function mostrarMensajeBienvenida() {
    //     return(
    //         <>
    //             <h1>Bienvenido</h1>
    //             <p>Registrate por favor</p>
    //         </>
    //     )
    // }

    const desplegarMensaje = () => {
        if (estaLogeado) {
            return LoginHome({
                color: 'blue',
                backgroudColor: 'orange',
                propiedradesImagen: {
                    width: 400,
                    height: 200,
                    urlImagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
                }
            });
        } else {
            return BienvenidaHome();
        }
    }

    return (
        <Layout>
            <p>hello {'Alexis'.toUpperCase()}</p>
            <ul>
                {listaNumeros}
            </ul>
            {/*<p>{estaLogeado ? 'Bienvenido' : 'Ingresa a login'}</p>*/}
            {/*<p>{estaLogeado ? mostrarLogin() : mostrarMensajeBienvenida()}</p>*/}
            <p>{desplegarMensaje()}</p>
            <ul>
                {(arreglo.length > 2) &&
                    listaNumeros
                }
            </ul>
            <ul>
                {(arreglo.length > 3) &&
                    <p>Hola arreglo</p>}
            </ul>

            <div>{estaLogeado ?
                <LoginHome propiedradesImagen={
                    {
                        width: 300,
                        height: 150,
                        urlImagen: 'https://i.blogs.es/e27617/sonic/1366_2000.jpeg'
                    }
                } color={'grenn'} backgroudColor={'red'}></LoginHome> :
                <BienvenidaHome></BienvenidaHome>}
            </div>

        </Layout>
    )
}
export default MiPerfilPage

