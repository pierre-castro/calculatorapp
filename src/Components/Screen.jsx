import React from "react";

function Screen({ number = "0" }) {
  return (
    <div className="bg-screen text-textColor rounded-lg p-8 text-right text-4xl">
      {number}
    </div>
  );
}

export default Screen;
