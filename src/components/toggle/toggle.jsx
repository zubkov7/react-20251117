import { createContext, use, useState } from "react";

export const Toggle1 = (props) => {
  const [isOn, setIsOn] = useState();

  return (
    <>
      {isOn && <div>isOn</div>}
      {!isOn && <div>isOff</div>}
      <button onClick={() => setIsOn(!isOn)}>switch</button>
    </>
  );
};

export const Toggle2 = (props) => {
  const [isOn, setIsOn] = useState();

  return (
    <>
      <button onClick={() => setIsOn(!isOn)}>switch</button>
      {isOn && <div>isOn</div>}
      {!isOn && <div>isOff</div>}
    </>
  );
};

const ToggleContext = createContext();

const ToggleCompound = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  return <ToggleContext value={{ isOn, setIsOn }}>{children}</ToggleContext>;
};

ToggleCompound.TextOn = function TextOn() {
  const { isOn } = use(ToggleContext);

  return isOn ? <span>on</span> : null;
};

ToggleCompound.TextOff = function TextOff() {
  const { isOn } = use(ToggleContext);

  return !isOn ? <span>off</span> : null;
};

ToggleCompound.Switch = function Switch() {
  const { isOn, setIsOn } = use(ToggleContext);

  return <button onClick={() => setIsOn(!isOn)}>switch</button>;
};

const Component = () => {
  return (
    <ToggleCompound>
      <ToggleCompound.Switch />
      <ToggleCompound.TextOff />
      <ToggleCompound.TextOn />
    </ToggleCompound>
  );
};
