import Header from "../header";
import Footer from "../footer";
import React, {ReactNode} from "react";
import {Helmet} from "react-helmet";

type Props = {
    children?: ReactNode;
    titulo: string;
}

function Layout({children, titulo}: Props) {
    return (
        <div className={'main'}>
            <Helmet>
                <html lang="es"/>
                <title itemProp="name">{titulo}</title>
            </Helmet>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
