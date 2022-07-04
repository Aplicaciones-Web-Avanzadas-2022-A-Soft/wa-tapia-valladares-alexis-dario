//[idEstudiante].tsx
import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {sampleUserData} from "../../utils/sample-data";
import StaticPropsDetail from "../users/[id]";
import {EstudianteInerface} from "./index";

export default function IdEstudiante(props:{estudiante: EstudianteInerface}){
    console.log('Estudiante en cliente', props.estudiante);
    console.log('propiedades', props);
    return(
        <Layout title={"Id Estudiante"}>
            Hola id estudiante
        </Layout>
    )
}

//Definir las rutas permitidas
export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = [
        {
            params:{idEstudiante: '1'},
        },
        {
            params:{idEstudiante: '2'},
        }
    ]

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

//Codigo para cargar informacin en el servidor y enviar al cliente
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.idEstudiante
        const estudiante = {id: id, nombre:'Alexis'};
        return { props: { estudiante, estaActivo:true} }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}