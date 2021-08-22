import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="logo">Next JS</a>
      </Link>
      <ul>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
