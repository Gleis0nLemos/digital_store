import ProductOptions from "./ProductOptions";
import Star from '../assets/productview/star-icon.svg';
import PropTypes from 'prop-types';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  // const sizeOptions = ['39', '40', '41', '42', '43'];
  // const colorOptions = [ '#000000', '#111111', '#222222', '#333333', '#444444'];

  return (  
    <div className="p-6 border rounded-lg shadow-sm">
      <h1 className="text-4xl text-dark-gray mb-2">{name}</h1>
      <p className="text-xs text-dark-gray-3 mb-4">Referência: {reference}</p>
      <div className="flex items-center mb-4">
        <span className="text-base text-dark-gray-2 px-2 py-1 rounded-4 bg-warning mr-2">
          {stars} <img src={Star} alt="Star" className="inline-block" />
        </span>
        <span className="text-base text-light-gray">({rating})</span>
      </div>
      <div>
        {priceDiscount ? (
          <>
            <span className="text=dark-gray-2 text-4xl">
              {priceDiscount}
            </span>
            <span className="line-through text-light-gray-2 text-xl mr-2">
              {price}
            </span>
          </>
        ) : (
          <span className="text-dark-gray-2 text-4xl">{price}</span>
        )}
      </div>
      
      <p className="text-base text-dark-gray-2 mb-4">{description}</p>

      <div className="mb-4">{children}</div>
    
      <button className="bg-primary text-white py-2 px-4 rounded">
        COMPRAR
      </button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
}
export default BuyBox;