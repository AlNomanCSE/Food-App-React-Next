import React from "react";
import Animation from "@/components/HomeHeader";
import style from "./page.module.css"
const page = ({}) => {
  return (
    <>
      {/* <div style={{ fontSize: "10rem" }}> */}
      {/* <Animation /> */}
      {/* </div> */}

      <div style={{ position: "relative" }}>
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
            <div className={style.joinCommunityText}>join the community</div>
            <div>
              <btn className={style.btn}>Explore Meals</btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
