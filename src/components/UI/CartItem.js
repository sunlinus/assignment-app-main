import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import Card from "./Card";
import { cartActions } from "../../store/cart";

function CartItem(props) {
  const { image, title, quantity, id } = props;

  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(cartActions.removeProduct({ id }));
    dispatch(cartActions.calculateBill());
  };

  const decreaseProductHandler = () => {
    dispatch(cartActions.decreaseProduct({ id }));
    dispatch(cartActions.calculateBill());
  };

  const increaseProductHandler = () => {
    dispatch(cartActions.increaseProduct({ id }));
    dispatch(cartActions.calculateBill());
  };


  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <img src={image} alt="failed to load" className={classes.image} />
        <div className={classes.details}>
          <h3 style={{ textAlign: "center" }}>{title}</h3>
          <div className={classes.actions}>
            <button onClick={decreaseProductHandler}>-</button>
            <span className={classes.quantity}>Quantity : {quantity}</span>
            <button onClick={increaseProductHandler}>+</button>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <button
              onClick={removeProductHandler}
              style={{ width: "150px", height: "40px" }}
            >
              Remove
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default CartItem;
