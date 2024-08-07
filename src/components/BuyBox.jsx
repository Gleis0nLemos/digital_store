import ProductOptions from "./ProductOptions";

const BuyBox = ({ name, price, priceDiscount, description }) => {
  const sizeOptions = ['39', '40', '41', '42', '43'];
  const colorOptions = [ '#000000', '#111111', '#222222', '#333333', '#444444'];

  return (  
    <div className="p-4 border rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-xl text-dark-gray-2 mb-2">
        {priceDiscount ? (
          <>
            <span className="text=dark-gray-2 text-xl">
              {priceDiscount}
            </span>
            <span className="line-through text-light-gray-2 text-lg mr-2">
              {price}
            </span>
          </>
        ) : (
          <span className="text-dark-gray-2 text-xl">{price}</span>
        )}
      </p>
      <p className="text-lg text-dark-gray-2 mb-4">{description}</p>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tamanhos</h3>
        <ProductOptions 
          options={sizeOptions}
          shape="square"
          radius="4px"
          type="text"
          />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Cores</h3>
        <ProductOptions 
          options={colorOptions}
          shape="circle"
          type="color"
          />
      </div>
      <button className="bg-primary text-white py-2 px-4 rounded">
        COMPRAR
      </button>
    </div>
  );
}
 
export default BuyBox;