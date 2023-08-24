'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre'); 
  return (
    <Link href={`/?genre=${param}`} className={`hover:text-amber-600 text-lg font-semibold ${genre === param ?'underline underline-offset-8 rounded-lg decoration-amber-500':''}`}>
      {title}
    </Link>
  );
};
export default NavbarItem;
