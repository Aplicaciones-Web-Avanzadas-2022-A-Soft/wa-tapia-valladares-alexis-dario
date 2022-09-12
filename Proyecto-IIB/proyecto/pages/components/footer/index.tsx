import {useRouter} from "next/router";
import {Button} from "@mui/material";

function Footer() {
    const router = useRouter();
    return (
        <footer>
            <img
                src={'logo1.png'}
                alt={'logo poli'}
                width={150}
                height={100}
            />
            <p style={{textAlign:'center', fontWeight:'bold'}}>
                Escuela Politécnica Nacional<br/>
                Aplicaiones Web Avanzadas<br/>
                2022-A
            </p>
            <img
                src={'logo2.png'}
                alt={'logo poli 2'}
                width={100}
                height={150}
            />
        </footer>
    )
}

export default Footer;