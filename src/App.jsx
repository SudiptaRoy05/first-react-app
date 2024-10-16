import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  );
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
    <div>
      <h3>Name:</h3>
      <p>AGE:</p>
    </div>
  );
}

export default App;
