import Layout from "../components/Layout";
import styled from "@emotion/styled";
import CryptoFormulario from "../components/cripto/CryptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`;


const Cripto =() => (
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

        <CryptoFormulario></CryptoFormulario>
    </Layout>
)

export default Cripto


