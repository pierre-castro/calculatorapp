import { ACTIONS } from "../Utils/Actions";
import PropTypes from "prop-types";

function DigitKey({ digit, dispatch }) {
  return (
    <button
      className="rounded-md bg-keys py-2 text-opKeyColor shadow-custom shadow-keyShadow active:translate-y-[2px] active:shadow-none"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

DigitKey.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DigitKey;
