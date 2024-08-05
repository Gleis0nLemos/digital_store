import React, { useState } from 'react';
import Layout from '../pages/Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ShoesProduct from '../assets/products/shoes-product.svg';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('');

  const productsData = [
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
  ];

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortOrder === 'lowest') {
      return a.price - b.price
    }
    if (sortOrder === 'highest') {
      return b.price - a.price
    }
    return 0;
  })

  return (
    <Layout> 
      <div className='container mx-auto c-max-width'>
        <div className='w-76 mr-8'>
          <label htmlFor="sort" className='block text-dark-gray-2 text-16px mb-2'>
            Ordenar por
          </label>
          <select 
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className='w-full h-15 p-2 border border-gray-300 rounded-md text-dark-gray-2'
            >
            <option value="">Selecione...</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </select>
        </div>
        <div className='flex'>
          <div className='p-5'>
            <ProductListing products={productsData} columns={3}/>
          </div>
        </div>
        </div>
    </Layout>
  )
};

export default ProductListingPage;
