import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (  
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          />
      ))}
    </div>

  );
}
 
export default ProductListing;