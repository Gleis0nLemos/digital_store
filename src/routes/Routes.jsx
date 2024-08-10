import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ProductListing from "../components/ProductListing";
import ProductsListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyRequestsPage from "../pages/MyRequestsPage";
import CardViewPage from "../pages/CardViewPage";

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="/products/card" element={<CardViewPage />} />
        <Route path="/myproducts" element={<MyRequestsPage /> } />
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;