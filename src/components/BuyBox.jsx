import ProductOptions from "./ProductOptions";
import StarWhite from '../assets/productview/star-white.svg';
import StarYellow from '../assets/productview/star-yellow.svg';
import Star from '../assets/productview/star.svg'
import PropTypes from 'prop-types';
import GenerateStars from "./generateStars";

const BuyBox = ({ name, category, brand, reference, stars, rating, price, priceDiscount, description, children }) => {

  return (
    <div className="rounded-lg shadow-sm py-12 md:py-0">
      <h1 className="text-4xl text-dark-gray mb-2 font-extrabold">{name}</h1>
      <div className="flex gap-1 mb-2">
        <p className="text-xs text-dark-gray-3">{category} |</p>
        <p className="text-xs text-dark-gray-3">{brand} |</p>
        <p className="text-xs text-dark-gray-3">REF: {reference}</p>
      </div>


      <div className="flex items-center gap-1 mb-6">
        <div className="mr-2">
          <GenerateStars rating={stars} />
        </div>
        <span className="text-sm font-bold flex items-center text-white px-2 py-1 rounded-4 bg-warning mr-2">
          {stars} <img src={StarWhite} alt="Star" className="ml-1 pb-0.5" />
        </span>
        <span className="text-sm text-light-gray">({rating} avaliações) </span>
      </div>


      <div>
        {priceDiscount ? (
          <>
            <span className="text-dark-gray-2 text-4xl font-extrabold">
              <span className="text-sm pr-1 font-bold">R$</span>
              {priceDiscount}
              <span className="text-sm pr-1 font-bold">,00</span>
            </span>
            <span className="line-through ml-2 text-light-gray-2 text-xl mr-2">
              {price},00
            </span>
          </>
        ) : (
          <>
            <span>
              <span className="text-dark-gray-2 text-4xl">{price}</span><span className="text-sm pr-1 font-bold">,00</span>
            </span>
          </>
        )}
      </div>

      <div className="my-6">
        <h2 className="text-sm text-light-gray font-bold pb-1">Descrição do produto</h2>
        <p className="text-sm text-dark-gray-2 mb-4">{description}</p>
      </div>

      <div className="mb-5">{children}</div>

      <button className="bg-warning text-white py-2 px-4 md:px-16 rounded-md hover:bg-warning_2 w-full sm:w-auto">
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