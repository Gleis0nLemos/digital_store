// src/components/SideMenu.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = ({ selectedMenu, setSelectedMenu }) => {
  const menuItems = [
    { id: 'profile', label: 'Meu Perfil' },
    { id: 'orders', label: 'Meus Pedidos' },
    { id: 'information', label: 'Minhas Informações' },
    { id: 'payment-methods', label: 'Métodos de Pagamento' },
  ];

  return (
    <nav className="w-[370px] bg-white p-5 shadow-sm">
      <ul>
        {menuItems.map(item => (
          <li
            key={item.id}
            className={`p-2 cursor-pointer ${selectedMenu === item.id ? 'text-primary font-bold' : ''}`}
            onClick={() => setSelectedMenu(item.id)}
          >
            {item.label}
            <hr className="border-2 border-light-gray-3 my-2" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

SideMenu.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
  setSelectedMenu: PropTypes.func.isRequired,
};

export default SideMenu;
