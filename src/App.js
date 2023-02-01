import { useEffect, useState } from "react";
import {
  AppMain,
  Bottomside,
  ButtonsHolder,
  CalcBoundaries,
  ClickableButton,
  FunctionsHolder,
  ResultBlock,
  Topside,
} from "./App.style";

function App() {
  const [display, SetDisplay] = useState("");
  const [result, SetResult] = useState(0);
  const [value1, SetValue1] = useState("");
  const [value2, SetValue2] = useState("");
  const [selFnc, SetSelFnc] = useState("");

  const [state, SetState] = useState("value1"); // value1, value2, result

  function ButtonSelect({ target }) {
    let num = target.innerHTML;
    switch (state) {
      case "value1":
        SetValue1(value1 + "" + num);
        break;
      case "value2":
        SetValue2(value2 + "" + num);
        break;
      case "result":
        alert("Reseting values");
        break;
    }
  }

  function FunctionSelect({ target }) {
    let res = 0;
    switch (state) {
      case "value1":
        if (value1 != "") SetSelFnc(target.innerHTML);
        SetState("value2");
        break;
      case "value2":
      case "result":
        res = ShowResult();
        SetResult(res);
        SetValue1(res);
        break;
    }
  }

  function ShowResult() {
    let res = 0;

    switch (selFnc) {
      case "+":
        res = value1 + value2;
        break;
      case "-":
        res = value1 - value2;
        break;
      case "/":
        res = value1 / value2;
        break;
      case "*":
        res = value1 * value2;
        break;
    }
    // SetResult(res);
    // SetState("result");
    return res;
  }

  useEffect(() => {
    console.log(value1);
    switch (state) {
      case "value1":
        SetDisplay(value1);
        break;
      case "value2":
        SetDisplay(value2);
        break;
      case "result":
        SetDisplay(result);
        break;
    }
  });

  return (
    <AppMain>
      <CalcBoundaries>
        <Topside>
          <ResultBlock value={display} readOnly />
        </Topside>
        <Bottomside>
          <ButtonsHolder>
            <ClickableButton onClick={ButtonSelect}>1</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>2</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>3</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>4</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>5</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>6</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>7</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>8</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>9</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>,</ClickableButton>
            <ClickableButton onClick={ButtonSelect}>0</ClickableButton>
            <ClickableButton onClick={ShowResult}>=</ClickableButton>
          </ButtonsHolder>
          <FunctionsHolder>
            <ClickableButton onClick={FunctionSelect}>+</ClickableButton>
            <ClickableButton onClick={FunctionSelect}>-</ClickableButton>
            <ClickableButton onClick={FunctionSelect}>*</ClickableButton>
            <ClickableButton onClick={FunctionSelect}>/</ClickableButton>
          </FunctionsHolder>
        </Bottomside>
      </CalcBoundaries>
    </AppMain>
  );
}

export default App;
