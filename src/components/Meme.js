import "../style.css"
export default function Meme(props){

    
    return (
        <div>
            
            <img name = {props.name} src = {props.url} width = {700} height = {700}></img>
        </div>

    );
}