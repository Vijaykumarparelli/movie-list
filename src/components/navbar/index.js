import NavbarItem from './navbar-item';

const Navbar = () => {
  return (
    <div className="flex justify-center p-4 bg-amber-100 dark:bg-gray-600 space-x-3">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};
export default Navbar;
