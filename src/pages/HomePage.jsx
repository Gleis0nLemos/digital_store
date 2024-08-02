import Layout from '../pages/Layout';
import Gallery from '../components/Gallery'
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const images = [
    { src: 'https://via.placeholder.com/1440x681' },
    { src: 'https://via.placeholder.com/1440x681' },
    { src: 'https://via.placeholder.com/1440x681' },
    { src: 'https://via.placeholder.com/1440x681' },
    { src: 'https://via.placeholder.com/1440x681' },
  ];

  const featureProducts = [
    {
      image: 'https://via.placeholder.com/292x321',
      name: 'Product 1',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: 'https://via.placeholder.com/292x321',
      name: 'Product 1',
      price: '$200.00',
    },
    {
      image: 'https://via.placeholder.com/292x321',
      name: 'Product 1',
      price: '$150.00',
    }
  ]

  return (  
    <Layout>
      <Section title="Gallery" titleAlign="center">
        <Gallery 
          images={images}
          width="100%"
          height="500px"
          radius="8px"
          showThumbs
          />
      </Section>

      <Section
        title="Featured Products"
        titleAlign="left"
        link={{ text: 'Show More', href: 'https://example.com' }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureProducts.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              priceDiscount={product.priceDiscount}
              />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
 
export default HomePage;