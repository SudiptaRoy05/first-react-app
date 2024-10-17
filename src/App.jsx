import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Core Consept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      

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
