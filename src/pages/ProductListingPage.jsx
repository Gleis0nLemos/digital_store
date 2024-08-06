import React, { useState } from 'react';
import Layout from '../pages/Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ShoesProduct from '../assets/products/shoes-product.svg';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    gender: [],
  })

  const productsData = [
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$200.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$200.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$200.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$300.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Feminino',
      price: '$200.00',
      priceDiscount: '$180.00',
    },
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Feminino',
      price: '$500.00',
      priceDiscount: '$450.00',
    },
  ];

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked 
        ? [...prevFilters[name], value] 
        : prevFilters[name].filter((item) => item !== value),
    }));
  };

  const filterOptions = [
    { 
      label: 'Marcas',
      name: 'brand',
      options: [
        { text: 'Adidas', value: 'Adidas' },
        { text: 'Balenciaga', value: 'Balenciaga' },
        { text: 'K-Swiss', value: 'K-Swiss' },
        { text: 'Nike', value: 'Nike' },
        { text: 'Puma', value: 'Puma' },
      ],
    },
    { 
      label: 'Categorias',
      name: 'category',
      options: [
        { text: 'Esporte e lazer', value: 'Esporte e lazer' },
        { text: 'Casual', value: 'Casual' },
        { text: 'Utilitário', value: 'Utilitário' },
        { text: 'Corrida', value: 'Corrida' },
      ],
    },
    { 
      label: 'Gênero',
      name: 'gender',
      options: [
        { text: 'Masculino', value: 'Masculino' },
        { text: 'Feminino', value: 'Feminino' },
        { text: 'Unissex', value: 'Unissex' },
      ],
    },
  ]

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortOrder === 'lowest') {
      return a.price - b.price;
    }
    if (sortOrder === 'highest') {
      return b.price - a.price;
    }
    return 0;
  })

  const filteredProducts = sortedProducts.filter((product) => {
    return Object.keys(filters).every((filterKey) => {
      if (filters[filterKey].length === 0) {
        return true;
      }

      return filters[filterKey].includes(product[filterKey]);
    });
  });

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
        <div className='flex pb-24'>
          <div className='pl-5 pt-5 mr-4 hidden lg:block'>
            <FilterGroup 
              title="Filtrar por"
              filters={filterOptions}
              onChange={handleFilterChange}
              />
          </div>
          <div className='pt-5 px-4 md:px-0'>
            <ProductListing products={filteredProducts} columns={3}/>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ProductListingPage;
