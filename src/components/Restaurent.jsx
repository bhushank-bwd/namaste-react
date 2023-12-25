import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import "boxicons";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const Restaurent = () => {
  //   const params = useParams();
  //   console.log(params); destructure on fly

  const { id } = useParams();
  const details = useRestaurant(id);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(details));
  };
  return (
    <>
      {" "}
      {details ? (
        <div className="flex">
          <div className="rounded-md w-[45%] p-2 m-[10%] text-center">
            <img
              className="rounded h-96 m-auto"
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
            <button
              className="bg-blue-500 font-medium outline-none text-md text-white rounded p-2 h-12 w-32 mb-0"
              onClick={addToCart}
            >
              Add To Cart
            </button>
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
