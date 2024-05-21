import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import resList from "../data.json";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_LIST } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const handleClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.rating_text >= 4;
    });
    setListOfRestaurants(filteredList);
  };

  const changeHandler = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    fetchData(RESTAURANTS_LIST);
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST);
    const response = await data.json();
    setListOfRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterdRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const { loggedInUser, setUserName } = useContext(UserContext);
  if (listOfRestaurants.length === 0) {
    return <Shimmer loading="cards"></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-pink-200 m-4 rounded-lg hover:bg-yellow-200 text-white"
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

        <div className="m-4 p-4">
          UserName:
          <input
            type="text"
            className="border border-black p-2 rounded-mds"
            onChange={changeHandler}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex  flex-wrap">
        {filterdRestaurants.map((card) => (
          <Link to={"/restaurants/" + card.info.id} key={card.info.id}>
            {/* {if restaturant is open then add flag open} */}
            {card.info.isOpen ? (
              <RestaurantCardPromoted resList={card}></RestaurantCardPromoted>
            ) : (
              <RestaurantCard resList={card}></RestaurantCard>
            )}
            <RestaurantCard resList={card}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
