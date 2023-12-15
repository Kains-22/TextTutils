import React, { useState } from 'react'

export default function TextForm(props) {
    const handlupclick = () => {
        console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        console.log(newtext);
    }
    const handleonchange = (event) => {
        console.log("Uppercase was Clicked");
        setText(event.target.value)
    }
    const handleloclick = () => {
        console.log("Lower class was Clicked" + text);
        let newtext = text.toLowerCase()
        setText(newtext)
        console.log(newtext);
    }
    const [text, setText] = useState("Enter text here");
    return (

        <>
            <div className="container">
                <h2>{props.heading} </h2>
                <div className="mb-3">
                
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="6" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handlupclick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert To LowerCase</button>
            </div>
            <div className="container my-3">
                <h2>YOUT TEXT SUMMARY</h2>
                <p>{text.split(" ").length}, {text.length} charcaters </p>
                <h3>PREVIEW</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
