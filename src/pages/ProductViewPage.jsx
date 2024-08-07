import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import productsData from "../components/ProductsData";

const ProductViewPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const relatedProducts = productsData.filter((p) => p.category === product.category && p.id !== id);

  const images = [
    { src: product.image },
    { src: product.image },
    { src: product.image },
    { src: product.image },
    { src: product.image }
  ]
  
  return (  
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <div className="w-full lg:w-1/2 mb-4 lb:mb-0">
            <Gallery 
              images={images}
              showThumbs
              width= "700px"
              height= "570px"
              radius="4px"
              />
          </div>
        

          {/* info */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <BuyBox 
              name={product.name}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              />
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
};
 
export default ProductViewPage;