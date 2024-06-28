import React, { useState } from "react";


function CreateArea(props) {
  const [inputtext,inputfunction]=useState({
    title:"",
    content:""
  })
  function changeInput(event){
    const name=event.target.name;
    const value=event.target.value;
    inputfunction((prevValue)=>{
      return {...prevValue,
         [name] : value
      };
    })
    
  }
  function cd1(event){
    props.addItem(inputtext);
    inputfunction({title:"",content:""});
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" value={inputtext.title} onChange={changeInput}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputtext.content} onChange={changeInput}/>
        <button onClick={cd1}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
