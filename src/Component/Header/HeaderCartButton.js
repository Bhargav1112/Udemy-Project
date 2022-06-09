import React, { useContext, useEffect, useState } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce(
        (currentNumber, item) => currentNumber + item.amount,
        0
    );

    const btnClass = `${style.button} ${btnIsHighlighted ? style.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) return;
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button onClick={props.onClick} className={btnClass}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Order</span>
            <span className={style.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;
