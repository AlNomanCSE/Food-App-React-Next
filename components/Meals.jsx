import React from "react";
import style from "./Meals.module.css";
import Image from "next/image";
import Link from "next/link";

const Meals = ({ title, slug, image, summary, creator }) => {
  return (
    <>
      <div className={style.card}>
        <Image
          src={image}
          className={style.image}
          alt="image"
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "70%",
            objectFit: "cover",
          }}
        />

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
              <Link
                href={`/meals/${slug}`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                view more
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
