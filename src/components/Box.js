import "../style.css"
export default function Box(props){



    function handleSubmit(event){
        event.preventDefault();

    }


    return (
       
        <div>
            <form onSubmit = {handleSubmit}>
                <div class ="input-container">  
                    {props.inputs}
                </div>
            </form>
        </div>
                
              
        
    );
}