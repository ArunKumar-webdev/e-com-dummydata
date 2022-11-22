import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem,ProductGet,UpdateProduct,ProductDelete) => {
  const { id, title, price, category,thumbnail } = curElem;

  
  return (
   
      <div className="card">
      <NavLink to={`/singleproduct/${id}`}> <figure>
          <img src={thumbnail} alt={title} />
          {/* <figcaption className="caption">{category}</figcaption> */}
        </figure></NavLink>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">Cost:{price}₹</p>
          </div>
        </div>
      </div>
    
  );
};

export default Product;