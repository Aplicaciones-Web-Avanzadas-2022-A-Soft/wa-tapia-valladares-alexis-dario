import {useRouter} from "next/router";
import {Box, Button, Typography} from "@mui/material";

function Header(){
    const router = useRouter();
    return(
        <header>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:5}}>
                <img
                    src={'hacker.png'}
                    alt={'ico'}
                    width={100}
                    height={75}
                    style={{margin:5}}
                />
                <Typography
                    variant={'h3'}
                    sx={{color:'#3f51b5', fontWeight:'bolder'}}
                >
                    Tutoriales
                </Typography>
            </Box>
        </header>
    )
}
export default Header;