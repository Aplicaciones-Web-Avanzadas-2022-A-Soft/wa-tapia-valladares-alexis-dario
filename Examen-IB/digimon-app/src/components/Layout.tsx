import {Container, MenuItem} from "@mui/material";
import NavBar from "./NavBar";
import {ReactNode} from "react";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => {
    return (
        <div>
            <NavBar/>
            <Container style={{paddingTop:'1rem'}}>
                {children}
            </Container>
        </div>
    )
}

export default Layout