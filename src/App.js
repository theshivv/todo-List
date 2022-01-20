
import "./App.css";
import  Header  from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos"
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {

  const onDelete =(todo)=>{
    console.log("I am onDelete of todo ", todo);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }
    ))
  }

  const addTodo = (title,desc) => {
    console.log("I am adding this todo ", title,desc)
  }

  const [todos, setTodos] = useState([

    {
      sno :1,
      title : "Return Myntras order",
      desc : "You need to return 2/3 t-shirts to myntra for refund."

    },
    {
      sno :2,
      title : "Buy milk",
      desc : "You need to return 2/3 t-shirts to myntra for refund."

    },
    {
      sno :3,
      title : "Sunmit WIM Assignment",
      desc : "You need to return 2/3 t-shirts to myntra for refund."

    },

  ]);
  
  return (
    <>
      <Header title="ParaHelp" searchBar={true} />
      <AddTodo AddTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
