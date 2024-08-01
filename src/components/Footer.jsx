import Logo from '../assets/footer-logo.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import Information from './Information';

const Footer = () => {
  const informationData = [
    { text: 'Sobre Drip Store', link: '#' },
    { text: 'Segurança', link: '#' },
    { text: 'Wishlist', link: '#' },
    { text: 'Blog', link: '#' },
    { text: 'Trabalhe conosco', link: '#' },
    { text: 'Meus Pedidos', link: '#' },
  ];

  const CategoriasData = [
    { text: 'Camisetas', link: '#' },
    { text: 'Calças', link: '#' },
    { text: 'Bonés', link: '#' },
    { text: 'Headphones', link: '#' },
    { text: 'Tênis', link: '#' }, 
  ];

  const ContatoData = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE', link: '#' },
    { text: '(85) 3051-3411', link: '#' },
  ];

  return (  
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-start p-5 pt-12 c-max-width">
        <div className="pt-8 flex flex-col items-start">
          <div className="flex items-center">
            <img src={Logo} alt="" className='' />
            <h1 className='text-2xl font-semibold pl-1'>Digital Store</h1>
          </div>
          <p className='mt-4 md:mt-10 md:w-3/5 font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> 
          <div className='flex gap-8 mt-5 items-center'>
            <a href="#"><img src={FacebookIcon} alt="" /></a>
            <a href="#"><img src={InstagramIcon} alt="" className='ml-1'/></a>
            <a href="#"><img src={TwitterIcon} alt="" /></a>
          </div>
        </div>
        <div className="flex gap-12 justify-self sm:flex-row md:justify-center mt-8 md:mr-4">
          <Information title='Informações' informations={informationData} />
          <Information title='Categorias' informations={CategoriasData} />
        </div>
        <div className='pt-8 sm:mt-0 mb-8 md:ml-6 md:max-w-60 md:mr-4'>
          <Information title='Contato' informations={ContatoData} className='mb-12'/>
        </div>
      </div>
      <div className='container mx-auto md:flex-row c-max-width'>
        <hr className='mx-6 border-t border-gray-600 md:mt-4'/> 
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-sm font-extralight mt-8 mb-10'>© 2024 Digital College</p>
      </div>   
    </footer>
  );
}
 
export default Footer;