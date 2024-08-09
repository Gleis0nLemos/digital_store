import { NavLink } from "react-router-dom";
import Layout from "./Layout";

const RegisterPage = () => {
  return (
    <Layout>
      <div className='flex'>
        <div className='container mx-auto c-max-width flex items-center justify-center'>
          <div className="my-8 md:my-12 flex justify-center w-full">
            <div className="w-full mx-6 md:m-0 md:w-3/5">

              <form className="mt-4 mb-12 w-full">
                <h1 className="text-dark-gray text-2xl md:text-3xl text-center md:text-start font-bold tracking-wide pb-4">Criar conta</h1>
                <div className=" bg-white text-dark-gray-3 px-8 py-4 shadow-sm">
                  <h2 className="tracking-wide font-bold text-dark-gray-2">Informações Pessoais</h2>
                  <hr className="border-2 border-light-gray-3 my-4" />
                  <div>
                    <label htmlFor="name" className="text-sm font-bold">Nome completo <span>*</span></label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="cpf" className="text-sm font-bold">CPF <span>*</span></label>
                    <input
                      type="text"
                      id="cpf"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu CPF"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-bold">Email <span>*</span></label>
                    <input
                      type="text"
                      id="email"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="celular" className="text-sm font-bold">Celular <span>*</span></label>
                    <input
                      type="text"
                      id="celular"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu Celular"
                    />
                  </div>
                </div>

                <div className="mt-2 bg-white text-dark-gray-3 px-8 py-4 shadow-sm">
                  <h2 className="tracking-wide font-bold text-dark-gray-2">Informações de Entrega</h2>
                  <hr className="border-2 border-light-gray-3 my-4" />
                  <div>
                    <label htmlFor="address" className="text-sm font-bold">Endereço <span>*</span></label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu Endereço"
                    />
                  </div>
                  <div>
                    <label htmlFor="neighborhood" className="text-sm font-bold">Bairro <span>*</span></label>
                    <input
                      type="text"
                      id="neighborhood"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu Bairro"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="text-sm font-bold">Cidade <span>*</span></label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira sua Cidade"
                    />
                  </div>
                  <div>
                    <label htmlFor="CEP" className="text-sm font-bold">CEP <span>*</span></label>
                    <input
                      type="text"
                      id="CEP"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira seu CEP"
                    />
                  </div>
                  <div>
                    <label htmlFor="complement" className="text-sm font-bold">Complemento <span>*</span></label>
                    <input
                      type="text"
                      id="complement"
                      className="w-full px-4 py-4 border bg-light-gray-3 border-light-gray-3 rounded-lg
                  focus:outline-none focus:ring-primary focus:border-transparent mb-6"
                      placeholder="Insira Complemento"
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <input
                    type="checkbox"
                    id="termos"
                    className="checkbox bg-none"
                  />
                  <p className="ml-2 text-sm">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
                </div>
                <NavLink to="/">             
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 mt-4 rounded-lg font-bold hover:bg-tertiary"
                    >
                    Criar Conta
                  </button>
                </NavLink>
              </form>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPage;