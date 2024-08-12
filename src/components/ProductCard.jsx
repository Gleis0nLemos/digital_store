import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, category, name, price, priceDiscount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  const calculateDiscountPercentage = (price, priceDiscount) => {
    if (price && priceDiscount && price > 0) {
      const discountPercentage = Math.round(((price - priceDiscount) / price) * 100);
      return discountPercentage;
    }
    return 0;
  };

  // Calcula a porcentagem de desconto
  const discountPercentage = priceDiscount ? calculateDiscountPercentage(Number(price), Number(priceDiscount)) : null;

  return (
    <div onClick={handleClick} className="cursor-pointer">
      
      <div className="relative mb-1 md:mb-4 min-h-[187px] max-h-[282px] md:max-w-[275px] md:h-[287px] xl:w-[279px] xl:h-[292px] flex items-center bg-white shadow-sm hover:underline">
      

        {discountPercentage !== null && (
          <p className="absolute top-2 left-2 ml-2 mt-2 bg-lime text-sm px-4 p-2 inline-block rounded-full text-center text-dark-gray-2 font-bold">{discountPercentage}% OFF</p>
        )}
        <img src={image} alt={name} className="w-auto h-auto object-cover" />
      </div>
      
      <div className="mb-2 md:mb-4">
        <h3 className="text-light-gray font-inter text-[12px] font-bold leading-6 tracking-[0.75px] text-left">
          {category}
        </h3>
        <h2 className="text-dark-gray-2 md:text-xl overflow-hidden text-ellipsis whitespace-nowrap hover:underline">
          {name}
        </h2>

        {priceDiscount ? (
          <div className="md:text-lg flex gap-2 items-center">
            <span className="text-light-gray line-through">{price}</span>
            <span className="text-dark-gray font-bold">{priceDiscount}</span>
          </div>
        ) : (
          <div className="text-dark-gray font-bold md:text-lg">{price}</div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

ProductCard.defaultProps = {
  priceDiscount: null,
};

export default ProductCard;
