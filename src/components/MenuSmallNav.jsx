import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuSmallNav = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Filtro de fundo */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50 z-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0 z-30' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // Impede o clique no menu de propagar
      >
        <button
          onClick={onClose}
          className="p-4 text-dark-gray-2 absolute top-0 right-0 text-2xl"
        >
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Páginas</h2>
          <ul>
            <li className="mb-2">
              <NavLink to="/" className="text-base" onClick={onClose}>Home</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/products" className="text-base" onClick={onClose}>Produtos</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="#" className="text-base" onClick={onClose}>Categorias</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/myproducts" className="text-base" onClick={onClose}>Meus Pedidos</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuSmallNav;
