import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Work</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
