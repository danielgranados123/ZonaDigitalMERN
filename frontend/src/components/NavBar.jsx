import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mt-4">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center font-poppins">
        <ul className="flex space-x-8 text-gray-700 font-semibold text-lg">
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 transition duration-300"
                  : "hover:text-blue-600 transition duration-300"
              }
            >
              Empleados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 transition duration-300"
                  : "hover:text-blue-600 transition duration-300"
              }
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 transition duration-300"
                  : "hover:text-blue-600 transition duration-300"
              }
            >
              Productos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;