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
    document.getSelection().removeAllRanges();
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
     <div className="mx-3" style={{color: props.mode ==='dark'? 'white':'#243743'}} >
      <h1 className="text-center mb-4">{props.heading}</h1>
      <textarea className="form-control ms-2" id="myBox" rows="4" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode ==='dark'? '#304050':'white' ,color: props.mode ==='dark'? 'white':'#243743'}}></textarea>
      <button disabled={text.length===0} className="btn btn-outline-primary m-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0}  className="btn btn-outline-primary my-2 mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-outline-primary mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-outline-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-outline-primary mx-3 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className={`mx-4 text-${props.mode ==='light'? 'dark':'light'}`}>
      <h4>Text Summary</h4>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {text.length} characters.</p>
      <p><u> {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0 }).length}</u> Minutes to read the above lines. </p>

      <h4>Preview</h4>
      <p className='text-secondary'><i>{text.length>0? text: "Nothing to preview."}</i></p>
    </div>
    <hr className='my-5' style={{color: props.mode ==='dark'? 'white':'#243743'}}/>
    </>
  )
}
