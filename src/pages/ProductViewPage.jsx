import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Gallery from "../components/Gallery2";
import BuyBox from "../components/BuyBox";
import productsData from "../components/ProductsData";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { useEffect } from "react";

const ProductViewPage = () => {
  const { id } = useParams();
  
  const product = productsData.find((p) => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const recommendedProducts = productsData.slice(0, 4);

  return (
    <Layout>
      <div className="c-max-width container mx-auto p-5">
        <p className="text-sm text-dark-gray-3 pb-8">Home / Produtos / {product.category} / {product.brand} / {product.name}</p>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 mb-4 lg:mb-0">
            <Gallery
              images={product.images}
              showThumbs
              width="100%"
              height="100%"
              radius="4px"
            />
          </div>

          <div className="w-full md:ml-3 lg:w-2/5 lg:pl-8">
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
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
