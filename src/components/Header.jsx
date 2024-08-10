import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import Logo2 from '../assets/logo_2.svg';
import Search from '../assets/search-icon.svg';
import Card from '../assets/card-icon.svg';
import MenuIcon from '../assets/menu-icon.svg';
import NikeRed from '../assets/productview/nike-red-shoe.svg'; // Importando imagem dos produtos
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false); // Estado para controlar o pop-up do carrinho
  const navigate = useNavigate();
  const location = useLocation();
  const cartRef = useRef(null);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleCartPopup = () => {
    setIsCartPopupOpen((prev) => !prev);
  };

  const handleViewCart = () => {
    setIsCartPopupOpen(false);
    navigate('/products/card');
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isCartPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartPopupOpen]);

  const getLinkClass = (path) => {
    if (location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'))) {
      return 'text-primary underline underline-offset-4 font-bold';
    } else {
      return 'text-base';
    }
  };

  const isLoginPage = location.pathname === '/login' || location.pathname === '/login/register';

  const recommendedProducts = [
    {
      image: NikeRed,
      category: 'Tênis',
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
    {
      image: NikeRed,
      category: 'Tênis',
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
  ];

  return (
    <header className='text-dark-gray-2 bg-white'>
      <div className="container mx-auto flex flex-col p-5 pt-10 c-max-width">
        <div className="flex items-center justify-between">
          {!isLoginPage && (
            <div className='flex lg:hidden'>
              <button>
                <img src={MenuIcon} alt="Menu Icon" />
              </button>
            </div>
          )}
          <div className="flex justify-center lg:justify-start">
            <NavLink to="/"><img src={Logo} alt="" className="block mx-auto pl-4 lg:hidden" /></NavLink>
            <NavLink to="/"><img src={Logo2} alt="" className='hidden lg:block' /></NavLink>

            {!isLoginPage && (
              <div className="hidden relative items-center ml-6 lg:flex">
                <input
                  type="text"
                  placeholder='Pesquisar produto'
                  className='bg-light-gray-3 flex md:hidden lg:flex pl-6 py-4 w-[400px] lg:w-[410px] xl:w-[559px] rounded-lg border-none focus:outline-none'
                />
                <div className='absolute right-4 items-center flex'>
                  <button>
                    <img src={Search} alt="Search icon" />
                  </button>
                </div>
              </div>
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
              <button>
                <img src={Search} alt="Search Icon" className='lg:hidden mr-2 mt-0.5' />
              </button>
              <div className='relative'>
                <button onClick={toggleCartPopup}>
                  <img src={Card} alt="Card Icon" />
                </button>
                <div className="absolute w-[17px] h-[17px] bg-primary text-white text-[10px] rounded-full flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-1">1</div>
                {isCartPopupOpen && (
                  <div ref={cartRef} className="absolute top-full mt-2 right-0 bg-white w-72 p-6 rounded-lg shadow-lg z-50">
                    <h2 className="font-bold mb-4">Meu Carrinho</h2>
                    <hr className="border border-light-gray-2 mb-4" />
                    <div className="mb-4">
                      {recommendedProducts.map((product, index) => (
                        <div key={index} className="flex items-center mb-4">
                          <img src={product.image} alt={product.name} className="w-16 h-16 px-1 bg-[#E2E3FF] mr-4" />
                          <div>
                            <p className="text-sm font-bold">{product.name}</p>
                            <div className='flex gap-4 pt-1 items-center'>
                              <p className="text-dark-gray font-bold">{product.priceDiscount}</p>
                              <p className="text-xs font-bold text-light-gray line-through">{product.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr className="border border-light-gray-2 mb-4" />
                    <div className="flex justify-between items-center mb-4">
                      <span className='text-dark-gray font-bold tracking-wide'>Valor total:</span>
                      <span className="text-dark-gray font-bold">R$ 100,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-sm text-dark-gray-2 underline">Esvaziar</button>
                      <button onClick={handleViewCart} className="bg-primary text-sm text-white px-4 py-2 rounded-lg">
                        Ver Carrinho
                      </button>
                    </div>
                  </div>
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
    </header>
  );
}

export default Header;
