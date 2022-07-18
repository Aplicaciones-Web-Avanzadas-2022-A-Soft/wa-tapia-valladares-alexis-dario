import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Save} from "@mui/icons-material";
import {useState,ChangeEvent, FormEvent} from "react";
import {Elegido} from "../../interfaces/elegido";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";


export default function nuevoElegido() {
    const router = useRouter();

    const [elegido, setElegido] = useState({
        idelegido:'',
        nombre: '',
        apellido: '',
        sexo: '',
        estatura: '',
        telefono:''
    });

    const handleChange = ({target:{name,value}}: ChangeEvent<HTMLInputElement>) => {
        setElegido({...elegido, [name]: value});
    }

    const  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createElegido(elegido);
        await router.push('../elegidos');
    }

    const createElegido = async (elegido :Elegido) => {
        await fetch('http://localhost:3000/api/tasks',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elegido)
        })
    }


    return (
        <Layout>
            <Grid container direction={"column"} alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={3}>
                    <Card
                        sx={{mt: 5}}
                        style={{padding: '1rem'}}
                    >
                        <Typography variant={'h5'} textAlign={'center'} fontWeight={'bolder'}>
                            Formulario Nuevo Elegido
                        </Typography>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <TextField variant={'outlined'} label={"Ingresa el ID"}
                                           sx={{display: 'block', margin: '.5rem'}}
                                           name={"idelegido"}
                                           onChange={handleChange}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Nombre"}
                                           sx={{display: 'block', margin: '.5rem'}}
                                           name={"nombre"}
                                           onChange={handleChange}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Apellido"}
                                           sx={{display: 'block', margin: '.5rem'}}
                                           name={"apellido"}
                                           onChange={handleChange}
                                />
                                <FormLabel id="genero">Género</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    sx={{display: 'block', margin: '.5rem'}}
                                    name="sexo"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="F" control={<Radio/>} label="Femenino"/>
                                    <FormControlLabel value="M" control={<Radio/>} label="Masculino"/>
                                </RadioGroup>
                                <TextField variant={'outlined'} label={"Ingresa la Estatura"}
                                           sx={{display: 'block', margin: '.5rem'}}
                                           name={"estatura"}
                                           onChange={handleChange}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Teléfono"}
                                           sx={{display: 'block', margin: '.5rem'}}
                                           name={"telefono"}
                                           onChange={handleChange}
                                />
                                <Button type={'submit'} variant="outlined" color={"primary"} startIcon={<Save/>}>
                                    Guardar
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>

    )
}