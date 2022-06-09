import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalCartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    function cartItemAddHandler(item) {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    const cartItem = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    ));

    return (
        <Modal cartHide={props.onClose}>
            <ul className={classes["cart-items"]}>{cartItem}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalCartAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    onClick={props.onClose}
                    className={classes["button--alt"]}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
