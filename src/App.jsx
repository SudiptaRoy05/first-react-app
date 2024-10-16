import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <Device name="Laptop" price="66"></Device>
      <Device name="Watch" price="6"></Device>
      <Device name="Phone" price="36"></Device>

      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Device(props){
  console.log(props);
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

function Student() {
  return (
    <div className="student">
      <h3>Name:</h3>
      <p>AGE:</p>
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
