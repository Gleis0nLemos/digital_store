import React, { useState, useCallback, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Card from '../assets/card-icon.svg';
import MenuIcon from '../assets/menu-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import CartPopUp from './CartPopUp';
import SearchBar from './SearchBar';
import Logo from './Logo';
import MenuSmallNav from './MenuSmallNav';  // Importe o novo componente

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu lateral
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Adiciona a classe 'overflow-hidden' ao <body> quando o menu está aberto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      // Remove a classe 'overflow-hidden' ao desmontar o componente
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
            {!isLoginPage && <SearchBar />}
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
              <button>
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
    </header>
  );
};

export default Header;
