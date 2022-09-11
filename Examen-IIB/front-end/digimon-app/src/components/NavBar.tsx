import {AppBar, Box} from "@mui/material";


export default function NavBar() {
    return (
        <Box>
            <AppBar position={'static'} color={'transparent'} style={{justifyContent:'flex-start',padding:'1rem'}}>
                <a href="/elegidos"> <img src={'/Logo.png'} alt={"Logo"} width={'125px'}/> </a>
            </AppBar>
        </Box>
    )
}