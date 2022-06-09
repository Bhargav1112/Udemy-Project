import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Header/Header";
import Meals from "./Component/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    };
    const cartClosehandler = () => {
        setShowCart(false);
    };

    return (
        <CartProvider>
            {showCart && <Cart onClose={cartClosehandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
