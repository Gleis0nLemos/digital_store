import Profile from "../components/Profile";
import Orders from "../components/Orders";
import SideMenu from "../components/SideMenu";
import MyInformations from "../components/MyInformations";
import Layout from "./Layout";
import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods";

const MyRequestsPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return <Profile />;
      case 'orders':
        return <Orders />;
      case 'information':
        return <MyInformations />;
      default:
        return <PaymentMethods />;
    }
  }
  
  return (  
    <Layout>
      <div className="flex mx-auto c-max-width my-12 p-5">
        <SideMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
        <div className="flex-1 bg-white ml-4 p-5 shadow-sm">
          {renderContent()}  
        </div>  
      </div>
    </Layout>
  );
}
 
export default MyRequestsPage;