import React from "react";

const Button = ({ text, size, color, bgColor, borderRadius }) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
