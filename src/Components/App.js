import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";
import ProductList from "./productList";
const App = () => {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };
  //   const removeItem = (item) => {
  //     const newCart = cart;
  //     setCart(newCart.splice(item, 1));
  //   };
  useEffect(() => {
    const products = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();

      setList(data);
    };
    products();
  }, []);
  if (list.length) {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ProductList
                list={list}
                addToCart={addToCart}
                cartCount={cart.length}
              />
            )}
          />

          <Route path="/cart" exact render={() => <Cart cartItems={cart} />} />
          <Route path="/product" exact render={() => <Product />} />
        </Switch>
      </Router>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default App;
