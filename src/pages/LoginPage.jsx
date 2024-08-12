import Layout from "./Layout";
import GmailIcon from '../assets/loginpagesvgs/gmail-icon.svg';
import FacebookIcon from '../assets/loginpagesvgs/facebook-icon.svg';
import FeetRight from '../assets/loginpagesvgs/feet-right.svg';
import FeetLeft from '../assets/loginpagesvgs/feet-left.svg';
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Layout>
      <div className="bg-secondary-gradient h-[80vh]">
        <div className="container mx-auto flex flex-col p-5 pt-10 c-max-width">
          <div className="w-full max-w-xl md:mt-20">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-dark-gray-2 tracking-wide">
                <h1 className="text-4xl text-dark-gray mb-2 font-extrabold">Acesse sua conta</h1>
                <p className="pb-4 text-sm md:text-base">
                  Novo cliente? Então registre-se <NavLink to="/registration" className="underline">aqui</NavLink>.
                </p>
              </div>
              <form className="mt-6">
                <label htmlFor="email" className="block font-bold text-sm text-dark-gray mb-2">
                  Login *
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                  placeholder="Insira seu login ou e-mail"
                />
                <label htmlFor="password" className="block text-sm font-bold text-dark-gray mb-2">
                  Senha *
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                  placeholder="Insira sua senha"
                />

                <NavLink to="/" className="underline">Esqueci minha senha</NavLink>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 mt-4 rounded-lg font-bold hover:bg-tertiary"
                >
                  Acessar Conta
                </button>
              </form>
              <div className="flex items-center justify-center mt-8">
                <p className="text-base text-dark-gray-2 mr-2">
                  Ou faça login com
                </p>
                <div className="flex">
                  <img src={GmailIcon} alt="Gmail icon" className="mr-2" />
                  <img src={FacebookIcon} alt="Facebook icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex justify-end">
            <img
              src={FeetRight}
              alt=""
              className="absolute top-[160px] right-[530px]"
            />
            <img
              src={FeetLeft}
              alt=""
              className="absolute top-[330px] right-[220px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
