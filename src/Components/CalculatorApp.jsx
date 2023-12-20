import React, { useReducer } from "react";
import Header from "./Header";
import Screen from "./Screen";
import Keypad from "./Keypad";
import Footer from "./Footer";
import { ACTIONS } from "./Utils/Actions";

function calcReducer(state, { type, payload }) {
  console.log("State : ", state);
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
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
          currentOperand: payload.digit,
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
      if (!state.currentOperand) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.currentOperand && state.previousOperand && state.operation) {
        console.log("HOURRA");
        return {
          operation: payload.operation,
          currentOperand: eval(`
                ${state.previousOperand}
                ${state.operation}
                ${state.currentOperand}
              `).toString(),
        };
      }

      console.log("HOLA");
      return {
        overwrite: true,
        currentOperand: state.currentOperand,
        operation: payload.operation,
      };
    case ACTIONS.EVALUATE:
      if (!state.currentOperand || !state.previousOperand || !state.operation) {
        return state;
      }
      return {
        overwrite: true,
        currentOperand: eval(
          `${state.previousOperand}${state.operation}${state.currentOperand}`,
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
      console.log("Dispatch default.");
      return {};
  }
}

const INT_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (!operand) return;
  if (operand.length > 18) {
    operand = operand.slice(0, 18);
    return "ERROR";
  }
  const [int, dec] = operand.split(".");
  return dec
    ? `${INT_FORMATTER.format(int)}.${dec}`
    : INT_FORMATTER.format(int);
}

function CalculatorApp({ children, theme, setTheme }) {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calcReducer,
    { currentOperand: "0" },
  );

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

export default CalculatorApp;
