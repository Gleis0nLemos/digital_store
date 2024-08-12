import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../pages/Layout';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import ProductsData from '../components/ProductsData';
import FilterIcon from '../assets/filter-icon.svg';

const ProductListingPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    state: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  useEffect(() => {
    const body = document.body;
    if (isSidebarOpen) {
      body.classList.add('no-scroll');
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.marginRight = `${scrollbarWidth}px`;
      body.style.overflow = 'hidden';
    } else {
      body.classList.remove('no-scroll');
      body.style.marginRight = '0';
      body.style.overflow = '';
    }
  
    return () => {
      body.classList.remove('no-scroll');
      body.style.marginRight = '0';
      body.style.overflow = '';
    };
  }, [isSidebarOpen]);
  
  const filteredProducts = useMemo(() => {
    return ProductsData.filter(product => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesState = filters.state.length === 0 || filters.state.includes(product.state);

      return matchesSearchTerm && matchesBrand && matchesCategory && matchesState;
    });
  }, [searchTerm, filters]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'lowest') {
        return a.price - b.price;
      }
      if (sortOrder === 'highest') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [filteredProducts, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter(item => item !== value),
    }));
  };

  const filterOptions = [
    { 
      label: 'Marcas',
      name: 'brand',
      options: [
        { text: 'Adidas', value: 'Adidas', type: 'checkbox' },
        { text: 'Balenciaga', value: 'Balenciaga', type: 'checkbox' },
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
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <Layout>
      <div className='container mx-auto c-max-width p-5'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          {searchTerm && (
            <div className='flex text-dark-gray-2 text-sm my-5 w-full order-2 md:order-1 md:w-auto'>
              <span className='font-bold pr-1'>Resultados para "{searchTerm}"</span> - {sortedProducts.length} produtos
            </div>
          )}
          <div className='flex items-center text-sm w-full md:w-auto mt-4 order-1 md:order-2 md:mt-0'>
            <label htmlFor="sort" className='font-bold pr-2'>Ordenar por:</label>
            <select 
              id="sort"
              value={sortOrder}
              onChange={handleSortChange}
              className='h-15 p-2 mr-8 rounded-md text-dark-gray-2 custom-select md:w-auto'
              aria-label="Ordenar por"
            >
              <option value="">mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
            <button onClick={toggleSidebar} className='flex lg:hidden'>
              <img src={FilterIcon} alt="Filtro" />
            </button>
          </div>
        </div>

        {isSidebarOpen && (
          <div className='fixed top-[91px] inset-0 bg-black opacity-50 z-40' onClick={toggleSidebar}></div>
        )}

        <div className={`fixed top-[91px] left-0 h-full bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 md:w-3/5 lg:w-4/5 filter-menu`}>
          <div className='p-5'>
            <button onClick={toggleSidebar} className='text-gray-500'>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <FilterGroup 
              title="Filtrar por"
              filters={filterOptions}
              onChange={handleFilterChange}
            />
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
          <div className='pt-5 md:px-0'>
            <ProductListing products={sortedProducts} columns={3}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
