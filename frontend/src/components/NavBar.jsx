import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mt-4">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center font-poppins">
        <ul className="flex space-x-8 text-gray-700 font-semibold text-lg">
          <li>
            <Link to="/employees" className="hover:text-blue-600 transition duration-300">Employees</Link>
          </li>
          <li>
            <Link to="/customers" className="hover:text-blue-600 transition duration-300">Customers</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-600 transition duration-300">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;