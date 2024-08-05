import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ExamplePage from "../components/ExamplePage";
import ProductListing from "../components/ProductListing";
import ProductsListingPage from "../pages/ProductListingPage";

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsListingPage />} />
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;