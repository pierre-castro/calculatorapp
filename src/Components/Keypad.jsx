import React from "react";
import DigitKey from "./Keys/DigitKey";
import Delkey from "./Keys/DelKey";
import ResetKey from "./Keys/ResetKey";
import EqualKey from "./Keys/EqualKey";
import OperationKey from "./Keys/OperationKey";

function Keypad({ dispatch }) {
  return (
    <div className="grid grid-cols-4 gap-4 rounded-lg bg-keypadBg p-4 text-keySize">
      <DigitKey digit="7" dispatch={dispatch} />
      <DigitKey digit="8" dispatch={dispatch} />
      <DigitKey digit="9" dispatch={dispatch} />
      <Delkey dispatch={dispatch} />
      <DigitKey digit="4" dispatch={dispatch} />
      <DigitKey digit="5" dispatch={dispatch} />
      <DigitKey digit="6" dispatch={dispatch} />
      <OperationKey operation="+" dispatch={dispatch} />
      <DigitKey digit="1" dispatch={dispatch} />
      <DigitKey digit="2" dispatch={dispatch} />
      <DigitKey digit="3" dispatch={dispatch} />
      <OperationKey operation="-" dispatch={dispatch} />
      <DigitKey digit="." dispatch={dispatch} />
      <DigitKey digit="0" dispatch={dispatch} />
      <OperationKey operation="/" dispatch={dispatch} />
      <OperationKey operation="*" dispatch={dispatch} />
      <ResetKey dispatch={dispatch} />
      <EqualKey dispatch={dispatch} />
    </div>
  );
}

export default Keypad;
