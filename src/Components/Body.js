import { useState, useEffect } from "react";
// import resList from "../data.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.rating_text >= 4;
    });
    console.log(filteredList);
    setListOfRestaurants(filteredList);
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setListOfRestaurants(response);
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
                restaurant.name.includes(searchText)
              );
              setListOfRestaurants(filterRestuarants);
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
        {listOfRestaurants &&
          listOfRestaurants.map((card) => (
            <RestaurantCard resList={card} key={card.resId}></RestaurantCard>
          ))}
      </div>
    </div>
  );
};

export default Body;
