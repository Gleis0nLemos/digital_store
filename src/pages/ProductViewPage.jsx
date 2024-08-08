import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery2";
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
      <div className="c-max-width container mx-auto p-5">
        <p className="text-sm text-dark-gray-3 pb-8">Home / Produtos / #pesquisa / {product.brand} / {product.name}</p>
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <div className="w-full lg:w-3/5 mb-4 lb:mb-0">
            <Gallery 
              images={product.images}
              showThumbs
              width= "100%"
              height= "100%"
              radius="4px"
              />
          </div>
        

          {/* info */}
          <div className="w-full ml-3 lg:w-2/5 lg:pl-8">
            <BuyBox 
              name={product.name}
              category={product.category}
              brand={product.brand}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <h3 className="text-sm text-light-gray font-semibold mb-2">Tamanho</h3>
              <ProductOptions 
                options={product.sizeOptions}
                shape="square"
                radius="4px"
                type="text"
                />

              <h3 className="text-sm text-light-gray font-semibold mb-2 mt-4">Cor</h3>
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