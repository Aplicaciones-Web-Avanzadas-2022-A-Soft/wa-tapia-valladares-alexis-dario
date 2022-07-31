import Layout from "../components/Layout";
import io from "socket.io-client"
import {useEffect, useState} from "react";

const servidorWebSocket = 'http://localhost:8080'
const socket = io(servidorWebSocket)

export default function websocket() {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mensaje, setMensaje] = useState([] as { mensaje: string }[]);

    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('NO esta conectado');
            });
            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                const nuevoMensaje = {
                    mensaje: data.mensaje
                };
                console.log('escucharEventoHola', data);
                setMensaje((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
        },
        []
    )

    return (
        <Layout>
            <h1>Websockets</h1>
            <ul>
                {mensaje.map((mensaje,indice)=> <li key={indice}>{mensaje.mensaje}</li>)}
            </ul>
        </Layout>
    )
}