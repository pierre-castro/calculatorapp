import React from "react";

function Screen({ number = "0" }) {
  return (
    <div className="rounded-lg bg-screen p-4 text-right text-4xl text-textColor sm:p-6">
      {number}
    </div>
  );
}

export default Screen;
