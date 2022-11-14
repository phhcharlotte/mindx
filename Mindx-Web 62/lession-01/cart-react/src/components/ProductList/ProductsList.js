import React from "react";
import Products from "../Product/Products";
const ProductsList = (props) => {
  const { products, onViewProductDetail } = props;

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        gap: "8px",
      }}
    >
      {products &&
        products.map((productItem, index) => {
          const { name, img, price, id } = productItem;
          const key = `${index}-${name}-${id}`;
          return (
            <Product
              onViewProductDetail={onViewProductDetail}
              title={name}
              img={img}
              price={price}
              id={id}
              key={key}
            />
          );
        })}
    </div>
  );
};

export default ProductsList;
