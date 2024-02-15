import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals-grid";
import dummyMeals from "@/assets/data/initdb";
const MealsPage = () => {
  return (
    <>
      <div style={{ width: "60vw" }}>
        <div
          style={{ margin: "2rem", fontSize: "2.5rem", fontWeight: "900" }}
          className={style.headTag}
        >
          Delicious meals, created by you
        </div>
        <div
          style={{
            margin: "2rem",
            fontSize: "1rem",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#ECB159",
          }}
        >
          Choose your recipe and cook it yourself.It is easy and fun
        </div>
        <div className={`${style.shareClass}`}>
          <Link href="/meals/share" className={style.plainLink}>
            Share your meals
          </Link>
        </div>
        <main>
          <MealsGrid meals={dummyMeals}/>
        </main>
      </div>
    </>
  );
};

export default MealsPage;
