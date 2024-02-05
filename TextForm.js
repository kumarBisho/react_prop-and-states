import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText]=useState('');

    const getUpCase=()=>{
    //    console.log("you have clicked upper case button" +text);
       let newText=text.toUpperCase();
       setText(newText);
    }

    const getLowCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const setValue=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }


  return (
    <>
    <div className='container'>
      <div className="form-group">
    <label for="myBox">{props.heading}</label>
    <div>
    <textarea className="form-control" value={text} onChange={setValue} id="myBox" rows="5"></textarea>
    </div>
  </div>
  <button className="btn btn-property mx-2" onClick={getUpCase}>convert to upperCase</button>
  <button className="btn btn-property mx-2"  onClick={getLowCase}>convert to lowerCase</button>
    </div>
    <div className="container my-2">
       <h2>your text summary</h2>
       <p>{text.split(" ").length} word and {text.length} character</p>
       <p>you need {0.008 * text.split(" ").length} minute to read this content.</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  )
}
