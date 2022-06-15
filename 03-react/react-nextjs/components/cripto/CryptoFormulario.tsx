import {MONEDAS} from "../constantes/monedas";
import useSelectMoneda from "../hooks/useSelectMoneda";

export const CryptoFormulario = () => {
    const [ SelectMonedaComponente ] = useSelectMoneda()
    // const [nombre, numero, componente, FuncionComponente ] = useSelectMoneda()
    const generarSelectMonedas = ()=>{
        return MONEDAS.map((moneda)=>
            (
                <option id={moneda.id} value={moneda.id}>{moneda.nombre}</option>
            )
        )
    }

    return (
        <>
            {/*<p>{nombre}</p>*/}
            {/*<p>{numero}</p>*/}
            {/*{componente}*/}
            {/*{FuncionComponente()}*/}
            {/*<FuncionComponente/>*/}
            <form>
                <label className="form-label" htmlFor="moneda">Moneda</label>
                <select className="form-select" name="moneda" id="moneda">
                    <option value=""> Seleccione opcion</option>
                    {generarSelectMonedas()}
                </select>
                <SelectMonedaComponente/>
                {/*{SelectMonedaComponente()}*/}
            </form>
        </>
    )
}

export default CryptoFormulario
