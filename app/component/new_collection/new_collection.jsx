import React, { useState, useEffect } from "react";

import Item from "../items/item";
import "../../globals.css";
import "./new_collection.css";
import new_collections from "../assets/new_collections";

const New_Collection = () => {


  return (
    <div className="collection">
      <h1 className="special-heading">NEW COLLECTION</h1>
      <div className="container">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image_src={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default New_Collection;
