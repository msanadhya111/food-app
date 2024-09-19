import classes from "./CartItems.module.css";

const CartItems = (props) => {
    const price =props.price;
    return (
        <li className={classes['cart-items']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span>{price}</span>
                    <span>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItems;