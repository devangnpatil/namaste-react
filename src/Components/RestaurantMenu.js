import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + params.resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories?.[0] ||
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.length === 0 && <h1>No Menu Found</h1>}
        {itemCards.map((card) => {
          return (
            <li id={card.card.info.id}>
              {card.card.info.name} - Rs/- {card.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
