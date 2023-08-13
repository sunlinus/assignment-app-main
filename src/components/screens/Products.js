import classes from "./Cart.module.css";
import ProductItem from "../UI/ProductItem";
import styles from "../UI/ProductItem.module.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchItem } from "../../store/item";
import { useEffect } from "react";
import { filterActions } from "../../store/filter";

export default function Products() {
  const item = useSelector((state) => state.item.item);
  const status = useSelector((state) => state.item.status);
  const search = useSelector((state) => state.filter.search);
  const sortType = useSelector((state) => state.filter.sortType);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItem());
    }
  }, [status, dispatch, item]);

  const searchHandler = (event) => {
    dispatch(filterActions.change(event.target.value));
  };

  const ascendHandler = () => {
    dispatch(filterActions.ascending());
  };

  const descendHandler = () => {
    dispatch(filterActions.descending());
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          margin: "15px",
          placeItems: "center",
          gridGap: "20px",
        }}
      >
        <div>
          <input
            className={styles.search}
            type="text"
            placeholder="search here"
            onChange={searchHandler}
          />
        </div>
        <div>
          <button style={{ color: "white" }} onClick={ascendHandler}>
            Low to High
          </button>{" "}
          <button style={{ color: "white" }} onClick={descendHandler}>
            High to Low
          </button>
        </div>
      </div>
      <section className={classes.products}>
        <ul>
          {item?.products
            ?.filter((product) =>
              product.title.toLowerCase().startsWith(search.toLowerCase())
            )
            .sort((product1, product2) => {
              if (sortType === "ASCEND") {
                return product1.price - product2.price;
              }
              if (sortType === "DESCEND") {
                return product2.price - product1.price;
              }
            })
            .map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
            ))}
        </ul>
      </section>
    </>
  );
}
