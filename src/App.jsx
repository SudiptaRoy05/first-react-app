import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
 
  const actors = ['sakib','bappa raj', 'jahid khan', 'asraful alom']

  const singers = [
    {id:1, name: 'Dr. Mahfuzur Rahman', age:68},
    {id:2, name: 'Runa Laila', age:56},
    {id:3, name: 'Ranu Mandal', age:73},
    {id:4, name: 'Kumar Sanu', age:73},
    {id:5, name: 'Kishor Kumar', age:113},
  ]


  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

    <Actor name={"Bappa Raz"}></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    }

      {/* <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Core Consept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      

      {/* <Device name="Laptop" price="66"></Device>
      <Device name="Watch" price="6"></Device>
      <Device name="Phone" price="36"></Device>

      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Student grade="7" score="99"></Student>
      <Student grade={12} score="88"></Student>
      <Student></Student>
      <Student></Student>
      
      
      <Developer></Developer> */}


    </>
  );
}

function Device(props){
  // console.log(props);
  return <h2>This device : {props.name} and its price: {props.price}k</h2>
}

function Person() {
  const age = 22;
  const money = 33;

  const person = { name: "Sakib", age: 12 };

  return (
    <h3>
      I am {person.name} with age: {person.age}
    </h3>
  );
}

function Student({grade = 1, score = 0}) {
  return (
    <div className="student">
      <h3>Class: {grade}</h3>
      <p>score: {score}</p>
    </div>
  );
}


function Developer(){
  const devStyle = {
    border: '2px solid red',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px',
  }
  return (
    <div style={devStyle}>
      <h3>Name:</h3>
      <p>AGE:</p>
    </div>
  )
}

export default App;
