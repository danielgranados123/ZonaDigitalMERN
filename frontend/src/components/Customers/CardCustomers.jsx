import React from "react";
import Button from "../Button";

const CardCustomer = ({ client, deleteClient, updateClient }) => {
  if (!client) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.01] duration-200">
      <div className="px-6 py-5 space-y-3">
        <h2 className="text-2xl font-bold text-blue-700">
          {client.name} {client.lastName}
        </h2>

        <div className="grid grid-cols-1 gap-4 text-gray-700">
          <p><span className="font-semibold">DUI:</span><br /> {client.dui}</p>
          <p><span className="font-semibold">Correo:</span><br /> {client.email}</p>
          <p><span className="font-semibold">Teléfono:</span><br /> {client.phone}</p>
          <p><span className="font-semibold">Fecha de nacimiento:</span><br /> {new Date(client.birthday).toLocaleDateString()}</p>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button 
            label="Eliminar"
            actionButton={() => deleteClient(client._id)}
            colorClass="danger"
          />
          <Button 
            label="Editar Información"
            actionButton={() => updateClient(client)}
            colorClass="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCustomer;