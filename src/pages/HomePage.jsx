import Layout from '../pages/Layout';
import Gallery from '../components/Gallery'
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import ShoesProduct from '../assets/products/shoes-product.svg';

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
      image: ShoesProduct,
      name: 'Tênis',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      name: 'Tênis',
      price: '$150.00',
    }
  ]

  return (  
    <Layout>
      <div className='container mx-auto c-max-width p-5'>
        {/* <Section title="Gallery" titleAlign="center">
        <Gallery 
          images={images}
          width="100%"
          height="500px"
          radius="8px"
          showThumbs
          />
        </Section> */}

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: 'https://example.com' }}
          >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
            {featureProducts.map((product, index) => (
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
        </Section>
      </div>
      
    </Layout>
  );
}
 
export default HomePage;