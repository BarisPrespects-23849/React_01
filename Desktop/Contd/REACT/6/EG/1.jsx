import React,{Fragment} from 'react'
import { useState } from "react"

let counter = 4; 

function App() {
 const [todos,setTodos] = useState([{
  id : 1,
  title : "go to gym",
  description :"go to gym today"
 },{
  id : 2,
  title : "eat food" ,
  description : "eat food"
 },{
  id : 3,
  title : "go to class",
  description : "go to class"
 }]) 
 
function addTodo(){
  setTodos ([...todos,{
    id : counter++,
    title : Math.random(),
    description : Math.random()
  }]) 
  


 }

  return (
  <div>
 <button onClick={addTodo}>Add a todo</button>
 {todos.map(todo=> <Todo key = {todo.id} title = {todo.title} description = {todo.description}/>)}  
  </div>
  )
}

// key is unique identifier
function Todo({title,description}){
  return <div>
    <h1>
     {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}


export default App


  // another way below
//   const newTodos =  [];
//   for (let i=0;i<todos.length;i++){
//   newTodos.push(todos[i]);
//   }
//   setTodos.push({
//     id : 4,
//     title : Math.random(),
//    description : Math.random()
//   })
//   setTodos(newTodos); 



























// Using memo
/*
import React, { Fragment } from 'react'
import {useState} from 'react'

function App() {
  const[title,setTitle] = useState("my name is bari");
 
  function updateTitle(){
    setTitle("my name is "+ Math.random()*10);
  }
 
  return (
  <div>
 <button onClick={updateTitle}>Update the title</button>
 <Header title = {title}></Header> 
<Header title = "bari2"></Header> 
<Header title = "bari3"></Header> 
<Header title = "bari4"></Header> 
<Header title = "bari5"></Header> 
  </div>
  )
}
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App

*/















/*
1. React.memo is a higher order component that can be used to memoize a component
***********************-------------------------***********************************

import React, { Fragment } from 'react'
import {useState} from 'react'

function App() {
  
 
  return (
  <Fragment>
<HeaderWithButton></HeaderWithButton>
<Header title = "bari2"></Header> 
<Header title = "bari3"></Header> 
  </Fragment>
  )
}

function HeaderWithButton(){
  const[title,setTitle] = useState("my name is bari");
 
  function updateTitle(){
 setTitle("my name is "+ Math.random()*10);
  }
  return <div>
 <button onClick={updateTitle}>Update the title</button>
 <Header title = {title}></Header> 
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}


Another way of doing the same thing using fragments and setting at the lowest level to minimize
Re-Rendering */