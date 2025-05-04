import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import ProductsPage from "./pages/products/productsPage";
import ProductPage from "./pages/productPage/productPage";
import HomePage from "./pages/homepage/homePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define the routes for the app */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          {/* Add route for ProductsPage */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
