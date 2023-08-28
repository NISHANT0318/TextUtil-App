import React, { useState } from "react";

 function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Upper case was clicked" + text);//
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
      }
      
      const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
      }
      const handleclearclick=()=>{
        let newText=""
        setText(newText)
        props.showAlert("Cleared the text","success")
      }
      
      const handleCopy = () => {
        
        var text = document.getElementById("myBox");
        
        text.select();
        props.showAlert("Copied to clipboard","success")
        
      }
      
      const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
      }
    


    const handleOnChange = (event)=>{
        console.log("Handle on change ");
        setText(event.target.value)
    }
  const [text, setText] = useState("Enter text here");
  return (
        <> 
      <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea style={{backgroundColor:props.mode ==='dark'?'black':'white',color:props.mode ==='dark'?'white':'black'}}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert text to UpperCase</button>
      <button className="btn btn-primary mx-1 " onClick={handleLowerCase}>Convert to lowercasse</button>
      <button className="btn btn-primary mx-1 " onClick={handleclearclick}>Clear Text</button>
      <button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read </p>
    </div>
    </>
  );
}

export default TextForm;
