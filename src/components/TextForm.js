import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
        {
            props.showAlert("First enter the text", "warning");
        }
        else
        {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UpperCase 👍", "success");
        }
    }
    const handleClear = ()=>{
        if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
        {
            props.showAlert("First enter the text", "warning");
        }
        else
        {
            let newText = "";
            setText(newText);
            props.showAlert("Your text is cleared 🗒️", "success");
        }
    }
    const handleLoClick = ()=>{
        if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
        {
            props.showAlert("First enter the text", "warning");
        }
        else
        {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase 👍", "success");
        }
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=> {
        if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
        {
            props.showAlert("First enter the text", "warning");
        }
        else
        {
            let text =document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Copied to Clipboard 📄", "success");
        }
    }
    const handleExtraSpaces= ()=>{
        if(text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0)
        {
            props.showAlert("First enter the text", "warning");
        }
        else
        {
            let newText = text.split(/[ ]+/).filter((element)=>{return element.length!==0});
            setText(newText.join(" "));
            props.showAlert("Extraspaces has been removed 📄", "success");
        }
    }

    const [text, setText] = useState('Enter text here');
    //text="new text" wrong way
    //setText("new text") correct way to change the state
    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'#042743', backgroundColor: props.mode==='dark'?'#13466e':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container  my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <strong>words</strong> and {text.length} <strong>characters</strong>.</p>
            <p>Approx {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read.</p>
            <h2>Preview</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length? text:"Enter text above to preview it here"}</p>
        </div>
        </>
    )
}
