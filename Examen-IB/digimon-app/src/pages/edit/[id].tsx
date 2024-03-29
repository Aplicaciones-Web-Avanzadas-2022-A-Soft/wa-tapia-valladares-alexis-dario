import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Cached} from "@mui/icons-material";
import {useState, ChangeEvent, FormEvent, useEffect} from "react";
import {Elegido} from "../../interfaces/elegido";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import Head from "next/head";


export default function nuevoElegido() {
    const router = useRouter();

    const [elegido, setElegido] = useState({
        idelegido: '',
        nombre: '',
        apellido: '',
        sexo: '',
        estatura: '',
        telefono: ''
    });

    const loadElegido = async (id: string | string[]) => {
        const res = await fetch('http://localhost:3000/api/tasks/' + id);
        const elegido1 = await res.json();
        setElegido(elegido1);
    }

    useEffect(() => {
        if (typeof router.query.id === 'string') {
            loadElegido(router.query.id)
        }
    }, [router.query])

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setElegido({...elegido, [name]: value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log(router.query.id, elegido);
        try {
            if (typeof router.query.id === "string") {
                //console.log('SI EJECUTO UPDATE')
                await updateElegido(router.query.id, elegido);
            }
            await router.push('/elegidos');
        } catch (error) {
            console.log(error);
        }

    }

    const updateElegido = async (id: string, elegido: Elegido) => {
        await fetch('http://localhost:3000/api/tasks/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elegido),
        });
        //console.log('VEO QUE BODY PASA')
        //console.log(elegido);
    }

    return (
        <Layout>
            <Head>
                <title>Editar elegido</title>
                <meta name="editar-elegido" content="Generated by create next app"/>
                <link rel="icon" href="/Logo.png"/>
            </Head>
            <Grid container direction={"column"} alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={3}>
                    <Card
                        sx={{mt: 5}}
                        style={{padding: '1rem'}}
                    >
                        <Typography variant={'h5'} textAlign={'center'} fontWeight={'bolder'}>
                            Editar Elegido
                        </Typography>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <TextField variant={'outlined'} label={"Ingresa el ID"}
                                           sx={{display: 'block', margin: '.5rem .0 1rem 0'}}
                                           fullWidth={true}
                                           name={"idelegido"}
                                           onChange={handleChange}
                                           value={elegido.idelegido}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Nombre"}
                                           sx={{display: 'block', margin: '.5rem .0 1rem 0'}}
                                           fullWidth={true}
                                           name={"nombre"}
                                           onChange={handleChange}
                                           value={elegido.nombre}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Apellido"}
                                           sx={{display: 'block', margin: '.5rem .0 1rem 0'}}
                                           fullWidth={true}
                                           name={"apellido"}
                                           onChange={handleChange}
                                           value={elegido.apellido}
                                />
                                <TextField variant={'outlined'} label={"Ingresa la Estatura"}
                                           sx={{display: 'block', margin: '.5rem .0 1rem 0'}}
                                           fullWidth={true}
                                           name={"estatura"}
                                           onChange={handleChange}
                                           value={elegido.estatura}
                                />
                                <TextField variant={'outlined'} label={"Ingresa el Teléfono"}
                                           sx={{display: 'block', margin: '.5rem .0 1rem 0'}}
                                           fullWidth={true}
                                           name={"telefono"}
                                           onChange={handleChange}
                                           value={elegido.telefono}
                                />
                                <FormLabel id="genero">Género</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    sx={{display: 'block', margin: '.5rem'}}
                                    name="sexo"
                                    onChange={handleChange}
                                    value={elegido.sexo}
                                >
                                    <FormControlLabel value="F" control={<Radio/>} label="Femenino"/>
                                    <FormControlLabel value="M" control={<Radio/>} label="Masculino"/>
                                </RadioGroup>
                                <Button type={'submit'} variant="outlined" color={"primary"} startIcon={<Cached/>}>
                                    Actualizar
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>

    )
}