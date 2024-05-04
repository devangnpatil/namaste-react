import { useEffect, useState } from "react";
import { RESTAURANTS_LIST } from "../utils/constants";
const useFilteredRestaurants = () => {
  const [filteredRestaurants, setFilterdRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST);
    const response = await data.json();
    setFilterdRestaurants(
      response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return filteredRestaurants;
};
export default useFilteredRestaurants;
