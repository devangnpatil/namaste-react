import { useEffect, useState } from "react";
import { RESTAURANTS_LIST } from "./constants";
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST);
    const response = await data.json();
    setListOfRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantList;
