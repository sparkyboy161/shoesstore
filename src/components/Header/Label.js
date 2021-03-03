import React from "react";
import "./Label.css";

const Label = ({collapsed}) => {
  return <span className="label__container" style={collapsed?{display:'none'}: {}}>tiệm giày <br/>của Huy</span>;
};

export default Label;
