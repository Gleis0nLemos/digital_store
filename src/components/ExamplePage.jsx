import Section from "./Section";
import ProductCard from "./ProductCard";
import Gallery from '../components/Gallery';
import Layout from "../pages/Layout";

const ExamplePage = () => {
  const images = [
    { src: 'https://via.placeholder.com/292x321' },
    { src: 'https://via.placeholder.com/292x321' },
    { src: 'https://via.placeholder.com/292x321' },
    { src: 'https://via.placeholder.com/292x321' },
    { src: 'https://via.placeholder.com/292x321' },
  ]

  return (  
    <Layout>
      <Section
        title="Products"
        titleAlign="left"
        link={{
          text: "Show More",
          href: "#"
        }}
        >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard 
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
           <ProductCard
            image="https://via.placeholder.com/292x321"
            name="Product 1"
            price="$100.00"
            priceDiscount="$80.00"
           />
        </div>
      </Section>

      <Section
        title="Gallery"
        titleAlign="center"
        >
        <Gallery 
          images={images}
          width="100%"
          height="500px"
          radius="8px"
          showThumbs
          />
      </Section>
    </Layout>
  );
}
 
export default ExamplePage;