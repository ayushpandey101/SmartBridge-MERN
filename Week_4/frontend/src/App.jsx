import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductList from "./components/productList";
import ProductDetails from "./pages/productDetails";
import Footer from "./components/footer";
import AboutUs from "./components/about";
import Contact from "./components/contact";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("home"); // Track the current page

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <>
          <Hero />
          {selectedProduct ? (
            <ProductDetails product={selectedProduct} />
          ) : (
            <ProductList onSelect={setSelectedProduct} />
          )}
        </>
      )}

      {currentPage === "about" && <AboutUs />}
      {currentPage === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
