import Logo from '../assets/logo.svg';
import Logo2 from '../assets/logo_2.svg';
import Search from '../assets/search-icon.svg';
import Card from '../assets/card-icon.svg';
import MenuIcon from '../assets/menu-icon.svg';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getLinkClass = (path) => (
    location.pathname === path ? 'text-primary underline underline-offset-4 font-bold' : 'text-base'
  );
  
  return ( 
    <header className='text-dark-gray-2 bg-white'>
      <div className="container mx-auto flex flex-col p-5 pt-10 c-max-width">
        <div className="flex items-center justify-between">  
          <div className='flex lg:hidden'>
            <button>
              <img src={MenuIcon} alt="Menu Icon" />
            </button>
          </div>
          <div className="flex justify-center lg:justify-start">
            <img src={Logo} alt="" className="block mx-auto pl-4 lg:hidden" />
            <img src={Logo2} alt="" className='hidden lg:block' />

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
          </div>
         
          <div className="flex items-center">
            <div className="hidden gap-6 items-center lg:pr-8 xl:pr-12 lg:flex">
              <a href="#" className='underline-offset-4 underline'>Cadastrar-se</a>
              <button className='bg-primary text-white px-8 py-2 rounded-lg font-bold hover:bg-tertiary'>
                Entrar
              </button>
            </div>
            <button>
              <img src={Search} alt="Search Icon" className='lg:hidden mr-2 mt-0.5'/>
            </button>
            <div className='relative'>
              <a href="#"><img src={Card} alt="Card Icon" /></a>
              <div className="absolute w-[17px] h-[17px] bg-primary text-white text-[10px] rounded-full flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-1">1</div>
            </div>
          </div>
        </div>
        <nav className="hidden lg:block pt-12">
          <ul className="flex space-x-4">
            <li><NavLink to="/" className={getLinkClass('/')}>Home</NavLink></li>
            <li><NavLink to="/products" className={getLinkClass('/products')}>Produtos</NavLink></li>
            <li><NavLink to="#" className={getLinkClass('/#')}>Categorias</NavLink></li>
            <li><NavLink to="#" className={getLinkClass('/#')}>Meus Pedidos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;           

{/* <li><a href="#" className='hover:text-primary hover:underline underline-offset-4 hover:font-bold'>Home</a></li> */}
