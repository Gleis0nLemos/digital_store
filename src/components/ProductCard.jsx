const ProductCard = ({ image, category, name, price, priceDiscount }) => {
  return (  
    <div className="">
      <div className="mb-1 md:mb-4 min-h-[187px] max-h-[282px] md:max-w-[275px] md:h-[287px] xl:w-[279px] xl:h-[292px] flex items-center bg-white">
        <img src={image} alt={name} className="w-auto h-auto object-cover" />
      </div>
      <div>
        <h3 className="text-light-gray font-inter text-[12px] font-bold leading-6 tracking-[0.75px] text-left">{category}</h3>

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
}
 
export default ProductCard;