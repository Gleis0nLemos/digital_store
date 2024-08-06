const BuyBox = ({ name, price, priceDiscount, description }) => {
  return (  
    <div className="p-4 border rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-xl text-dark-gray-2 mb-2">
        {priceDiscount ? (
          <>
            <span className="line-through text-light-gray-2 text-lg mr-2">
              {price}
            </span>
            <span className="text=dark-gray-2 text-xl">
              {priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-dark-gray-2 text-xl">{price}</span>
        )}
      </p>
      <p className="text-lg text-dark-gray-2 mb-4">{description}</p>
      <button className="bg-primary text-white py-2 px-4 rounded">
        COMPRAR
      </button>
    </div>
  );
}
 
export default BuyBox;