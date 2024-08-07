import PropTypes from "prop-types";
import { useState } from "react";

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOptions] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOptions(option);
  };

  const renderOption = (option) => {
    const isSelected = selectedOption === option;
    const baseStyle = `flex items-center justify-center cursor-pointer mr-2 mb-2 ${isSelected ? 'border-2 border-primary' : 'border border-light-gray-2'}`

    if (shape === 'square') {
      return (
        <div
          key={option}
          className={`${baseStyle} w-46 h-46`}
          style={{ borderRadius: radius }}
          onClick={() => handleOptionClick(option)}
          >
            {type === 'text' ? (
              <span className="text-24 text-dark-gray-2">{option}</span>
            ) : (
              <div style={{ backgroundColor: option, width: '100%', height: '100%' }}></div>
            )}
        </div>
      );
    } else if (shape === 'circle') {
      return (
        <div
          key={option}
          className={`${baseStyle} w-31 h-31 rounded-full`}
          onClick={() => handleOptionClick(option)}
          >
            {type === 'text' ? (
              <span className="text-24 text-dark-gray-2">{option}</span>
            ) : (
              <div style={{ backgroundColor: option, width: '100%', height: '100%' }}></div>
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