const Cart = (props) => {
  console.log(props.cartItems);

  return (
    <div>
      <h1>Your Cart</h1>
      {props.cartItems.map((cartItem, index) => {
        return (
          <li key={cartItem.id}>
            {cartItem.title}
            <br />
            <img
              src={cartItem.image}
              alt={cartItem.description}
              style={{ height: "100px" }}
            />
            <br />
            price: {cartItem.price}/-{" "}
            {/* <button onClick={props.removeItem(index)}>Remove</button> */}
          </li>
        );
      })}
    </div>
  );
};
export default Cart;
