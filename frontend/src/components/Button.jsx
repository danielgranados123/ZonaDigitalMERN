import React from "react";

const Button = ({ label, actionButton, colorClass, type = "button" }) => {
  let className = "";

  if (colorClass === "primary") {
    className =
      "m-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600";
  } else if (colorClass === "secondary") {
    className =
      "m-1 px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600";
  } else {
    className =
      "m-1 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600";
  }

  return (
    <button type={type} className={className} onClick={actionButton}>
      {label}
    </button>
  );
};

export default Button;