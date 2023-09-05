import React,{useState} from 'react'

export default function Textform(props) {
    const[text,settext]=useState('') //text naam ki state variable maine set kri hy jiski default value ye hy
// text="new text"//wrong way to change state
// settext=("new text")//correct way to change state

  const handleUpClick=()=>{
    // console.log("Uppercase is clicked"+text)
    let newText=text.toUpperCase();
    settext(newText);
    props.showalert("Converted to UpperCase","success");
  }
  const handleLoClick=()=>{
    // console.log("Uppercase is clicked"+text)
    let newText=text.toLowerCase();
    settext(newText);
    props.showalert("Converted to LowerCase","success");
  }
  const handleOnChange=(event)=>{
    // console.log("On change")
    settext(event.target.value);
  }
  const handleCopy=()=>{
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied","success"); //The use of navigator.clipboard requires a secure origin. So if your dev environment is being served over HTTP, then the clipboard method won't be available.
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "))
    props.showalert("Removed extra spaces","success");
  }
  const handleClear=()=>{
    let newText="";
    settext(newText);
    props.showalert("Text Cleared","success");
  }
    return (
        <>
    <div className="container" style= {{color:props.mode==='light'?'rgb(7 34 61)':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'rgb(7 34 61)'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upppercaase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleClear} >Clear text</button>
    </div>
    <div className="container my-3" style= {{color:props.mode==='light'?'rgb(7 34 61)':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length}minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
