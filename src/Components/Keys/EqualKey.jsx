import React from "react";
import { ACTIONS } from "../Utils/Actions";

function EqualKey({ dispatch }) {
  return (
    <button
      className="bg-equalsKey shadow-equalsKeyShadow shadow-custom col-span-2 rounded-md py-2 text-white active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
}

export default EqualKey;
