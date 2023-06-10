import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Collection } from "./components/collection";
import { Home } from "./components/home";
import { ProductDetails } from "./components/collection/productDetails";
import ScrollToTop from "./components/common/scrollToTop";
import { WishlistProvider } from "./wishlistContext";
import { CartProvider } from "./cartContext";
import Checkout from "./components/checkout";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/collection/:category?" element={<Collection />} />{" "}
            <Route
              path="/collection/productDetails/:productID"
              element={<ProductDetails />}
            />{" "}
            <Route path="/checkout/" element={<Checkout />} />{" "}
            <Route path="/about" element={<About />} />{" "}
          </Routes>{" "}
        </WishlistProvider>{" "}
      </CartProvider>{" "}
    </div>
  );
}

export default App;
