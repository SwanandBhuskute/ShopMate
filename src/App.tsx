import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import ProductsPage from "./pages/products/productsPage";
import ProductPage from "./pages/productPage/productPage";
import HomePage from "./pages/homepage/homePage";
import AboutPage from "./pages/aboutPage/aboutPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
