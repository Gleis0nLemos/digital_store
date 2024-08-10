import React from 'react';

const ShoppingCart = ({ image, category, name, price, priceDiscount }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-16 h-16 px-1 bg-[#E2E3FF] mr-4" />
      <div>
        <p className="text-sm font-bold">{name}</p>
        <div className='flex gap-4 pt-1 items-center'>
          <p className="text-dark-gray font-bold">{priceDiscount}</p>
          <p className="text-xs font-bold text-light-gray line-through">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
