import Layout from '../pages/Layout';
import Gallery from '../components/Gallery'
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import CollectionProduct from '../assets/products/collection-product.svg';
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
      <div className='bg-white flex items-center justify-center'>
        <div className='container flex-col md:flex-row flex items-center justify-center py-16 md:py-24 c-max-width p-5'>
          <div className='relative flex items-center mr-8 md:mr-0 justify-start'>
            <div className="w-96 h-96 ml-8 md:ml-20 bg-secondary-gradient items-center flex rounded-full">
            </div>
            <img src={CollectionProduct} alt="" className='absolute w-auto h-auto' />  
          </div>
          
          <div className="text-dark-gray-2 mx-4 md:ml-12 lg:ml-24 tracking-wide">  
            <p className="text-warning px-0.5 md:text-primary text-sm pb-3 font-bold">Oferta especial</p>  
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">Air Jordan edição de colecionador</h1>  
            <p className="pb-4 text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>  
            <button className="bg-primary text-white px-6 md:px-8 lg:px-12 py-2 rounded-lg text-sm font-bold hover:bg-tertiary">  
              Ver Oferta  
            </button>  
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default HomePage;