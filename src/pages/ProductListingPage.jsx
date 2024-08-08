import React, { useState } from 'react';
import Layout from '../pages/Layout';
import ProductListing from '../components/ProductListing';
import ShoesProduct from '../assets/products/shoes-product.svg';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    state: [],
  })

  const productsData = [
    {
      image: ShoesProduct,
      category: 'Tênis',
      name: 'K-Swiss V8 - Masculino',
      brand: 'K-Swiss',
      gender: 'Masculino',
      state: 'Novo',
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
      state: 'Usado',
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
        { text: 'Adidas', value: 'Adidas', type: 'checkbox' },
        { text: 'Balenciaga', value: 'Balenciaga', type: 'checkbox' },
        { text: 'K-Swiss', value: 'K-Swiss', type: 'checkbox' },
        { text: 'Nike', value: 'Nike', type: 'checkbox' },
        { text: 'Puma', value: 'Puma', type: 'checkbox' },
      ],
    },
    { 
      label: 'Categorias',
      name: 'category',
      options: [
        { text: 'Esporte e lazer', value: 'Esporte e lazer', type: 'checkbox' },
        { text: 'Casual', value: 'Casual', type: 'checkbox' },
        { text: 'Utilitário', value: 'Utilitário', type: 'checkbox' },
        { text: 'Corrida', value: 'Corrida', type: 'checkbox' },
      ],
    },
    { 
      label: 'Gênero',
      name: 'gender',
      options: [
        { text: 'Masculino', value: 'Masculino', type: 'checkbox' },
        { text: 'Feminino', value: 'Feminino', type: 'checkbox' },
        { text: 'Unissex', value: 'Unissex', type: 'checkbox' },
      ],
    },
    { 
      label: 'Estado',
      name: 'state',
      options: [
        { text: 'Novo', value: 'Novo', type: 'radio' },
        { text: 'Usado', value: 'Usado', type: 'radio' },
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
      <div className='container mx-auto c-max-width p-5'>
        <div className='flex items-center justify-between'>
          <div htmlFor="sort" className='block text-dark-gray-2 text-sm my-5'>
            <span className='font-bold'>Resultados para #pesquisa</span> - #numero produtos
          </div>
          <div className='flex items-center text-sm'>
            <label htmlFor="sort" className='font-bold pr-2'>Ordenar por:</label>
            <select 
              id="sort"
              value={sortOrder}
              onChange={handleSortChange}
              className='h-15 p-2 rounded-md text-dark-gray-2 custom-select'
              >
              <option value="">mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>
        </div>
        <div className='flex pb-24'>
          <div className='pt-5 mr-4 hidden lg:block'>
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
