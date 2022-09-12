import PropTypes from "prop-types";
import {Slide} from "pure-react-carousel";
import React from "react";
import Card from '@mui/material/Card';
import {Container, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

// @ts-ignore
const CustomCardSlide = ({index, source, alt, titulo, descripcion, height, direc,sizeTitle, sizeBody}) => (
    <Slide index={index}>
        <Container>
            <Card>
                <CardActionArea
                    // @ts-ignore
                    onClick={() => window.open(direc)}>
                    <CardMedia
                        component="img"
                        image={source}
                        alt={alt}
                        height={height}
                    />
                    <CardContent>
                        <Typography gutterBottom variant={sizeTitle} component="div" sx={{fontWeight:'bold'}}>
                            {titulo}
                        </Typography>
                        <Typography variant={sizeBody} color="text.secondary">
                            {descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    </Slide>
);

CustomCardSlide.propTypes = {
    index: PropTypes.number.isRequired
};

export default CustomCardSlide;