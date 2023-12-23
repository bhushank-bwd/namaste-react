import React from "react";

export const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(5)
        .fill("")
        .map((e, key) => {
          return <div key={key} className="shimmer-card"></div>;
        })}
    </div>
  );
};
