import Link from 'next/link';
import MenuItem from './menu-item';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkSwitch from './dark-switch';
const Header = () => {
  return (
    <div className="flex items-center justify-between mx-4 max-w-6xl sm:mx-auto py-6">
      <div className="flex space-x-4 md:space-x-6">
        <MenuItem title="Home" link="/" Icon={AiFillHome} />
        <MenuItem title="About" link="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkSwitch />
        <Link href="/">
          <h2 className="text-2xl"> 
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span> 
            <span className="text-xl hidden sm:inline mr-6">Clone</span> 
          </h2>
        </Link>
      </div>
    </div>
  );
};
export default Header;
