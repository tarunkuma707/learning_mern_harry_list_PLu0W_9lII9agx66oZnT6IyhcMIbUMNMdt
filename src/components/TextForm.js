import React, {useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = (event) => {
        //setText("This is text");
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handlelowerClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleOnChnage =(event)=> {
        setText(event.target.value);
    }
  return (
    <div>
        <h1>{props.heading}- {text}</h1>
        <div className="container">
            <div className="mb-3">
                <label htmlFor="box" className='form-label'>Example TextArea</label>
                <textarea className="form-control" placeholder="Leave a comment here" value={text} rows="8" onChange={handleOnChnage}></textarea>
            </div>
            <button className="btn btn-primary m-1" type='button' onClick={handleUpClick}>Covert to upper case</button>
            <button className="btn btn-primary m-1" onClick={handlelowerClick}>Covert to lower case</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
