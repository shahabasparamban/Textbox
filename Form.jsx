import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("on change is worked"+text);
  };

  const handleUpperClick = () => {
    const UpperCase = text.toUpperCase();
    setText(UpperCase);
    console.log("onclick worked" +text);
  };

  const handleLower = () => {
    const lowerCaseLetters = text.toLowerCase();
    setText(lowerCaseLetters);
    console.log("onclick worked" +text);
  }

  return (
    <div>
      <div className="mb-3 my-5">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <div className="my-5">
        <button onClick={handleUpperClick} className="btn btn-primary mx-2">
          Convert to uppercase
        </button>
        <button onClick={handleLower} className="btn btn-primary mx-2">
          Convert to lowercase
        </button>
      </div>
    </div>
  );
}
