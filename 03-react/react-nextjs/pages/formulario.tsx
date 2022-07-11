import Layout from "../components/Layout";
import {useState} from "react";
import {useForm} from "react-hook-form";

type FormularioEjemplo = {
    nombre: String;
}

export default function Formulario() {
    const [nombre, setNombre] = useState('ADTV');
    //const [numUno, numDos] = [1,2] //importa el orden
    //const {a} = {a:1,b:3} as any; //Importa el nombre del objeto
    const controlarSubmit = (eventoSubmit) => {
        eventoSubmit.preventDefault();
        console.log('Submit', eventoSubmit);
        console.log('nombre', nombre);
    }

    const controlarSubmitRHF = (data) => {
        console.log('data', data);
    }

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Ale'
            },
            mode: "onTouched",
        }
    )

    return (
        <>
            <Layout title="Formulario">
                <h1>Formulario con React</h1>
                <form onSubmit={controlarSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Alexis Tapia"
                               value={nombre}
                               onChange={(e) => setNombre(e.target.value)}
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br/>

                <h1>Formulario con react Hook Form</h1>
                <form onSubmit={handleSubmit(controlarSubmitRHF)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Alexis Tapia"
                               id="nombre"
                               {...register('nombre', {
                                   required: {value: true, message: 'Campo Obligatorio'},
                                   maxLength: {value: 20, message: 'Longitud max 20'},
                                   minLength: {value: 3, message: 'Longitud min 3'},
                                   validate: {
                                       soloNumeros: (valorActual)=>{
                                           if(Number.isNaN(+valorActual)){
                                               //Se puede devolver false o un mensje de error
                                               return 'Ingrese solo numeros';
                                           }else{
                                               //Se devuelve un true
                                               return true; //Esta correcto
                                           }
                                       }
                                   },
                               })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre
                        </div>
                        {errors.nombre &&
                            <div className={"alert alert-warning"} role={"alert"}>
                                Tiene errores {errors.nombre.message}
                            </div>
                        }
                    </div>
                    <button type="submit"
                            disabled={!isValid}
                            className="btn btn-primary">Submit
                    </button>
                </form>

            </Layout>

        </>
    )
}
