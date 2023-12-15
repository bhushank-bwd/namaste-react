import "boxicons";

const RestrauntCard = ({ restraurant }) => {
  const { img, name, rating, address, cusine } = restraurant;
  return (
    <div className="restro-item">
      <img src={img} alt="restro-img" />
      <h2>{name}</h2>
      <h3 className="rating">
        <box-icon color="#a18907" type="solid" name="star"></box-icon>
        <span>{rating}</span>
      </h3>
      <h3>{cusine.join(", ")}</h3>
      <h4>{address}</h4>
    </div>
  );
};
export default RestrauntCard;
