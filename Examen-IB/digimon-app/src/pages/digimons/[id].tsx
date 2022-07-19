import styles from "../../styles/Home.module.css";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import {Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Avatar, Grid} from "@mui/material";
import {Digimon} from "../../interfaces/digimon";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import {indigo, red} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    item:{
        minWidth: "350px",
        margin: "1em",
        boxSizing: "border-box",
        border: "solid black 1px"
    },
    media:{
        width: "225px",
    }
});

export default function verDigimons() {
    const router = useRouter();

    const estilos = useStyles();

    const [digimons, setDigimon] = useState<Digimon[]>([]);

    const loadDigimons = async (id: string) => {
        const res = await fetch('http://localhost:3000/api/digi/' + id, {method: 'GET'});
        const data = await res.json();
        setDigimon(data);
    }

    useEffect(() => {
        if (typeof router.query.id === 'string') {
            loadDigimons(router.query.id)
        }
    }, [router.query])

    return (
        <Layout>
            <Head>
                <title>Lista Digimons</title>
                <meta name="lista-digimons" content="Generated by create next app"/>
                <link rel="icon" href="/Logo.png"/>
            </Head>
            <h1 className={styles.tituloLista}>Lista de Digimons</h1>
            <div>
                <Grid container spacing={4} justifyContent={'center'}>
                    {
                        digimons.map(
                            (value) => (
                                <Card key={value.iddigimon} className={estilos.item}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{bgcolor: indigo[400]}} aria-label="recipe">
                                                {value.iddigimon}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="edit" size="large">
                                                <ModeEditOutlineOutlinedIcon fontSize="large"/>
                                            </IconButton>
                                        }
                                        title={<Typography variant={'h6'}><b>{value.nombre}</b></Typography>}
                                        subheader={<Typography>Nivel: {value.nivel}</Typography>}
                                    />
                                    <CardMedia className={estilos.media}
                                        component={"img"}
                                        height={"200"}
                                        image={value.imagen}
                                    />
                                    <CardContent>
                                        <Typography> <strong><i>Atributo:</i></strong>
                                            <i>{value.atributo}</i></Typography>
                                        <Typography> <strong><i>Tipo:</i></strong> <i>{value.tipo}</i></Typography>
                                        <Typography> <strong><i>ID propietario:</i></strong>
                                            <i>{value.idelegido}</i></Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="delete" size="large">
                                            <DeleteIcon fontSize="large" sx={{color: red[700]}}/>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            )
                        )
                    }
                </Grid>
            </div>
        </Layout>
    )
}