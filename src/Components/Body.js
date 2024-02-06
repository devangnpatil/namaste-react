import { useState, useEffect } from "react";
import resList from "../data";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    setListOfRestaurants(resList);
  }, []);
  const handleClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.rating_text >= 4;
    });
    console.log(filteredList);
    setListOfRestaurants(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((card) => (
          <RestaurantCard resList={card} key={card.resId}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
