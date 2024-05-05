export const RestaurantCard = ({ resList }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId, sla } =
    resList.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg height-100 w-100"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
      ></img>
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
