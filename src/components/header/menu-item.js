import Link from 'next/link';
const MenuItem = ({ title, link, Icon }) => {
  return (
    <Link href={link} className="hover:text-amber-600">
      <Icon className="text-2xl sm:hidden inline-block" />
      <p className="hidden sm:inline my-2 text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
