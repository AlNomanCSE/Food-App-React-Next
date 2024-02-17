import React from "react";
import Meals from "./Meals";



const MealsGrid = ({ meals }) => {
  return (
    <div
      style={{
        width: "100vw",
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {meals.map((meal, index) => (
        <Meals {...meal} key={index} />
      ))}
    </div>
  );
};

export default MealsGrid;
