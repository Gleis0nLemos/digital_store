import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ExamplePage from "../components/ExamplePage";
import ProductListing from "../components/ProductListing";
import ProductsListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;