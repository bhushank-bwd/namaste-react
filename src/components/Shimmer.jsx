import React from "react";

export const Shimmer = () => {
  return (
    <div className="flex">
      {Array(5)
        .fill("")
        .map((e, key) => {
          return (
            <div key={key} className="rounded w-80 m-1 h-96 bg-slate-300"></div>
          );
        })}
    </div>
  );
};
