import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
export default function ItemList({ items }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, defaultPrice, imageId } =
          item.card.info;
        return (
          <div
            key={id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            data-testid="food-item"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span>- ₹ {(price && price / 100) || defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2  shadow-lg mx-16 rounded-lg bg-black text-white"
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  Add +
                </button>
              </div>
              <img src={`${CDN_URL}${imageId}`} alt="" className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
