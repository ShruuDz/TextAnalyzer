import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase !","success");
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied to Clipboard !","secondary");
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpace Has Been Removed!","dark");
  }
  
  const handleClearClick =() =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text has been deleted !","warning");
  }

  const handleLowClick =() =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase !","primary");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
     <div className="m-3" style={{color: props.mode ==='dark'? 'white':'#243743'}} >
      <h1 className="text-center">{props.heading}</h1>
      <textarea className="form-control m-3" id="myBox" rows="4" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode ==='dark'? '#243743':'white' ,color: props.mode ==='dark'? 'white':'#243743'}}></textarea>
      <button className="btn btn-outline-primary m-3" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-outline-primary mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
      <button className="btn btn-outline-primary mx-3" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-outline-primary mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-outline-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className={`mx-4 text-${props.mode ==='light'? 'dark':'light'}`}>
      <h4>Text Summary</h4>
      <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
      <p><u> {0.008 * text.split(" ").length}</u> Minutes to read the above lines. </p>

      <h4>Preview</h4>
      <p className='text-secondary'><i>{text.length>0? text: "Enter text above to preview it."}</i></p>
    </div>
    <hr className='my-5' style={{color: props.mode ==='dark'? 'white':'#243743'}}/>
    </>
  )
}
