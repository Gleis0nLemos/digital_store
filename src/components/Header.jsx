import React, { useState, useCallback, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Card from '../assets/card-icon.svg';
import MenuIcon from '../assets/menu-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import CartPopUp from './CartPopUp';
import SearchBar from './SearchBar';
import Logo from './Logo';
import MenuSmallNav from './MenuSmallNav';

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLoginClick = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const toggleCartPopup = useCallback(() => {
    setIsCartPopupOpen((prev) => !prev);
  }, []);

  const handleViewCart = useCallback(() => {
    setIsCartPopupOpen(false);
    navigate('/products/card');
  }, [navigate]);

  const toggleSearchInput = () => {
    setIsSearchInputVisible(prev => !prev);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate('/products', { state: { searchTerm } });
      setSearchTerm(''); // Limpa o campo de pesquisa após a busca
    }
    setIsSearchInputVisible(false);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getLinkClass = (path) => {
    return location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'))
      ? 'text-primary underline underline-offset-4 font-bold'
      : 'text-base';
  };

  const isLoginPage = location.pathname === '/login' || location.pathname === '/login/register';

  return (
    <header className='text-dark-gray-2 bg-white z-50'>
      <div className='container mx-auto flex flex-col p-5 pt-10 c-max-width'>
        <div className="flex items-center justify-between">
          {!isLoginPage && (
            <div className='flex lg:hidden'>
              <button onClick={() => setIsMenuOpen(true)}>
                <img src={MenuIcon} alt="Menu Icon" />
              </button>
            </div>
          )}
          <div className="flex justify-center lg:justify-start">
            <Logo isLoginPage={isLoginPage} />
            {!isLoginPage && (
              <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearch={handleSearch} 
              />
            )}
          </div>
          {!isLoginPage && (
            <div className="flex items-center">
              <div className="hidden gap-6 items-center lg:pr-8 xl:pr-12 lg:flex">
                <a href="#" onClick={handleLoginClick} className='underline-offset-4 underline'>Cadastrar-se</a>
                <button
                  className='bg-primary text-white px-8 py-2 rounded-lg font-bold hover:bg-tertiary'
                  onClick={handleLoginClick}
                >
                  Entrar
                </button>
              </div>
              <button onClick={toggleSearchInput} className={`${isSearchInputVisible ? 'text-primary' : ''}`}>
                <img src={SearchIcon} alt="Search Icon" className='lg:hidden mr-2 pb-1' />
              </button>
              <div className='relative'>
                <button onClick={toggleCartPopup}>
                  <img src={Card} alt="Card Icon" />
                </button>
                <div className="absolute w-[17px] h-[17px] bg-primary text-white text-[10px] rounded-full flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-1">1</div>
                {isCartPopupOpen && (
                  <CartPopUp
                    onClose={() => setIsCartPopupOpen(false)}
                    onViewCart={handleViewCart}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        {!isLoginPage && (
          <nav className="hidden lg:block pt-12">
            <ul className="flex space-x-4">
              <li><NavLink to="/" className={getLinkClass('/')}>Home</NavLink></li>
              <li><NavLink to="/products" className={getLinkClass('/products')}>Produtos</NavLink></li>
              <li><NavLink to="#" className={getLinkClass('/#')}>Categorias</NavLink></li>
              <li><NavLink to="/myproducts" className={getLinkClass('/myproducts')}>Meus Pedidos</NavLink></li>
            </ul>
          </nav>
        )}
      </div>
      <MenuSmallNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {isSearchInputVisible && (
        <div className='container bg-white px-4 pb-2 mx-auto mt-2 relative'>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produto"
              value={searchTerm} // Bind searchTerm to the input
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
              onKeyPress={handleSearchKeyPress} // Trigger search on Enter key press
              className='bg-light-gray-3 flex pl-4 py-2 w-full md:w-[300px] rounded-lg border-none focus:outline-none'
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              onClick={handleSearch} // Trigger search on click
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
