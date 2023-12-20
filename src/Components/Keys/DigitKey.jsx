import React from "react";
import { ACTIONS } from "../Utils/Actions";

function DigitKey({ digit, dispatch }) {
  return (
    <button
      className="bg-keys text-opKeyColor shadow-keyShadow shadow-custom rounded-md py-2 active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitKey;
