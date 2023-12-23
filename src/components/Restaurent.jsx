import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import "boxicons";

export const Restaurent = () => {
  //   const params = useParams();
  //   console.log(params);

  const { id } = useParams(); //destructure on fly
  useEffect(() => {
    getDetails();
  }, []);
  const [details, setDetails] = useState(null);
  const getDetails = async () => {
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7035291&lng=74.2432304&restaurantId=124016&catalog_qa=undefined&submitAction=ENTER

    let res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7035291&lng=74.2432304&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    res = await res.json();
    setDetails(res?.data?.cards[0]?.card?.card?.info);
  };

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
