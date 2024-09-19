import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemsToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      key: props.id,
      amount: amount,
      price: props.price,
      description: props.description,
      name: props.name,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm addItemsToCart={addItemsToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
