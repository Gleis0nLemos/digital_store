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
    <nav className="w-[370px] h-full bg-white p-5 pb-8 shadow-sm">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className={`py-4 px-4 cursor-pointer ${selectedMenu === item.id ? 'text-primary font-bold' : ''}`}
            onClick={() => setSelectedMenu(item.id)}
          >
            {item.label}
            {index < menuItems.length - 1 && <hr className="border-2 border-light-gray-3 mt-6" />}
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
