import { useState } from "react";
import Layout from "./Layout";
import ProductsData from "../components/ProductsData"; // Ajuste o caminho conforme necessário

const CardViewPage = () => {
  const product = ProductsData[0]; // Substitua isso pelo método adequado para obter o produto correto

  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const total = quantity * product.priceDiscount;
  const totalOriginal = quantity * product.price;

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleApplyDiscount = () => {
    console.log("Aplicar desconto com código:", discountCode);
    // Lógica para aplicar o desconto
  };

  const handleCalculateFreight = () => {
    console.log("Calcular frete com CEP:", postalCode);
    // Lógica para calcular o frete
  };

  const frete = 15.0; // Exemplo de valor fixo de frete
  const desconto = totalOriginal - total;
  const subtotal = total + frete;

  return (
    <Layout>
      <div className="container c-max-width mx-auto p-5 flex space-x-4">
        <div className="bg-white w-3/4 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-sm text-dark-gray-2 font-bold">MEU CARRINHO</h1>
            <div className="flex space-x-4">
              <div className="flex gap-12 mr-7">
                <span className="font-semibold text-xs text-dark-gray-2">QUANTIDADE</span>
                <span className="font-semibold text-xs text-dark-gray-2">UNITÁRIO</span>
                <span className="font-semibold text-xs text-dark-gray-2">TOTAL</span>
              </div>
            </div>
          </div>
          <hr className="border-2 border-light-gray-3 my-4" />
          <div className="flex justify-between">
            {/* Informações do Produto */}
            <div className="flex space-x-4 w-[367px]">
              <img
                src={product.images[0].src}
                alt={product.name}
                className="w-32 h-28 p-4 bg-[#E2E3FF] rounded mb-4 md:mb-0"
              />
              <div className="flex flex-col justify-between w-3/4">
                <div className="">
                  <h2 className=" font-semibold">{product.name}</h2>
                  <p className="text-sm pt-4">
                    <span className="font-semibold text-light-gray">Cor: </span>
                    {product.colorOptions[0]}
                  </p>
                  <p className="text-sm pt-2">
                    <span className="font-semibold text-light-gray">Tamanho: </span> {product.sizeOptions[0]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-6">
              <div>
                <div>
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 border rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 border rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="flex underline underline-offset-2 text-xs justify-center pt-4 cursor-pointer hover:text-semibold">
                  Remover item
                </div>
              </div>
              <div className="flex items-center flex-col">
                <span className="text-sm line-through text-light-gray-2 font-semibold">
                  {`R$ ${product.price.toFixed(2)}`}
                </span>
                <span className="text text-dark-gray font-bold">{`R$ ${product.priceDiscount.toFixed(2)}`}</span>
              </div>
              <div className="flex items-center flex-col">
                <span className="text-sm line-through text-light-gray-2 font-semibold">
                  {`R$ ${totalOriginal.toFixed(2)}`}
                </span>
                <span className="text-dark-gray font-bold">{`R$ ${total.toFixed(2)}`}</span>
              </div>
            </div>
          </div>
          <hr className="border-2 border-light-gray-3 my-4" />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <h2 className="text-sm text-dark-gray-2 font-bold mb-4">Cupom de desconto</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Insira seu código"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg focus:outline-none focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={handleApplyDiscount}
                  className="px-8 py-4 bg-light-gray-3 hover:bg-light-gray-2 text-primary text-sm font-bold rounded-lg"
                >
                  OK
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="text-sm text-dark-gray-2 font-bold mb-4">Calcular frete</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Insira seu CEP"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg focus:outline-none focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={handleCalculateFreight}
                  className="px-8 py-4 bg-light-gray-3 hover:bg-light-gray-2 text-primary text-sm font-bold rounded-lg"
                >
                  OK
                </button>
              </div>
            </div>
          </div>


        </div>

        {/* Resumo */}
        <div className="bg-white w-1/4 p-6 self-start">
          <h2 className="text-sm text-dark-gray-2 font-bold mb-6">RESUMO</h2>
          <hr className="border-2 border-light-gray-3 my-4" />
          <div className="flex justify-between mb-6">
            <span className="text-sm text-light-gray">Subtotal</span>
            <span className="text-sm font-bold">{`R$ ${total.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-sm text-light-gray">Frete</span>
            <span className="text-sm font-bold">{`R$ ${frete.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-sm text-light-gray">Desconto</span>
            <span className="text-sm font-bold">{`R$ ${desconto.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-dark-gray">Total</span>
            <span className="text-primary font-bold">{`R$ ${subtotal.toFixed(2)}`}</span>
          </div>
          <span className="text-xs flex justify-end mt-1 text-light-gray font-semibold">ou 10x de R$ 21,00 sem juros</span>
          <button className="bg-warning text-white text-sm font-semibold mt-8 mb-1 py-2 w-full rounded-md hover:bg-warning_2">
            Continuar
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CardViewPage;
