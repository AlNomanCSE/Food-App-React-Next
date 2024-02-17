import React, { Suspense } from "react";
import style from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

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
          <Suspense
            fallback={
              <span
                style={{
                  fontSize: "5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
                className={style.headTag}
              >
                Fetching meals..
              </span>
            }
          >
            <Meals />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default MealsPage;
