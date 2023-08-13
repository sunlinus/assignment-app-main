import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import CartItem from "../UI/CartItem";
import classes from "./Cart.module.css";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const totalBill = useSelector((state) => state.cart.totalBill);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <>
      <div style={{ display: "grid", placeItems: "center" }}>
        {cartProducts.length !== 0 && (
          <span className={classes.bill}>Total Bill : {totalBill}</span>
        )}
      </div>
      <section className={classes.products}>
        <ul>
          {cartProducts?.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              quantity={product.quantity}
            />
          ))}
        </ul>

        <div style={{ display: "grid", placeItems: "center" }}>
          {cartProducts.length !== 0 && (
            <button onClick={clearCartHandler}>Clear cart</button>
          )}
          {cartProducts.length === 0 && (
            <p style={{ color: "white", justifyContent: "center" }}>
              Cart is empty
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
