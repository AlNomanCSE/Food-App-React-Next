"use client";
import style from "./common.module.css";

import React from "react";

const error = () => {
  return (
    <div>
      <span
        style={{ fontSize: "7rem", fontWeight: "700", textAlign: "center" }}
        className={style.headTag}
      >
        Some Error is occuring....
      </span>
    </div>
  );
};

export default error;
