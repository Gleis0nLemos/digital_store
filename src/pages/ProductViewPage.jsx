import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";

const ProductViewPage = () => {
  // const { id } = useParams();
  // const product = productsData.find((p) => p.id === id);

  // if (!product) {
  //   return <p>Produto não encontrado</p>;
  // }

  // const relatedProducts = productsData.filter((p) => p.category === product.category && p.id !== id);
  
  return (  
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <div className="w-full lg:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
              />
          </div>

          {/* info */}
          <div className="w-full lg:w-1/2 lg:pl-8">`
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>`
            <p>
              {product.priceDiscount ? (
                <>
                  <span className="line-through text-light-gray-2 text-lg mr-2">
                    {product.price}
                  </span>
                  <span className="text-dark-gray-2 text-xl">
                    {product.price}
                  </span>
                </>
              ) : (
                <span className="text-dark-gray-2 text-xl">{product.price}</span>
              )}
            </p>
            <p className="text-lg text-dark-gray-2 mb-4">{product.description}</p>
            <button className="bg-primary text-white py-2 px-4 rounded">
              COMPRAR
            </button>
          </div>
        </div>         
            
        {/* produtos relacionados */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Produtos relacionados</h2>
          <div className="flex overflow-x-auto">
            {relatedProducts.map((relatedProducts) => {
              <div key={relatedProducts} className="w-60 mr-4">
                <ProductCard 
                  image={relatedProducts.image}
                  name={relatedProducts.name}
                  price={relatedProducts.price}
                  priceDiscount={relatedProducts.priceDiscount}
                  />                
              </div>
            })}
          </div>
        </section>  
      </div>
    </Layout>
  );
}
 
export default ProductViewPage;