const Button = ({handleOnChange}) => (
    
    <div>
        <button type="button" className="btn btn-info button " 
            onClick={()=>{
                handleOnChange("Laughing")}
            }
        >😆</button>
        <button type="button" className="btn btn-info button " 
            onClick={()=>{
                handleOnChange("Angry")}
            }
        >😠</button>
        <button type="button" className="btn btn-info button " 
            onClick={()=>{
                handleOnChange("Smile")}
            }    
        >😊</button>
        <button type="button" className="btn btn-info button " 
            onClick={()=>{
                handleOnChange("Smile With Kissing")}
            }
        >🥰</button>
        <button type="button" className="btn btn-info button " 
            onClick={()=>{
                handleOnChange("Tear")}
            }    
        >🥲</button>
    </div>
)

export default Button;