import React from 'react';

const Orders = ({ orders }) => {
  const statusClasses = {
    'Produto em trânsito': 'text-warning',
    'Finalizado': 'text-green-500',
    'Cancelado': 'text-red-500',
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Meus Pedidos</h2>
      <hr className="border-2 border-light-gray-3 mb-4" />
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={order.id} className="mb-4">
            <div className="flex flex-col md:flex-row items-start p-4">
              <img
                src={order.image}
                alt={order.productName}
                className="w-20 h-16 p-2 bg-[#E2E3FF] rounded mb-4 md:mb-0"
              />
              <div className="flex-grow md:ml-4 w-full md:w-auto">
                <p className="text-xs text-light-gray">Pedido nº: {order.id}</p>
                <h3 className="text-lg text-dark-gray-2 font-bold">{order.productName}</h3>
              </div>
              <div className='flex items-center md:mt-5 md:ml-4'>
                <p className={`text-sm font-semibold ${statusClasses[order.status]}`}>
                  {order.status}
                </p>
              </div>
            </div>
            {index < orders.length - 1 && <hr className="border-2 md:mx-4 border-light-gray-3" />}
          </div>
        ))
      ) : (
        <p className="text-gray-500">Você ainda não fez nenhum pedido.</p>
      )}
    </div>
  );
};

export default Orders;
