import { useEffect, useState, useRef } from "react";
import BoxOfPunsStyles from "../styles/BoxOfPunsStyles.css";

import jokes from "../data/jokes.json";
import closedBoxImg from "../assets/closedBox.png";
import openBoxImg from "../assets/openBox.png";

const BoxOfPuns = () => {

    const [pun, setPun] = useState(null);
    const [boxImg, setBoxImg] = useState(closedBoxImg);
    const [buttonText, setButtonText] = useState("Box of Puns");

    const punButtonRef = useRef(null);

    const getPun = () => {
        const randomIdx = Math.floor(Math.random() * jokes.length);
        setPun(jokes[randomIdx]);
      };

    // Delay button click
    const cookNewPun = () =>{
        punButtonRef.current.disabled = true;
        setTimeout(()=>{punButtonRef.current.disabled = false}, 5000)
    }

    // Button text logic
    const buttonTextLogic = async () => {
        let dots = "";
        let timer = 0;
        while  (timer<5000){
            dots += ".";
            setButtonText("Thinking" + dots);
            await new Promise((resolve)=>setTimeout(resolve,500));
            if (dots == "....") {
                dots = "";
            }
            timer += 500;
        }
        setButtonText("Another pun");
        setBoxImg(closedBoxImg);
    }

    // Box Opening cursor animation
    const changeCursor = () => {
        punButtonRef.current.style.cursor = "grabbing";
        setTimeout(()=>{punButtonRef.current.style.cursor = "grab"},200);
    }

    // Animation trigger
    const shakeBox = () => {
        document.getElementById('pun-boximg').classList.add('shake-animation');
        setTimeout(()=>{
            document.getElementById('pun-boximg').classList.remove('shake-animation');
            
            setBoxImg(openBoxImg); 
            getPun();
            buttonTextLogic();
            cookNewPun();
        },820)
    }

    const handleClick = () => {
        changeCursor();
        shakeBox();

    }

    useEffect(() => {
        setPun(null);
        setBoxImg(closedBoxImg);
    }, []);

    return ( 
        <article id="pun-container">
            {pun&&(<p>{pun}</p>)}
            <div>
                <img src={boxImg} id="pun-boximg"></img>
                <button ref = {punButtonRef} id="pun-button" onClick={handleClick}>{buttonText}</button>
            </div>
        </article>
     );
}
 
export default BoxOfPuns;