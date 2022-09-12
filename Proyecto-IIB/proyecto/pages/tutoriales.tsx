import Layout from "./components/layout";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";

function Tutoriales() {
    return (
        <Layout titulo={'Tutoriales'}>
            <Grid container spacing={4} justifyContent={'center'}>
                <Card sx={{width: '22.5%', background: '#4E3DCC',margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=2jxc8DMzt0I&t=21s')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/2jxc8DMzt0I/mqdefault_6s.webp?du=3000&sqp=CNKn-pgG&rs=AOn4CLD8OGhsVrCsVMNrfdtcSE1QQ2cQaw"
                            alt="Tutorial 1"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                Aprendiendo NextJS, el framework de React con Server Side Rendering
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                NextJS es el framework más famoso de React. Nos proporciona muchas
                                facilidades para desarrollar apps con la biblioteca de Facebook como
                                un sistema de rutas basado en archivos físicos, ServerSide Rendering,
                                generación de archivos estáticos, React Fast Refresh y mucho más.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: '22.5%', background: '#3D78CC', margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=omV9GEpQUGk')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/omV9GEpQUGk/mqdefault_6s.webp?du=3000&sqp=CMXE-pgG&rs=AOn4CLCVEA4nk5oaiY2XJUkKJWGEAd59GA"
                            alt="Tutorial 2"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                Next.js For React Developers | Everything You Need To Know
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                I'm pretty sure many of you already heard and somehow knew about the
                                greatest framework of the 21st century, Next.js! Next.js is a fully sophisticated
                                and very fast framework for React applications that gives you everything you need
                                from Routing to Production builds and SSR with hybrid SSG!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: '22.5%', background: '#4E3DCC',margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=lonpW-0EybY')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/lonpW-0EybY/mqdefault_6s.webp?du=3000&sqp=CMTW-pgG&rs=AOn4CLAX0EqFtl9P7FbcpYGM-lOWOUGfQQ"
                            alt="Tutorial 3"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                ¿Qué es NESTJS? 🤔 Nest JS vs Express Parte 1
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                Bienvenidos a este nuevo video en el que doy inicio a los cursos de
                                NestJs, antes que todo quiero darles las gracias por todo el apoyo en
                                el video del curso de Node, ¿como crear una api rest en node?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: '22.5%', background: '#3D78CC',margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=L5uruCljo0Y')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/L5uruCljo0Y/mqdefault_6s.webp?du=3000&sqp=CJbT-pgG&rs=AOn4CLB7Z__P_kePPwUGeRu25VK9WUa9cA"
                            alt="Tutorial 4"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                Should you use Next.js over plain React in 2022
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                Consider subscribing to see tutorials on how I built BuzzRank.io with Next.js and Firebase!
                                Link to BuzzRank: https://www.buzzrank.io
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: '22.5%', background: '#4E3DCC',margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=QXKEv9rHVj4')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/QXKEv9rHVj4/mqdefault_6s.webp?du=3000&sqp=CKSy-pgG&rs=AOn4CLBC2uOR7JlX1vwBDVi59m3VxoSaMQ"
                            alt="Tutorial 5"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                Tutorial en vivo de NextJS con React y Typescript
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                Este framework nos provee un backend para realizar aplicaciones con React mucho más
                                versátiles, otorgándonos la capacidad de realizar Client Side Rendering (CSR), Server Side Rendering (SSR) y
                                Static Site Generation (SSG). Todos estos conceptos los explicaré en el tutorial que haremos!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: '22.5%', background: '#3D78CC',margin:5}}>
                    <CardActionArea
                        onClick={() => window.open('https://www.youtube.com/watch?v=LyEc2fGCR90')}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://i.ytimg.com/an_webp/LyEc2fGCR90/mqdefault_6s.webp?du=3000&sqp=CMff-pgG&rs=AOn4CLAGDHHNJ57R-mbJ9fdFboMHkvNkqg"
                            alt="Tutorial 6"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    marginBottom: '0.70em',
                                    textAlign: 'center'
                                }}
                            >
                                How to Make a React Next JS Website - Beginner Tutorial Using Styled Components
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{color: 'white', textAlign: 'justify', marginTop: '0.70em'}}
                            >
                                Learn how to make a simple website using Next JS and styled components.
                                Next.js is an open-source React front-end development web framework that enables
                                functionality such as server-side rendering and generating static websites for React based web applications.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Layout>
    )
}

export default Tutoriales;