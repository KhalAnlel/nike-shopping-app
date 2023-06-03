import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Collection } from "./components/collection";
import { Home } from "./components/home";
import { ProductDetails } from "./components/collection/productDetails";
import ScrollToTop from "./components/common/scrollToTop";
import { WishlistProvider } from "./wishlistContext";

function App() {
  return (
    <div className="App">
      <WishlistProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:category?" element={<Collection />} />
          <Route
            path="/collection/productDetails/:productID"
            element={<ProductDetails />}
          />
        </Routes>
      </WishlistProvider>
    </div>
  );
}

export default App;
