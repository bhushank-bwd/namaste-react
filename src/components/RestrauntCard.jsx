import "boxicons";

const RestrauntCard = ({ restraurant }) => {
  const { cloudinaryImageId, name, avgRating, areaName, cuisines } =
    restraurant;
  return (
    <div className="restro-item">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restro-img"
      />
      <h2>{name}</h2>
      <h3 className="rating">
        <box-icon color="#a18907" type="solid" name="star"></box-icon>
        <span>{avgRating}</span>
      </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestrauntCard;
