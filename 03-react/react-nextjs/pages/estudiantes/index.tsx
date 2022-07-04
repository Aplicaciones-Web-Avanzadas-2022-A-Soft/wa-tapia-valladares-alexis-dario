import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export interface EstudianteInerface{
    id: number;
    nombre: string;
}

export default function Estudiantes(){
    const [arregloEstudiantes,setArregloEstudiantes] = useState([] as EstudianteInerface[])
    useEffect(//Inicia el componente
        ()=>{
            //consultar API
            const arregloConsultado = [
                {id:1, nombre:'Alexis'},
                {id:2, nombre:'Dario'},
            ] as EstudianteInerface[];
            setArregloEstudiantes([...arregloEstudiantes,...arregloConsultado])
            //console.log(arregloEstudiantes);
        },
        []
    )
    return(
        <Layout title={"Estudiantes"}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante)=> {
                        return (<li key={estudiante.id}>{estudiante.nombre}</li>)
                    }
                )}
            </ul>
        </Layout>
    )
}
