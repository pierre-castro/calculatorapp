import React from "react";

function Footer() {
  return (
    <div className="text-center text-sm font-thin text-textColor">
      Challenge by{" "}
      <a
        className="text-equalsKey hover:text-equalsKeyShadow hover:underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-equalsKey hover:text-equalsKeyShadow hover:underline"
        href="https://github.com/pierre-castro"
      >
        Pierre Castro
      </a>
      .
    </div>
  );
}

export default Footer;
