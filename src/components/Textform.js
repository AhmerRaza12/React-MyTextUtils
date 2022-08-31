import React,{useState} from "react";

export default function Textform(props) {
   
    const [text, setText] = useState("Enter text here");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase!","success")
    }
    const handleClearText=()=>{
        setText("");
        props.showalert("Text cleared!","success")
    }
    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length}words and {text.length} characters and {text.split(".").length} sentences</p>
    </div>
</>
    
  );
}
