import { headerLogo, headerLogo2 } from '../assets/images';
import {hamburger} from '../assets/icons';

const Nav = () => {
  return (
    <header className="bg-[#363837] py-2">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6  ">
        
        <div className="text-center">
          <a href="/">
            <img src={headerLogo} alt="Jetour Logo" className="w-[160px] h-[70px] mx-auto" />
          </a>
        </div>

        <div className="flex space-x-8 text-white text-base uppercase max-lg:hidden">
          <a href="/" className="text-white font-semibold text-sm hover:opacity-50 font-montserrat" >Home</a>
          <a href="/models" className="text-gray-400 text-sm hover:opacity-50 font-montserrat" >Models</a>
          <a href="/more" className="text-gray-400 text-sm hover:opacity-50 font-montserrat" >More</a>
        </div>

        <div className='max-lg:hidden'>
          <img src={headerLogo2} alt="Suweys Motors Logo" className="h-11" />
        </div>

        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" width={25} height={25} className="filter invert" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
