import React from "react";
import style from "../common.module.css";
const loading = () => {
  return (
    <div style={{ fontSize: "7rem", fontWeight: "700", textAlign: "center" }}>
      <span style={{ fontSize: "7rem", fontWeight: "700", textAlign: "center" }} className={style.headTag}>Fetching meals....</span>
    </div>
  );
};

export default loading;
