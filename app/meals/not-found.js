import React from "react";
import style from "../common.module.css";
const NotFound = () => {
  return (
    <div>
      <span
        style={{ fontSize: "7rem", fontWeight: "700", textAlign: "center" }}
        className={style.headTag}
      >
        Meals Not Found
      </span>
    </div>
  );
};

export default NotFound;
