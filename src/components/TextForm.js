import React, { useState } from 'react'

export default function TextForm(props) {
    const handlupclick = () => {
        console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleonchange = (event) => {
        console.log("Uppercase was Clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    return (
        <div>
            <h2>{props.heading} </h2>
            <div className="mb-3">

                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="6" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handlupclick}>Convert To UpperCase</button>
        </div>
    )
}
