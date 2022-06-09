import React, { Fragment } from "react";
import style from "./Header.module.css";

import mainImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
    return (
        <Fragment>
            <header>
                <div className={style.header}>
                    <h1>FOOD</h1>
                    <div>
                        <HeaderCartButton onClick={props.onShowCart} />
                    </div>
                </div>
                <div className={style["main-image"]}>
                    <img src={mainImage} alt="A foods server on big table" />
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
