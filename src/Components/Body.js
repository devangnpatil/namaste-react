import { useState, useEffect } from "react";
// import resList from "../data.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const handleClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.rating_text >= 4;
    });
    setListOfRestaurants(filteredList);
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(
      "DATA",
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterdRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the card and update the UI

              const filterRestuarants = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterdRestaurants(filterRestuarants);
            }}
          >
            Search
          </button>
        </div>
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
        {filterdRestaurants.map((card) => (
          <RestaurantCard resList={card} key={card.info.id}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
