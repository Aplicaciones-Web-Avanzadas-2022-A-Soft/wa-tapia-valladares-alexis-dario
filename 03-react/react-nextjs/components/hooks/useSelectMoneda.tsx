import {useState} from 'react';

const useSelectMoneda = () => {
    // Usamos Hooks React (useState)
    // const [state, setState] = useState('VALOR')
    const [valorEjemplo, setValorEjemplo] = useState('Alexis Tapia');

    const SelectMonedas = () => (
        <>
            <label className="form-label" htmlFor="moneda">Moneda</label>
            <select className="form-select" name="moneda" id="moneda">
                <option value=""> Seleccione opcion</option>
            </select>
            <label className="form-label" htmlFor="moneda">Moneda</label>

            <label className="form-label"
                   htmlFor="ejemplo">
                Ejemplo
            </label>
            <p>El valor es: {valorEjemplo}</p>
            <input className="form-control"
                   value={valorEjemplo}
                   id="ejemplo"
                   onChange={(e)=>{
                       e.preventDefault();
                       setValorEjemplo(e.target.value);
                   }}
                   type="text"/>
            <button onClick={
                (event)=>{
                    event.preventDefault();
                    // valorEjemplo = 'ALEXIS'; ESTO NO SIRVE
                    setValorEjemplo('ADTV' + new Date().getTime());
                }
            }> Cambiar ejemplo </button>


        </>
    )

    return [SelectMonedas]
    // return [
    //     'hola',
    //     14,
    //     (<> <h1>Hola</h1> </>),
    //     () => {
    //         return (<> <h1>Mundo</h1></>)
    //     }
    // ]
}
export default useSelectMoneda