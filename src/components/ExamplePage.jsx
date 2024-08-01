import Section from "./Section";
import ProductCard from "./ProductCard";

const ExamplePage = () => {
  return (  
    <div>
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
        titleAlign="Center"
        >
        <p>Image 1</p>
        <p>Image 2</p>
      </Section>
    </div>
  );
}
 
export default ExamplePage;