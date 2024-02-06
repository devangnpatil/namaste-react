const RestaurantCard = ({ resList }) => {
  const { name, cuisine, rating, url, rating_text } = resList;
  return (
    <div className="res-card">
      <img className="res-logo" src={url} alt=""></img>
      <h3>{name}</h3>
      <h4>{cuisine.map((c) => c).join(", ")}</h4>
      <h4>{rating_text}</h4>
      <h4>38 mins</h4>
    </div>
  );
};
export default RestaurantCard;
