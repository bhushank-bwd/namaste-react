import "boxicons";

const RestrauntCard = ({ restraurant }) => {
  const { cloudinaryImageId, name, avgRating, areaName, cuisines } =
    restraurant;
  console.log(restraurant, "restr");
  return (
    <div className="rounded-md p-2 w-80 m-1 shadow-lg bg-pink-100 h-[26rem]">
      <img
        className="w-80 h-60 rounded"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restro-img"
      />
      <h2>{name}</h2>
      <h3 className="w-max p-1 rounded-md text-sm flex">
        <box-icon color="#a18907" type="solid" name="star"></box-icon>
        <span className="p-1">{avgRating}</span>
      </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestrauntCard;
