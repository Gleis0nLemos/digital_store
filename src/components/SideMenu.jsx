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
    <nav className="w-1/4 bg-gray-100 p-4">
      <ul>
        {menuItems.map(item => (
          <li
            key={item.id}
            className={`p-2 cursor-pointer ${selectedMenu === item.id ? 'bg-yellow-300' : ''}`}
            onClick={() => setSelectedMenu(item.id)}
          >
            {item.label}
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
