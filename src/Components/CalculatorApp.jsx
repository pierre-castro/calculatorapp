import { useReducer } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Screen from "./Screen";
import Keypad from "./Keypad";
import Footer from "./Footer";
import { ACTIONS, OPERATIONS } from "./Utils/Actions";

function evaluate(previousOperand, currentOperand, operation) {
  if (operation === OPERATIONS.ADD)
    return parseFloat(previousOperand) + parseFloat(currentOperand);
  if (operation === OPERATIONS.SUBSTRACT)
    return parseFloat(previousOperand) - parseFloat(currentOperand);
  if (operation === OPERATIONS.MULTIPLY)
    return parseFloat(previousOperand) * parseFloat(currentOperand);
  if (operation === OPERATIONS.DIVIDE)
    return parseFloat(previousOperand) / parseFloat(currentOperand);
}

function calcReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }

      if (
        payload.digit === "." &&
        state.currentOperand &&
        state.currentOperand.includes(".")
      ) {
        return state;
      }
      if (state.currentOperand === "0") {
        return {
          ...state,
          previousOperand: "0",
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (state.overwrite) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {
        currentOperand: "0",
      };

    case ACTIONS.OPERATION:
      if (state.currentOperand && state.previousOperand && state.operation) {
        return {
          overwrite: true,
          operation: payload.operation,
          currentOperand: evaluate(
            state.previousOperand,
            state.currentOperand,
            state.operation,
          ).toString(),
        };
      }
      return {
        ...state,
        overwrite: true,
        operation: payload.operation,
      };
    case ACTIONS.EVALUATE:
      if (!state.currentOperand || !state.previousOperand || !state.operation) {
        return state;
      }
      return {
        overwrite: true,
        currentOperand: evaluate(
          state.previousOperand,
          state.currentOperand,
          state.operation,
        ).toString(),
      };
    case ACTIONS.DELETE:
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: "0" };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    default:
      throw Error("Unknown action: " + type);
  }
}

const FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (!operand) return;
  if (operand.length > 18) {
    operand = operand.slice(0, 18);
    return "ERROR";
  }
  const [int, dec] = operand.split(".");
  return dec ? `${FORMATTER.format(int)}.${dec}` : FORMATTER.format(int);
}

function CalculatorApp({ children, theme, setTheme }) {
  const [{ currentOperand }, dispatch] = useReducer(calcReducer, {
    currentOperand: "0",
  });

  return (
    <div
      className={[
        "flex min-h-screen place-content-center bg-mainBg",
        `theme${theme}`,
      ].join(" ")}
    >
      <div className="m-3 grid max-w-lg auto-rows-min flex-col content-center gap-y-4 sm:m-auto sm:min-w-[500px] sm:gap-y-7">
        <Header theme={theme} setTheme={setTheme} />
        <Screen number={formatOperand(currentOperand)} />
        <Keypad dispatch={dispatch} />
        <Footer />
        {children}
      </div>
    </div>
  );
}

CalculatorApp.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default CalculatorApp;
