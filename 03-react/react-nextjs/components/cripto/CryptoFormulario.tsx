import {MONEDAS, MonedasInterface} from "../constantes/monedas";
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect, useState} from "react";

export const CryptoFormulario = ({setMonedas}) => {
    const [monedasArreglo, setMonedasArreglo] = useState(
        //MONEDAS.map((a)=>a);
        //Object.assing([],NMONEDAS);
        [...MONEDAS]
    );
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([]);
    //Definir selets
    const [valorMoneda, SelectMonedaComponente] = useSelectMoneda('Seleccionar moneda', monedasArreglo);
    const [valorCriptoMoneda, SelectCryptoMonedaComponente] = useSelectMoneda('Seleccionar criptomoneda', criptoMonedasArreglo);
    //Ayuda a reaccionar a cambios en alguna variable / escucha cambios
    //Inicializar variables dentro del componente
    useEffect(
        () => {
            //eventos cuando cambie la variable
            console.log('Inicializando...');
            //setCriptoMonedasArreglo(['Bitcoin','Bitcoin']);
            const consultarAPI = async () => {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCriptos = dataPlana.Data.map(
                    (criptoMonedas) => {
                        const criptoMonedaLocal: MonedasInterface = {
                            id: criptoMonedas.CoinInfo.Name,
                            nombre: criptoMonedas.CoinInfo.FullName
                        };
                        return criptoMonedaLocal;
                    }
                );
                console.log(arregloCriptos);
                setCriptoMonedasArreglo(arregloCriptos);
            }
            consultarAPI();
        },
        [
            //Arreglo de variables al escuchar
        ]
    );
    useEffect(
        () => {
            console.log('Cambio Moneda', valorMoneda);
        },
        [valorMoneda] //Escucho cambios de valorMoneda
    )
    useEffect(
        () => {
            console.log('Cambio CriptoMoneda', valorCriptoMoneda);
        },
        [valorCriptoMoneda] //Escucho cambios CriptoMoneda
    )
    useEffect(() => {
            console.log('Cambio Moneda o CriptoMoneda', valorMoneda, valorCriptoMoneda);
        },
        [valorMoneda,valorCriptoMoneda] //Escuccho cambio en ambos
    )
    // const [nombre, numero, componente, FuncionComponente ] = useSelectMoneda()
    /*const generarSelectMonedas = ()=>{
        return MONEDAS.map((moneda)=>
            (
                <option id={moneda.id} value={moneda.id}>{moneda.nombre}</option>
            )
        )
    }*/
    const [error,setError] = useState(false);
    const manejarSubmitFormulario = (e) => {
        e.preventDefault();
        if([valorMoneda,valorCriptoMoneda].includes('')){
            setError(true);
        }
        setError(false);
        //enviar criptomonedas a nuestra ruta
        setMonedas({
            valorMoneda: valorMoneda,
            valorCriptoMoneda: valorCriptoMoneda
        })
    }
    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                <SelectMonedaComponente/>
                <SelectCryptoMonedaComponente/>
                <br/>
                <button className={'btn btn-primary w-100'}> Consultar</button>
                {/*<p>{nombre}</p>*/}
                {/*<p>{numero}</p>*/}
                {/*{componente}*/}
                {/*{FuncionComponente()}*/}
                {/*<FuncionComponente/>*/}
                {/*<label className="form-label" htmlFor="moneda">Moneda</label>
                <select className="form-select" name="moneda" id="moneda">
                    <option value=""> Seleccione opcion</option>
                    {generarSelectMonedas()}
                </select>*/}
                {/*{SelectMonedaComponente()}*/}
            </form>
        </>
    )
}

export default CryptoFormulario
