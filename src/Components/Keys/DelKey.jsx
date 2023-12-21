import { ACTIONS } from "../Utils/Actions";
import PropTypes from "prop-types";

function DelKey({ dispatch }) {
  return (
    <button
      className=" rounded-md bg-delResetKeys py-2 text-white shadow-custom shadow-delResetKeysShadow active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.DELETE })}
    >
      DEL
    </button>
  );
}

export default DelKey;

DelKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
