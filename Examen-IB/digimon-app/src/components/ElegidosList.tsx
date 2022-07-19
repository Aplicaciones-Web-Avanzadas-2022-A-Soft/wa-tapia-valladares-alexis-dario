import {Elegido} from "../interfaces/elegido";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";
import {red, grey} from "@mui/material/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';


export function ElegidosList({idelegido}: Elegido) {

    const router = useRouter();

    const loadElegidos = async () => {
        const res = await fetch('http://localhost:3000/api/tasks');
        const data = await res.json();
        setElegidos(data);
    }

    const [elegidos, setElegidos] = useState<Elegido[]>([]);

    useEffect(() => {
        loadElegidos();
    }, [])

    const handleDelete = async (id: any) => {
        await fetch("http://localhost:3000/api/tasks/"+id, {method: "DELETE"});
        setElegidos(elegidos.filter( elegido => elegido.idelegido !== id));
    }

    return (
        <div>
            <h1 className={styles.tituloLista}>Lista de elgidos</h1>
            {
                elegidos.map((value) => (
                        <Card style={{
                            margin: '1rem',
                            backgroundColor: '#eceff1',
                            border: 'ridge #4785A8 5px'
                        }}
                              key={value.idelegido}
                        >
                            <CardContent style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{color: "black"}}>
                                    <Typography><strong>ID:</strong> {value.idelegido} </Typography>
                                    <Typography><strong>Nombre:</strong> {value.nombre} </Typography>
                                    <Typography><strong>Apellido:</strong> {value.apellido} </Typography>
                                    <Typography><strong>Estatura:</strong> {value.estatura} [m]</Typography>
                                    <Typography><strong>Género:</strong> {value.sexo} </Typography>
                                    <Typography><strong>Teléfono:</strong> {value.telefono} </Typography>
                                </div>
                                <div>
                                    <Button onClick={() => router.push(`/digimons/${value.idelegido}`)} variant="outlined" sx={{ color: grey[900] }} startIcon={<VisibilityIcon fontSize="large"/>}>
                                        Digimons
                                    </Button>
                                </div>
                                <div>
                                    <IconButton onClick={() => router.push(`/edit/${value.idelegido}`)} aria-label="edit" size="large">
                                        <ModeEditOutlineOutlinedIcon fontSize="large"/>
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(value.idelegido)} aria-label="delete"
                                                size="large">
                                        <DeleteIcon fontSize="large" sx={{ color: red[700] }}/>
                                    </IconButton>

                                </div>
                            </CardContent>
                        </Card>
                    )
                )
            }
        </div>
    )
}

export default ElegidosList;