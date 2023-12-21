import { ACTIONS } from "../Utils/Actions";
import PropTypes from "prop-types";

function EqualKey({ dispatch }) {
  return (
    <button
      className="col-span-2 rounded-md bg-equalsKey py-2 text-white shadow-custom shadow-equalsKeyShadow active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
}

EqualKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default EqualKey;
