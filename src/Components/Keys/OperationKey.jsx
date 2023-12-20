import React from "react";
import { ACTIONS } from "../Utils/Actions";

function OperationKey({ operation, dispatch }) {
  return (
    <button
      className="bg-keys text-opKeyColor shadow-keyShadow shadow-custom rounded-md py-2 active:translate-y-[2px] active:shadow-none"
      onClick={() => {
        dispatch({ type: ACTIONS.OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
}

export default OperationKey;
