import Layout from '../pages/Layout';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import ProductCard from '../components/ProductCard';
import CollectionProduct from '../assets/products/collection-product.svg';
import ShoesProduct from '../assets/products/shoes-product.svg';
import ProductListing from '../components/ProductListing';
import Tshirt from '../assets/collections/t-shirts.svg';
import Shoe from '../assets/collections/shoes.svg';
import Pant from '../assets/collections/pants.svg';
import Headphone from '../assets/collections/headphones.svg';
import Hat from '../assets/collections/hats.svg';
import stokeShoes from '../assets/stoke-apresentation/nike-red.svg';
import CircleDashed from '../assets/circle-detail.svg';

// Collections section
import Shirt from '../assets/collection-section/t-shirt.svg';
import Shoes from '../assets/collection-section/shoes.svg';
import Headset from '../assets/collection-section/headset.svg';

import productsData from '../components/ProductsData'; // Adicione esta linha;

const HomePage = () => {
  const images = [
    { src: stokeShoes },
    { src: stokeShoes },
    { src: stokeShoes },
    { src: stokeShoes },
  ];

  // Supondo que productsData é um array de produtos
  const featureProducts = productsData.slice(0, 8); // Substitua featureProducts com productsData

  return (
    <Layout>
      <div className='flex items center justify-center bg-light-gray-3 mb-8 md:mb-12'>
        <Section>
          <div className='container c-max-width flex flex-col md:flex-row space-x-0 md:space-x-4'>
            <div className=" text-dark-gray-2 md:mt-24 text-center md:text-start tracking-wide order-2 md:order-1 mb-5 md:mb-0 md:w-1/3 px-5 md:px-0 md:pl-5">  
              <p className="text-warning px-0.5 text-sm pb-3 font-bold">Melhores ofertas personalizadas</p>
              <div className='relative md:w-[calc(100%+5rem)]'>
                <h1 className="text-dark-gray text-5xl lg:text-6xl font-extrabold pb-4">Queima de stoque Nike 🔥</h1>   
              </div>  
              <div className="relative md:w-[calc(100%+4rem)]">
                <p className="pb-4 text-base lg:text-lg">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              </div>
              <button className="bg-primary text-white px-6 md:px-8 lg:px-12 py-2 rounded-lg text-sm font-bold hover:bg-tertiary">  
                Ver Ofertas  
              </button>  
            </div>
            <div className='md:order-2 mb-5 md:mb-0 relative md:w-2/3 overflow-hidden'>
              <img src={CircleDashed} alt="" className='absolute top-0 right-[-6rem] md:right-0'/>
              <Gallery
                images={images}
                width="100%"
                height="100%"
                radius="8px"
                showThumbs={false}
              /> 
            </div>
          </div>
        </Section>
      </div>
      
      <div className='container mx-auto c-max-width'>
        <div className='px-3 md-px-0'>
          <Section 
            title="Coleções em destaque"
            titleAlign="left"
            >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 px-1 md:pr-4 pb-8 md:pb-12'>
              <div className="w-full md:w-96 h-64 pt-4 bg-blue-gray rounded-lg flex relative flex-shrink-0">
                <div className='m-5 w-1/2'>
                  <p className=' bg-lime text-sm px-4 p-2 inline-block rounded-full text-center text-dark-gray-2 font-bold'>30% OFF</p>
                  <h2 className='text-dark-gray text-[32px] font-bold pt-2 pb-4 leading-9'>Novo drop supreme</h2>
                  <button className="text-primary bg-white px-6 md:px-8 lg:px-8 py-2 rounded-lg text-sm font-bold hover:bg-light-gray-3">  
                    Comprar 
                  </button>    
                </div>
                <img src={Shirt} alt="" className='w-auto h-auto absolute bottom-0 right-0' />
              </div>
              <div className="w-full md:w-96 h-64 pt-4 bg-blue-gray rounded-lg flex relative flex-shrink-0">
                <div className='m-5 w-1/2'>
                  <p className=' bg-lime text-sm px-4 p-2 inline-block rounded-full text-center text-dark-gray-2 font-bold'>30% OFF</p>
                  <h2 className='text-dark-gray text-[32px] font-bold pt-2 pb-4 leading-9'>Coleção Adidas</h2>
                  <button className="text-primary bg-white px-6 md:px-8 lg:px-8 py-2 rounded-lg text-sm font-bold hover:bg-light-gray-3">  
                    Comprar 
                  </button>    
                </div>
                <img src={Shoes} alt="" className='w-auto h-auto absolute bottom-0 right-0' />
              </div>
              <div className="w-full md:w-96 h-64 pt-4 bg-blue-gray rounded-lg flex relative flex-shrink-0">
                <div className='m-5 w-1/2'>
                  <p className=' bg-lime text-sm px-4 p-2 inline-block rounded-full text-center text-dark-gray-2 font-bold'>30% OFF</p>
                  <h2 className='text-dark-gray text-[32px] font-bold pt-2 pb-4 leading-9'>Novo Beat Bass</h2>
                  <button className="text-primary bg-white px-6 md:px-8 lg:px-8 py-2 rounded-lg text-sm font-bold hover:bg-light-gray-3">  
                    Comprar 
                  </button>    
                </div>
                <img src={Headset} alt="" className='w-auto h-auto absolute bottom-0 right-0' />
              </div>
            </div>
            <div className='flex items-center pl-2 md:pl-0 justify-start md:justify-center'>
              <h1 className='text-dark-gray-2 font-bold pb-2 md:pl-0 md:py-4 md:text-xl'>Coleções em destaque</h1>
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-full overflow-x-auto scrolling-container'>
                <div className='flex items-center gap-8 md:gap-12 md:justify-center pl-2 md:pl-0 pr-2 md:pr-0 min-w-max'>
                  <div className="w-24 h-24 bg-white items-center justify-center flex rounded-full flex-shrink-0 hover:bg-light-gray-2">
                    <img src={Tshirt} alt="" className='w-auto h-auto' />    
                  </div>
                  <div className="w-24 h-24 bg-white items-center justify-center flex rounded-full flex-shrink-0 hover:bg-light-gray-2">
                    <img src={Pant} alt="" className='w-auto h-auto' />    
                  </div>
                  <div className="w-24 h-24 bg-white items-center justify-center flex rounded-full flex-shrink-0 hover:bg-light-gray-2">
                    <img src={Hat} alt="" className='w-auto h-auto' />    
                  </div>
                  <div className="w-24 h-24 bg-white items-center justify-center flex rounded-full flex-shrink-0 hover:bg-light-gray-2">
                    <img src={Headphone} alt="" className='w-auto h-auto' />    
                  </div>
                  <div className="w-24 h-24 bg-white items-center justify-center flex rounded-full flex-shrink-0 hover:bg-light-gray-2">
                    <img src={Shoe} alt="" className='w-auto h-auto' />    
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Produtos em destaque" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
            <ProductListing products={featureProducts} /> 
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
