import { ACTIONS } from "../Utils/Actions";
import PropTypes from "prop-types";

function OperationKey({ operation, dispatch }) {
  return (
    <button
      className="rounded-md bg-keys py-2 text-opKeyColor shadow-custom shadow-keyShadow active:translate-y-[2px] active:shadow-none"
      onClick={() => {
        dispatch({ type: ACTIONS.OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
}

OperationKey.propTypes = {
  operation: PropTypes.oneOf(["+", "-", "*", "/"]),
  dispatch: PropTypes.func.isRequired,
};

export default OperationKey;
