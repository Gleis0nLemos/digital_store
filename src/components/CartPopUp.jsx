import React, { useRef, useEffect, useState } from 'react';
import NikeRed from '../assets/productview/nike-red-shoe.svg';

const CartPopup = ({ onClose, onViewCart }) => {
  const cartRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleResize = () => {
      // Defina a largura do breakpoint `md` (geralmente 768px)
      const mdBreakpoint = 768;
      setIsButtonDisabled(window.innerWidth < mdBreakpoint);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    // Executar uma vez para definir o estado inicial
    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  const recommendedProducts = [
    {
      image: NikeRed,
      category: 'Tênis',
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: '$100.00',
      priceDiscount: '$80.00',
    },
  ];

  return (
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
        <button 
          onClick={onViewCart} 
          className="bg-primary text-sm text-white px-4 py-2 rounded-lg"
          disabled={isButtonDisabled}
        >
          Ver Carrinho
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
