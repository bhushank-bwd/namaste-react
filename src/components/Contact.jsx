import React, { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Functional timer called");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>Contact</div>;
};
