import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar.jsx'; // menu
import Employees from '../pages/Employees.jsx'; // empleados
import Customers from '../pages/Customers'; // clientes
import Products from '../pages/Products'; // productos

function Nav() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default Nav;