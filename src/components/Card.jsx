import React from "react";

const Card = ({product, deleteProduct, index}) => {
  return (
    <div className="/d-flex /gap-3">
      <div className="card /d-flex" style={{width: '18rem'}}>
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.category}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>

          <button className="btn btn-danger" onClick={()=>deleteProduct(index)}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
