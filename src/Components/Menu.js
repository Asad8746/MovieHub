import React from "react";
import SearchBox from "./SearchBar";

const Menu = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted pointing menu">
        <div className="header item ">
          <div className="logo">
            <span className="primary_logo">MOVIE</span>{" "}
            <span className="secondary_logo">HUB</span>
          </div>
        </div>
        <div className="right menu">
          <div className="item">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
