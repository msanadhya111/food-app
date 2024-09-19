import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { Fragment } from "react";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const onAddHandler = (item) => {
        cartCtx.addItem(item);
    }
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const cartItems = (
        <ul className={classes['cart-items']}> {cartCtx.items.map((item) => {
            return (
                <CartItems 
                    key={item.id}
                    price={item.price} 
                    name={item.name} 
                    amount={item.amount} 
                    onRemove={onRemoveHandler}
                    onAdd={onAddHandler}
                ></CartItems>
            )
        })}
        </ul>
    );
    return (
        <Fragment>
            (<Modal>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.modalDialog}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>)
        </Fragment>
    )
};

export default Cart;