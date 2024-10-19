import "./App.css";
import { useState } from "react";
import { LightSwitch } from "./components/LightSwitch";
import { Toggle } from "./components/Toggle";
import { PassMessage } from "./components/PassMessage";
import { DisplayUsers } from "./components/DisplayUsers";
import { TwoWayBinding } from "./components/TwoWayBinding";
import { Counter } from "./components/Counter";
import { VotingSystem } from "./components/VotingSystem";
import { TipCalculator } from "./components/TipCalculator";
import { BasicTodoList } from "./components/BasicTodoList";
const userName = ["John Doe", "Jane Doe", "Billy Doe"];

const App = () => {
  const [lightStatus, setLightStatus] = useState(false);
  const [imageStatus, setImageStatus] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [counter, setCaunter] = useState(0);
  const [barcelonaVotes, setBarcelonaVotes] = useState(0);
  const [juventusVotes, setJuventusVotes] = useState(0);
  const [manUnitedVotes, setManUnitedVotes] = useState(0);
  const [total, setTotal] = useState(0);
  const [todos, setNewTodos] = useState({});

  const switchingLight = () => {
    setLightStatus(!lightStatus);
  };
  const showImage = () => {
    setImageStatus(!imageStatus);
  };

  const onSubmit = () => {
    if (inputValue.length > 0) {
      setResult(inputValue.toUpperCase());
      setInputValue("");
    }
  };

  const enterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };
  const valueBinding = (event) => {
    setValue(event.target.value);
  };

  const counterIncrease = () => {
    setCaunter(counter + 1);
  };
  const counterDecrease = () => {
    setCaunter(counter - 1);
  };
  const counterReset = () => {
    setCaunter(counter * 0);
  };
  const increaseBarcelonaVotes = () => setBarcelonaVotes(barcelonaVotes + 1);
  const increaseJuventusVotes = () => setJuventusVotes(juventusVotes + 1);
  const increaseManUnitedVotes = () => setManUnitedVotes(manUnitedVotes + 1);

  const totalTip = () => {
    const bill = Number(document.getElementById("amount").value);
    const tip = Number(document.getElementById("tip").value);
    const people = Number(document.getElementById("people").value);
    const newTotal = (bill * tip) / people;
    setTotal(newTotal.toFixed(2));
  };

  const addNewTodo = () => {
    const inputElem = document.getElementById("todo-text");
    const newValue = inputElem.value.trim();
    const newTodos = { ...todos };
    if (newValue.length > 0) {
      const newTodo = {
        text: newValue,
      };
      const newId = Math.random().toString(16).slice(2);

      newTodos[newId] = newTodo;

      setNewTodos(newTodos);
    }

    inputElem.value = "";
  };
  const clearTodos = () => {
    setNewTodos({});
  };

  return (
    <>
      <div className="cont">
        <LightSwitch
          lightStatus={lightStatus}
          switchingLight={switchingLight}
        />
      </div>
      <div className="cont">
        <Toggle imageStatus={imageStatus} showImage={showImage} />
      </div>
      <div className="cont">
        <PassMessage
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={enterPress}
          onSubmit={onSubmit}
          result={result}
        />
      </div>
      <div className="cont">
        <h1>User names</h1>
        {userName.map((user, index) => (
          <DisplayUsers key={index} user={user} />
        ))}
      </div>
      <div className="cont">
        <TwoWayBinding value={value} onChange={valueBinding} />
      </div>
      <div className="cont">
        <Counter
          counter={counter}
          counterDecrease={counterDecrease}
          counterIncrease={counterIncrease}
          counterReset={counterReset}
        />
      </div>
      <div className="cont">
        <VotingSystem
          increaseBarcelonaVotes={increaseBarcelonaVotes}
          increaseJuventusVotes={increaseJuventusVotes}
          increaseManUnitedVotes={increaseManUnitedVotes}
          barcelonaVotes={barcelonaVotes}
          juventusVotes={juventusVotes}
          manUnitedVotes={manUnitedVotes}
        />
      </div>
      <div className="cont">
        <TipCalculator totalTip={totalTip} total={total} />
      </div>
      <div className="cont">
        <BasicTodoList
          clearTodos={clearTodos}
          addNewTodo={addNewTodo}
          todos={todos}
        />
      </div>
    </>
  );
};
export default App;
