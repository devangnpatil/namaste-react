import resList from "../data.json";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.sections.SECTION_SEARCH_RESULT.map((card) => (
          <RestaurantCard resList={card} key={card.info.resId}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
