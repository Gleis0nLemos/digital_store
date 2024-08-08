import PropTypes from "prop-types";
import { useState } from "react";

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOptions] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOptions(option);
  };

  const renderOption = (option) => {
    const isSelected = selectedOption === option;
    const baseSquareStyle = `flex items-center justify-center cursor-pointer mr-2 mb-2 ${isSelected ? 'border-2 border-primary text-white bg-primary' : 'border bg-white border-light-gray-2 text-dark-gray-2'}`
    const baseCircleStyle = `flex items-center justify-center cursor-pointer mr-3 mb-2 ${isSelected ? 'border-2 border-primary' : 'border border-white'}`



    if (shape === 'square') {
      return (
        <div
          key={option}
          className={`${baseSquareStyle} w-12 h-12`}
          style={{ borderRadius: radius }}
          onClick={() => handleOptionClick(option)}
          >
            {type === 'text' ? (
              <span className="font-bold">{option}</span>
            ) : (
              <div style={{ backgroundColor: option, width: '100%', height: '100%' }}></div>
            )}
        </div>
      );
    } else if (shape === 'circle') {
      return (
        <div
          key={option}
          className={`${baseCircleStyle} w-10 h-10 p-0.5 rounded-full`}
          onClick={() => handleOptionClick(option)}
          >
            {type === 'text' ? (
              <span>{option}</span>
            ) : (
              <div style={{ backgroundColor: option, width: '100%', height: '100%', borderRadius: '50%' }}></div>
            )}
        </div>
      );
    }

    return null;
  };

  return <div className="flex flex-wrap">{options.map(renderOption)}</div>;
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
}

ProductOptions.defaultProps = {
  radius: '0px',
};
 

export default ProductOptions;  