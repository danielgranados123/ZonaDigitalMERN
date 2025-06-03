import React from "react";
import Button from "../Button";

const CardEmployee = ({ employee, deleteEmployee, updateEmployee }) => {
  if (!employee) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.01] duration-200">
      <div className="px-6 py-5 space-y-3">
        <h2 className="text-2xl font-bold text-blue-700">
          {employee.name} {employee.lastName}
        </h2>

        <div className="grid grid-cols-1 gap-4 text-gray-700">
          <p><span className="font-semibold">DUI:</span><br /> {employee.dui}</p>
          <p><span className="font-semibold">Correo:</span><br /> {employee.email}</p>
          <p><span className="font-semibold">Teléfono:</span><br /> {employee.phone}</p>
          <p><span className="font-semibold">Dirección:</span><br /> {employee.address}</p>
          <p><span className="font-semibold">Número ISSS:</span><br /> {employee.isssNumber}</p>
          <p><span className="font-semibold">Fecha de nacimiento:</span><br /> {new Date(employee.birthday).toLocaleDateString()}</p>
          <p><span className="font-semibold">Fecha de contratación:</span><br /> {new Date(employee.hireDate).toLocaleDateString()}</p>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button 
            label="Eliminar"
            actionButton={() => deleteEmployee(employee._id)}
            colorClass="danger"
          />
          <Button 
            label="Editar Información"
            actionButton={() => updateEmployee(employee)}
            colorClass="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CardEmployee;