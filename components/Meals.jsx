import React from "react";
import style from "./Meals.module.css";
import Image from "next/image";

const Meals = ({ title, slug, image, summary, creator }) => {
  return (
    <>
      <div className={style.card}>
        <Image src={image.src} className={style.image} alt="image" />
        <div style={{ height: "50%", padding: ".8rem" }}>
          <div>
            <span
              style={{ fontSize: "1.4rem", color: "#fff", fontWeight: "600" }}
            >
              {title}
            </span>
            <br />
            <span style={{ fontSize: ".7rem", color: "#fff" }}>
              by -{creator}
            </span>
          </div>
          <div style={{ color: "#fff", padding: ".5rem 0" }}>{summary}</div>
          <div
            style={{
              textAlign: "right",
              padding: ".5rem",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            <span
              style={{
                padding: ".5rem .7rem",
                borderRadius: "5px",
                fontSize: ".8rem",
              }}
              className={style.bgcolor}
            >
              view details
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
