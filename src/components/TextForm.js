import React, { useState } from 'react'

export default function TextForm(props) {
   

        const [text, setText] = useState('Enter Text Here');
        const [currentColorIndex, setCurrentColorIndex] = useState(0);
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan'];
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


        const changecolor = () => {
            // Change text color to the next color in the list
            let previewText = document.getElementById('previewText');
            if (previewText) {
                const nextColor = colors[currentColorIndex % colors.length];
                previewText.style.color = nextColor;
                setCurrentColorIndex(currentColorIndex + 1);
            }
        }
        return (

            <>
                <div className="container">
                    <h2>{props.heading} </h2>
                    <div className="mb-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="6" ></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handlupclick}>Convert To UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert To LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={changecolor}>Color Change</button>
                </div>
                <div className="container my-3">
                    <h2>YOUT TEXT SUMMARY</h2>
                    <p>{text.split(" ").length}, {text.length} charcaters </p>
                    <h3>PREVIEW</h3>
                    <p id='previewText'>{text}</p>
                </div>
            </>
        )
    }

