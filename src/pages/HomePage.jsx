import Layout from '../pages/Layout';
import Gallery from '../components/Gallery'
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import ShoesProduct from '../assets/products/shoes-product.svg';
import ProductListing from '../components/ProductListing';

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
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      price: '$200.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
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
          <ProductListing products={featureProducts} />
        </Section>
      </div>
      
    </Layout>
  );
}
 
export default HomePage;