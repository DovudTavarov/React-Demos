import "./App.css";
import { useState } from "react";
import { LightSwitch } from "./components/LightSwitch";
import { Toggle } from "./components/Toggle";
import { PassMessage } from "./components/PassMessage";
import { DisplayUsers } from "./components/DisplayUsers";
import { TwoWayBinding } from "./components/TwoWayBinding";
const userName = ["John Doe", "Jane Doe", "Billy Doe"];

const App = () => {
  const [lightStatus, setLightStatus] = useState(false);
  const [imageStatus, setImageStatus] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

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
    </>
  );
};
export default App;
