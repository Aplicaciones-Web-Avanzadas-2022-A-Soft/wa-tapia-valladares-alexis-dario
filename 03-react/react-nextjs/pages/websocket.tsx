import Layout from "../components/Layout";
import io from "socket.io-client"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MensajeChat, {MensajeChatProps} from "../components/MensajeChat";

const servidorWebsocket = 'http://localhost:8080';
const socket = io(servidorWebsocket);

export default function Websocket() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm(
        {
            defaultValues: {
                salaId: '',
                nombre: '',
                mensaje: ''
            },
            mode: "all",
        }
    )

    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            //useEffect
            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: 'I'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
            socket.on('escucharEventoMensajeSala', (data: { mensaje: string, nombre: string, salaId: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + ' - ' + data.mensaje,
                    nombre: data.nombre,
                    posicion: 'D'
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
        },
        []
    )

    const enviarEventoHola = () => {
        const nuevoMensaje: MensajeChatProps = {
            mensaje: 'Dario',
            nombre: 'Sistema',
            posicion: 'I'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )
    }

    const unirseSala = (data) => {
        if (data.mensaje === '') {
            const dataEventoUnirseSala = {
                salaId: data.salaId,
                nombre: data.nombre,
            };
            socket.emit(
                'unirseSala',//Nombre Evento
                dataEventoUnirseSala, //Datos Evento
                () => { //Callback o respuesta del evento
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: 'Bienvenido a la sala ' + dataEventoUnirseSala.salaId,
                        nombre: 'Sistema',
                        posicion: 'I'
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            )
        } else {
            const dataEventoEnviarMensaje = {
                salaId: data.salaId,
                nombre: data.nombre,
                mensaje: data.mensaje
            };
            socket.emit(
                'enviarMensaje',//Nombre Evento
                dataEventoEnviarMensaje, //Datos Evento
                () => { //Callback o respuesta del evento
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: data.salaId + ' - ' + data.mensaje,
                        nombre: data.nombre,
                        posicion: 'D'
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            )
        }
    }

    const enviarMensajeSala = (data) => {
        console.log(data);
    }

    return (
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                <button className={'btn btn-success'} onClick={() => enviarEventoHola()}>Enviar evento hola</button>

                <div className={'row'}>
                    <div className={'col-sm-6'}>
                        <form onSubmit={handleSubmit(unirseSala)}>
                            <div className="mb-3">
                                <label htmlFor="salaID" className="form-label">Sala ID</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: 1234"
                                       id="salaID"
                                       {...register('salaId', {
                                           required: {value: true, message: 'Campo Obligatorio'},
                                           maxLength: {value: 20, message: 'Longitud max 20'},
                                           minLength: {value: 3, message: 'Longitud min 3'},
                                           validate: {
                                               soloNumeros: (valorActual) => {
                                                   // + -> hace un cast a Number
                                                   if (Number.isNaN(+valorActual)) {
                                                       //Se puede devolver false o un mensje de error
                                                       return 'Ingrese solo numeros';
                                                   } else {
                                                       //Se devuelve un true
                                                       return true; //Esta correcto
                                                   }
                                               }
                                           },
                                       })}
                                       aria-describedby="salaHelp"/>
                                <div id="salaHelp" className="form-text">
                                    Ingresa la Sala ID
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Alexis Tapia"
                                       id="nombre"
                                       {...register('nombre', {
                                           required: {value: true, message: 'Campo Obligatorio'},
                                           maxLength: {value: 20, message: 'Longitud max 20'},
                                           minLength: {value: 3, message: 'Longitud min 3'}
                                       })}
                                       aria-describedby="nombreHelp"/>
                                <div id="nombreHelp" className="form-text">
                                    Ingresa un nombre
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Mensaje"
                                       id="mensaje"
                                       {...register('mensaje')}
                                       aria-describedby="mensajeHelp"/>
                                <div id="mensajeHelp" className="form-text">
                                    Ingresa un mensaje
                                </div>
                            </div>
                            <button type={'submit'}
                                    disabled={!isValid}
                                    className={'btn btn-warning'}>
                                Unirse Sala
                            </button>
                            <button type={'reset'} className={'btn btn-danger'}>
                                Reset
                            </button>
                        </form>
                    </div>
                    <div className={'col-sm-6'}>
                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat
                                key={indice}
                                nombre={mensaje.nombre}
                                mensaje={mensaje.mensaje}
                                posicion={mensaje.posicion}
                            />)
                        }
                        {/*<form onSubmit={handleSubmit(enviarMensajeSala)}>
                            <div className="mb-3">
                                <label htmlFor="salaID" className="form-label">Sala ID</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: 1234"
                                       id="salaID"
                                       {...register('salaID', {
                                           required: {value: true, message: 'Campo Obligatorio'},
                                           maxLength: {value: 20, message: 'Longitud max 20'},
                                           minLength: {value: 3, message: 'Longitud min 3'},
                                           validate: {
                                               soloNumeros: (valorActual) => {
                                                   // + -> hace un cast a Number
                                                   if (Number.isNaN(+valorActual)) {
                                                       //Se puede devolver false o un mensje de error
                                                       return 'Ingrese solo numeros';
                                                   } else {
                                                       //Se devuelve un true
                                                       return true; //Esta correcto
                                                   }
                                               }
                                           },
                                       })}
                                       aria-describedby="salaHelp"/>
                                <div id="salaHelp" className="form-text">
                                    Ingresa la Sala ID
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Alexis Tapia"
                                       id="nombre"
                                       {...register('nombre', {
                                           required: {value: true, message: 'Campo Obligatorio'},
                                           maxLength: {value: 20, message: 'Longitud max 20'},
                                           minLength: {value: 3, message: 'Longitud min 3'}
                                       })}
                                       aria-describedby="nombreHelp"/>
                                <div id="nombreHelp" className="form-text">
                                    Ingresa un nombre
                                </div>
                            </div>
                            <button type={'submit'}
                                    disabled={!isValid}
                                    className={'btn btn-warning'}>
                                Enviar Mensaje
                            </button>

                        </form>*/}
                    </div>
                </div>


            </Layout>
        </>
    )
}