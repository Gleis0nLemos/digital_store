// src/components/Information.jsx
import React from 'react';

const MyInformation = () => {
  return (
    <div className="relative">
      <h1 className='font-semibold text-sm text-dark-gray-2 pt-5'>Minhas Informações</h1>
      <button className="absolute underline underline-offset-2 text-sm font-semibold top-2 right-2 text-primary px-2 py-2 rounded hover:text-tertiary">
        Editar
      </button>
      <hr className="border-2 border-light-gray-3 mt-6 mb-2" />

      <div className="mb-6 mt-8">
        <h2 className="text-dark-gray-2 font-bold mb-2">Informações Pessoais</h2>
        <p><strong className='text-light-gray pr-2'>Nome:</strong> João Silva</p>
        <p><strong className='text-light-gray pr-2'>CPF:</strong> 123.456.789-00</p>
        <p><strong className='text-light-gray pr-2'>Email:</strong> joao.silva@email.com</p>
        <p><strong className='text-light-gray pr-2'>Celular:</strong> (11) 98765-4321</p>
      </div>

      <div>      
        <hr className="border-2 border-light-gray-3 mt-6 mb-6" />
        <h2 className="text-dark-gray-2 font-bold mb-2">Informações de Entrega</h2>
        <p><strong className='text-light-gray pr-2'>Endereço:</strong> Rua das Flores, 123</p>
        <p><strong className='text-light-gray pr-2'>Bairro:</strong> Jardim das Acácias</p>
        <p><strong className='text-light-gray pr-2'>Cidade:</strong> São Paulo</p>
        <p><strong className='text-light-gray pr-2'>CEP:</strong> 01234-567</p>
      </div>
    </div>
  );
};

export default MyInformation;
