import React from "react";

const Button = (props) => {
  return (
    <button className="bg-lightblue hover:bg-light  pt-3 pb-3 pr-8 pl-8 rounded-2xl hover:scale-110 ease-in duration-100">
      <span>{props.icon}</span>
      <p className="text-dark font-semibold text-lg">{props.title}</p>
    </button>
  );
};

export default Button;
