import ProductCard from "./ProductCard";

const ProductListing = ({ products, columns=4 }) => {
  const getGridClasses = () => {
    switch (columns) {
      case 2: 
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 4: 
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
  }
  return (  
    <div className={`grid ${getGridClasses()} gap-2 md:gap-3 lg:gap-5`}>
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