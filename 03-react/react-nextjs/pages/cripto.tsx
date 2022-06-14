import Layout from "../components/Layout";
import styled from "@emotion/styled";
import CryptoFormulario from "../components/cripto/formulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`;


const Cripto =() => (
    <Layout title="Cripto | Next.js + TypeScript Example">
        <ImagenPrincipal
            src={'https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/02/16511.jpg'}
            alt={'Texto Alternatico Criptomoneda'}
        ></ImagenPrincipal>
        <h1>Hola desde cripto</h1>

        <CryptoFormulario></CryptoFormulario>
    </Layout>
)

export default Cripto


