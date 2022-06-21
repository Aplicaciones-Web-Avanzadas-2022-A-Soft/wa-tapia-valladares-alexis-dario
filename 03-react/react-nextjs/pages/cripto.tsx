import Layout from "../components/Layout";
import styled from "@emotion/styled";
import CryptoFormulario from "../components/cripto/CryptoFormulario";
import {useEffect, useState} from "react";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`;


const Cripto = () => {
    const[monedas, setMonedas] = useState({} as any);
    const [resultado, setResulado] = useState({} as any);
    useEffect(
        ()=>{
            if(Object.keys(monedas).length > 0){
                //{valorMoneda: 'USD'} -> 1 llave
                //{ } 0 longitud llave
                console.log(monedas);
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.valorCriptoMoneda}&tsyms=${monedas.valorMoneda}`;
                const consultarCripto = async () =>{
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    console.log(resultado);
                    setResulado(resultado.DISPLAY[monedas.valorCriptoMoneda][monedas.valorMoneda]);
                }
                consultarCripto();
            }
        },
        [monedas]
    )


    return (
        <Layout title="Cripto | Next.js + TypeScript Example">
            <div className='text-center'>
                <h1>Hola desde cripto</h1>
                <ImagenPrincipal
                    className={'rounded'}
                    src={'https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/02/16511.jpg'}
                    alt={'Texto Alternatico Criptomoneda'}
                ></ImagenPrincipal>
            </div>
            <h2>Seleccion</h2>
            <p>Seleeciona tu moneda y criptomoneda</p>
            <CryptoFormulario setMonedas={setMonedas}></CryptoFormulario>
            {
                resultado.PRICE &&
                <div>
                    <h1>Resultado</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <p><strong>Precio:</strong> {resultado.PRICE}</p>
                        </div>
                        <div className="col-sm-6">
                            <p><strong>Precio mas alto del dia:</strong> {resultado.HIGHDAY}</p>
                            <p><strong>Precio mas bajo del dia:</strong> {resultado.LOWDAY}</p>
                            <p><strong>Variacion ultimas 24 horas:</strong> {resultado.CHANGEPCT24HOUR}</p>
                            <p><strong>Ultima Actualizacion:</strong> {resultado.LASTUPDATE}</p>
                        </div>
                    </div>
                </div>
            }

        </Layout>
    )
}


export default Cripto


