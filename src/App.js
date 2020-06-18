import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

/**Now that we've created our `ProductContext` we can import into
 * our `App.js`. Now we can start providing data across our
 * application! */
import { ProductContext } from "../src/contexts/ProductContext";
import { CartContext } from "../src/contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  /* - In `App.js` there is a function called `addItem`.
	 Finish writing the logic in this function to be able
	 to add the given item to the shopping cart */
  const addItem = (item) => {
    // add the given item to the cart
     setCart(products);
     console.log("Cart: ", cart.length, "Item: ", item)
  };

  return (
    <div className="App">
      {/** Wrap all of your components/routes in `App.js`
		 inside of `ProductContext.Provider` component. */}

      {/*In the value prop we'll pass in the products state, and an addItem 
		function that will allow us to add books to the cart.*/}
      <ProductContext.Provider value={{ products, addItem }}>
        {" "}
        {/* Next pass a value prop to your `Provider`. */}
        <CartContext.Provider value={{cart}}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart/>
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
