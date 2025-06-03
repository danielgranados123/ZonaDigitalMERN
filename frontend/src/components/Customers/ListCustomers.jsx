import React from "react";
import CardCustomer from "./CardCustomers";

const ListCustomers = ({
  deleteClient,
  updateClient,
  loading,
  clients,
}) => {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Listado de Clientes
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Cargando clientes...</div>
      ) : clients?.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">No hay clientes registrados.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {clients.map((client) => (
            <CardCustomer
              key={client._id}
              client={client}
              deleteClient={deleteClient}
              updateClient={updateClient}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListCustomers;