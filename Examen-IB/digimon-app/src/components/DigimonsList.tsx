import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import {indigo, red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Digimon} from "../interfaces/digimon";
import {makeStyles} from "@mui/styles";
import {DataSaverOn} from "@mui/icons-material";

const useStyles = makeStyles({
    item: {
        width: "350px",
        height: "460px",
        margin: "1em",
        boxSizing: "border-box",
        borderStyle: "outset",
        border: "black 1.5px",
        justifyContent: "center"
    },
    media: {
        width: "225px",
        margin: "0 auto"
    }
});

export default function DigimonsList() {
    const router = useRouter();

    const estilos = useStyles();

    const [digimons, setDigimon] = useState<Digimon[]>([]);

    const loadDigimons = async (id: string) => {
        const res = await fetch('http://localhost:3000/api/digi/' + id, {method: 'GET'});
        const data = await res.json();
        setDigimon(data);
    }

    const handleDelete = async (idDigimon: any) => {
        await fetch("http://localhost:3000/api/digi/" + idDigimon, {method: "DELETE"});
        setDigimon(digimons.filter(digimons => digimons.iddigimon !== idDigimon));
    }

    useEffect(() => {
        if (typeof router.query.id === 'string') {
            loadDigimons(router.query.id)
        }
    }, [router.query])

    const handleOnClick = async(idDigimon : any) => {
        await router.push('../edit/digimon/'+idDigimon);
    }

    return (
        <div style={{marginTop: '3rem'}}>
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
                                        <IconButton onClick={()=>handleOnClick(value.iddigimon)} aria-label="edit" size="large">
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
                                    <IconButton onClick={() => handleDelete(value.iddigimon)} aria-label="delete"
                                                size="large">
                                        <DeleteIcon fontSize="large" sx={{color: red[700]}}/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        )
                    )
                }
            </Grid>
        </div>
    )

}