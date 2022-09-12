import {Box, Button, TextField, Typography} from "@mui/material";
import React from 'react';
import {useRouter} from "next/router";

function Home() {
    const router = useRouter();

    return (
        <Box sx={{backgroundColor: '#3F51B5', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100vh'}}>
            <img
                src={'hacker.png'}
                alt={'Icono de un hacker'}
                height={'20%'}
            />
            <Typography variant={'h3'} sx={{color:'#C7C7CA',fontWeight:'bold', paddingTop:2.5}}>
                Bienvenido
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="username"
                sx={{margin:'2vh 0 2vh 0', backgroundColor:'#C7C7CA', fontStyle:'italic', fontWeight:'bold'}}
            />
            <TextField
                id="outlined-password-input"
                label="password"
                type="password"
                autoComplete="current-password"
                sx={{margin:'2vh 0 2vh 0', backgroundColor:'#C7C7CA', fontStyle:'italic', fontWeight:'bold'}}
            />
            <Button
                onClick={() => router.push('/tutoriales')}
                sx={{marginTop:2,backgroundColor:'#C7C7CA',textTransform: 'none', color: 'black', fontWeight: 'bold'}}
            >
                Ingresar
            </Button>
        </Box>

    )
}

export default Home;
