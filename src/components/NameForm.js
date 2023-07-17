import React,{useState} from "react";

export default function NameForm(props) {
    const handleOnOver = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        
      }
    
      const handleChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
      }

    const [text,setText] = useState("Enter Your Name");
    return (
        <>
        <div className="container-fluid my-5" style={{color: props.mode ==='dark'? 'white':'#243743'}}>
        <h1 className="text-center" >{props.heading}</h1>
            <input className="form-control mx-4 my-3" type="text" value={text} onChange={handleChange} placeholder="Enter Your Name" style={{backgroundColor: props.mode ==='dark'? '#243743':'white',color: props.mode ==='dark'? 'white':'#243743'}}/>
            <button className={`btn btn-outline-${props.mode ==='light'?'danger':'info'} mx-4 px-5`} onMouseOver={handleOnOver}>Let's Save</button>
        </div>
        <hr style={{color: props.mode ==='dark'? 'white':'#243743'}}/>
        </>
    )
  }
