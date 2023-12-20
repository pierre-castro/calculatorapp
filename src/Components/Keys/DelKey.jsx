import React from "react";
import { ACTIONS } from "../Utils/Actions";

function DelKey({ dispatch }) {
  return (
    <button
      className=" bg-delResetKeys shadow-delResetKeysShadow shadow-custom rounded-md py-2 text-white active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.DELETE })}
    >
      DEL
    </button>
  );
}

export default DelKey;
