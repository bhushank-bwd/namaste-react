import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import "boxicons";
import useRestaurant from "../utils/useRestaurant";

export const Restaurent = () => {
  //   const params = useParams();
  //   console.log(params); destructure on fly

  const { id } = useParams();
  const details = useRestaurant(id);
  return (
    <>
      {" "}
      {details ? (
        <div className="details">
          <div className="restro-item">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${details.cloudinaryImageId}`}
              alt="restro-img"
            />
            <h2>{details.name}</h2>
            <h3 className="rating">
              <box-icon color="#a18907" type="solid" name="star"></box-icon>
              <span>{details.avgRating}</span>
            </h3>
            <h3>{details.cuisines.join(", ")}</h3>
            <h4>{details.areaName}</h4>
          </div>
          <div className="restro-item">
            <ul></ul>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};
