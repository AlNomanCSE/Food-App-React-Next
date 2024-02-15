import React from "react";
// import Animation from "@/components/HomeHeader";
import style from "./page.module.css";
import ImageSlideShow from "@/components/ImageSlideShow";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* <div style={{ fontSize: "10rem" }}> */}
      {/* <Animation /> */}
      {/* </div> */}

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "10vw",
            top: "10vh",
          }}
        >
          <ImageSlideShow />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50vw",
            top: "10vh",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            AnotherLevel Food For
            <br />
            AnotherLevel Foodies
          </div>
          <div
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            Taste & share from all over the world.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "1.7rem",
            }}
          >
            <div className={style.joinCommunityText}>
              <Link href="/community">join the community</Link>
            </div>
            <div>
              <button className={style.btn}>
                <Link href="/meals">Explore Meals</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
