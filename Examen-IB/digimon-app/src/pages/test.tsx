import {useState} from "react";
import {Button} from "@mui/material";

export default function test(){

    const [mostrarImg, setImg] = useState('none');

    const letToggle = () => {
        if(mostrarImg == 'none'){
            setImg('flex');
        }else{
            setImg('none');
        }
    }



    return(
        <>
            <h1>Test</h1>
            <img src={"https://1.bp.blogspot.com/-IFx5fOZqcPQ/XQhtT8P8mMI/AAAAAAAADA4/_Y0mw4NlJkcLJCQ9fvQ2Oop51swRxXe_ACLcBGAs/s1600/react-native-dynamically-add-view-component-on-button-click-with-animation.jpg"} alt={"text"} height={"400px"}
                style={{display: mostrarImg}}
            />
            <button onClick={letToggle}>presionma</button>
        </>
    )
}