import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Collection } from "./components/collection";
import { Home } from "./components/home";
import { ProductDetails } from "./components/productDetails";
import { Products } from "./components/products";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:category" element={<Collection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:productID" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
