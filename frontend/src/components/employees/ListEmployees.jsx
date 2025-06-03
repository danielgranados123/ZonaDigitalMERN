import React from "react";
import CardEmployee from "./CardEmployees";

const ListEmployee = ({
  deleteEmployee,
  updateEmployee,
  loading,
  employees,
}) => {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Listado de Empleados
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Cargando empleados...</div>
      ) : employees?.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">No hay empleados registrados.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {employees.map((employee) => (
            <CardEmployee
              key={employee._id}
              employee={employee}
              deleteEmployee={deleteEmployee}
              updateEmployee={updateEmployee}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListEmployee;