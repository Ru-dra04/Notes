import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [addText,addTextFunction]=useState([]);
  function addItem(inputtext){
    addTextFunction((prevValue)=>{
      return [...prevValue,inputtext]
    })
    //event.preventDefault();
  }
  function deleteFunction(id){
    addTextFunction((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {addText.map((item,index)=>{
        return <Note key={index} id={index} del={deleteFunction} title={item.title} content={item.content} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
