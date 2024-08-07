import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import productsData from "../components/ProductsData";
import ProductOptions from "../components/ProductOptions";
import ShoesProduct from "../assets/products/shoes-product.svg"
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductViewPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  // const relatedProducts = productsData.filter((p) => p.category === product.category && p.id !== id);

  const recommendedProducts = [
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
  ]
  
  return (  
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <div className="w-full lg:w-1/2 mb-4 lb:mb-0">
            <Gallery 
              images={product.images}
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
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <h3 className="text-lg font-semibold mb-2">Tamanhos</h3>
              <ProductOptions 
                options={product.sizeOptions}
                shape="square"
                radius="4px"
                type="text"
                />

              <h3 className="text-lg font-semibold mb-2 mt-4">Cores</h3>
              <ProductOptions 
                options={product.colorOptions}
                shape="circle"
                type="color"
                />
            </BuyBox>
          </div>
        </div>         
          <Section
            title="Produtos relacionados"
            titleAlign="left"
            link={{ text: 'Ver todos', href: '/products'}}
            >
            <ProductListing products={recommendedProducts} />
          </Section>
      </div>
    </Layout>
  );
};
 
export default ProductViewPage;