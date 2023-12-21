import { ACTIONS } from "../Utils/Actions";
import PropTypes from "prop-types";

function ResetKey({ dispatch }) {
  return (
    <button
      className="col-span-2 rounded-md bg-delResetKeys py-2 text-white shadow-custom shadow-delResetKeysShadow active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    >
      RESET
    </button>
  );
}

ResetKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ResetKey;
