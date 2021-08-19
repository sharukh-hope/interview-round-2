import { useHistory } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const ProductList = (props) => {
  let history = useHistory();

  const products = props.list;

  const handleClick = () => {
    history.push("/product");
  };

  return (
    <div>
      <div>
        <button onClick={() => history.push("/cart")}>cart</button> Items in
        cart: {props.cartCount}
      </div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title}
              <br />
              <img
                src={product.image}
                alt={product.description}
                style={{ height: "100px" }}
              />
              <br />
              price: {product.price}/-{" "}
              <button onClick={() => props.addToCart(product)}>
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductList;
