import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MenuSmallNav = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
    onClose();
  };

  const handleRegisterClick = () => {
    navigate('/login/register');
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          style={{ top: '91px', height: 'calc(100vh - 60px)' }}
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-[91px] left-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0 z-30' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} 
        style={{ height: 'calc(100vh - 60px)' }} 
      >
        <button
          onClick={onClose}
          className="p-4 text-dark-gray-2 absolute top-0 right-0 text-2xl"
        >
          &times;
        </button>
        <div className="p-8 flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="text-lg font-bold mb-4 text-dark-gray-2">Páginas</h2>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary underline underline-offset-4 font-bold'
                      : 'text-dark-gray-2 text-base'
                  }
                  onClick={onClose}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary underline underline-offset-4 font-bold'
                      : 'text-dark-gray-2 text-base'
                  }
                  onClick={onClose}
                >
                  Produtos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary underline underline-offset-4 font-bold'
                      : 'text-dark-gray-2 text-base'
                  }
                  onClick={onClose}
                >
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myproducts"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary underline underline-offset-4 font-bold'
                      : 'text-dark-gray-2 text-base'
                  }
                  onClick={onClose}
                >
                  Meus Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto mb-8">
            <hr className="border-1 border-light-gray-2 mt-6 mx-1 mb-4" />
            <button
              onClick={handleLoginClick}
              className="block w-full mt-2 py-2 bg-primary text-white rounded-lg font-bold hover:bg-tertiary"
            >
              Entrar
            </button>
            <button
              onClick={handleRegisterClick}
              className="block w-full py-2 text-center text-dark-gray-2 underline underline-offset-4"
            >
              Cadastrar-se
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSmallNav;
