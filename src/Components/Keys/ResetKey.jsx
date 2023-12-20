import React from "react";
import { ACTIONS } from "../Utils/Actions";

function ResetKey({ dispatch }) {
  return (
    <button
      className="bg-delResetKeys shadow-delResetKeysShadow shadow-custom col-span-2 rounded-md py-2 text-white active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    >
      RESET
    </button>
  );
}

export default ResetKey;
