import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    console.log("clicked");
    // setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} {itemCards.length ? `(${itemCards.length})` : ""}
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
