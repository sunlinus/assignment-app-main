import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";
import Card from "./Card";
import { cartActions } from "../../store/cart";

function ProductItem(props) {
  const dispatch = useDispatch();

  const { title, description, image, price, id } = props;

  const addProductHandler = () => {
    dispatch(
      cartActions.addProduct({
        id: id,
        title: title,
        image: image,
        price: price,
      })
    );
    dispatch(cartActions.calculateBill());
  };

  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <img src={image} alt="failed to load" className={classes.image} />
        <div className={classes.details}>
          <h3 style={{ textAlign: "center" }}>{title}</h3>
          <p style={{ textAlign: "center", fontSize: "14px" }}>{description}</p>
          <div className={classes.actions}>
            <span className={classes.price}>&#8377;{price}</span>
            <button onClick={addProductHandler}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
