import "../style.css";
import {useState, useEffect} from "react";
import Meme from "./Meme";
import Box from "./Box";
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


export default function Main(){

   
    const [content, setContent] = useState([]);
    const [currentImage, setCurrentImage] = useState([]);
    const [texts, setTexts] = useState([]);
    const [inputs, setInputs] = useState([]);

    // API Connection
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setContent(data.data.memes))
        
    }, []);
    
    // Choosing a random image between the existing images
    function randomize(){
        var length = content.length;
        var random = Math.floor(Math.random()*length);
        setCurrentImage(content[random]);
    }

    function handleChange(event){

        const id = event.target.id;
        const textId = id[0]+"text";
        var text = document.getElementById(textId);
        text.innerHTML = event.target.value;
        
        
    }

    function addFields(){
        const position= inputs.length;
        if(position <10)
            setInputs((previousInputs) =>([...previousInputs, <input id = {position+"input"} onChange={(event) =>handleChange(event)}></input>, <Draggable class = "draggable"><h1 id = {position+"text"}>Hi</h1></Draggable>]));
        
    }


    return (
        <div class = "all-element-container">
                <Box boxCount = {currentImage["box_count"]} id = {currentImage["id"]} inputs ={inputs} texts = {texts}></Box>
                <Meme id = {currentImage["id"]}  name = {currentImage["name"]} url = {currentImage["url"]} boxCount = {currentImage["box_count"]} captions = {currentImage["captions"]}></Meme>
                <button class = "button-field" onClick={randomize}>Get a new meme image</button>
                <button class = "button-field" onClick={addFields}>Add Text</button>
            
        </div>
    
    );

}