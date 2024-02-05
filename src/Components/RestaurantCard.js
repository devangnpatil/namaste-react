const RestaurantCard = ({ resList }) => {
  const { name, cuisine, rating, image } = resList.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={image.url} alt=""></img>
      <h3>{name}</h3>
      <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
      <h4>{rating.rating_text}</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestaurantCard;
