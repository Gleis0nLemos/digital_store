const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (  
    <div className="border border-dashed p-4">
      <div className="mb-4">
        <img src={image} alt={name} className="w-auto h-auto object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        {priceDiscount ? (
          <div>
            <span className="text-light-gray line-through text-2xl mr-2">{price}</span>
            <span className="text-dark-gray text-2xl">{priceDiscount}</span>
          </div>
        ) : (
          <div className="text-dark-gray text-2xl">{price}</div> 
        )}
      </div>
    </div>
  );
}
 
export default ProductCard;