import React from "react";

import logoImage from "../../assets/images/jordan_logo.png";
import "./Logo.css";

const Logo = ({ collapsed }) => {
  return collapsed ? (
    <div className={"logo-image__container"}>
      <img src={logoImage} className={"logo-image"} />
    </div>
  ) : (
    <div className={"logo-image__container logo-title"}>
      <img src={logoImage} className={"logo-image"} />
    </div>
  );
};

export default Logo;
