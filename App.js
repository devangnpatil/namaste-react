import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.json";
/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, Cuisine, etc, Delivery Time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
          alt=""
          title=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resList }) => {
  const { name, cuisine, rating, image } = resList.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={image.url} alt=""></img>
      <h3>{name}</h3>
      <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
      <h4>{rating.rating_text}</h4>
      <h4>38 mins</h4>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
