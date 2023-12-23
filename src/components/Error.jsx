import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  //   const err = useRouteError();
  //   console.log(err);
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>{status}</h1>
      <h2>{statusText}</h2>
    </div>
  );
};
