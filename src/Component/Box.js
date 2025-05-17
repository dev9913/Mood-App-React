import Button from "./Button";
  const Box = ({changemood,handleOnChange,bgColor}) => {
    
 
  
 
  return (
    <div className="box" >
    <div className="card text-center header">

    <div className="card-header ">
      <h2>Mood</h2>
    </div>
    <div className="middle" style={{ backgroundColor: bgColor}}>
    <Button handleOnChange={handleOnChange}/>
    <div  className="card-body body">
      <h5 className ="card-title"> Current Mood :{changemood}</h5>
    </div>
    </div>
    <div className="card-footer text-body-secondary">
      Be Kind Someone  💖
    </div>
  </div>
  </div>
  )
}

export default Box;