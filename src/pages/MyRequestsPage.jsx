import Profile from "../components/Profile";
import Orders from "../components/Orders";
import SideMenu from "../components/SideMenu";
import MyInformations from "../components/MyInformations";
import Layout from "./Layout";
import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods";
import NikeRed from '../assets/productview/nike-red-shoe.svg'

const MyRequestsPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  const orders = [
    {
      id: '12345',
      productName: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: NikeRed,
      status: 'Produto em trânsito',
    },
    {
      id: '67890',
      productName: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: NikeRed,
      status: 'Finalizado',
    },
    {
      id: '54321',
      productName: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: NikeRed,
      status: 'Cancelado',
    },
    {
      id: '54321',
      productName: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: NikeRed,
      status: 'Cancelado',
    },
    {
      id: '54321',
      productName: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: NikeRed,
      status: 'Cancelado',
    },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return <Profile />;
      case 'orders':
        return <Orders orders={orders} />;
      case 'information':
        return <MyInformations />;
      default:
        return <PaymentMethods />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row mx-auto my-12 p-5 max-w-7xl">
        <SideMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} className="md:w-1/4" />
        <div className="flex-1 bg-white mt-4 md:mt-0 md:ml-4 p-5 shadow-sm">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default MyRequestsPage;
