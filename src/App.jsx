import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";

function App() {
  // const [count, setCount] = useState(0);

  // const [countA, setCountA] = useState(0);
  // const obj = { cat: "meow", dog: "woof" };
  const obj = { cat: "meow", dog: "woof" };
  // const cat = obj.cat // meow
  // const dog = obj.dog // woof
  // const { cat, dog } = obj;
  // // function aa (){
  // //   return null
  // // }
  // // const aa = (a)=>{return a}
  // // const  aa = (a) => (a);
  // const aa = (a) => a;
  // const titleNumber = [1, 2, 3];
  const titleNumber = createNumberArray(Number(import.meta.env.VITE_YOL_O));
  console.log(typeof import.meta.env.VITE_YOL_O);
  // return 一個ARRAY
  function createNumberArray(number) {
    const numberArray = [];

    for (let index = 1; index <= number; index++) {
      // const element = array[index];

      numberArray.push(index);
    }

    //console.log(number);
    return numberArray;
  }

  // const numberArray = [];
  // let number = 100;
  // for (let index = 1; index <= number; index++) {
  //   // const element = array[index];

  //   numberArray.push(index);
  // }
  // console.log(numberArray);
  // const newArr = titleNumber.map((addNumberOne, index) => {
  //   console.log(`${index}:`, addNumberOne );
  //   return addNumberOne ;
  // }); // [2,3,4] // "0,2" "1,3" "2,4"

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((prev) => prev + 1)}>count is {count}</button> */}
        {/* <button onClick={() => setCountA((prev) => prev + 1)}>count is {countA}</button> */}
        {titleNumber.map((titleNumber) => (
          <Button titleNumber={titleNumber}></Button>
        ))}{" "}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
export default App;
