import React, { useEffect } from "react";
import RegisterCustomers from "../components/Customers/RegisterCustomers.jsx";
import ListCustomers from "../components/Customers/ListCustomers.jsx";
import { Toaster } from "react-hot-toast";
import useDataCustomers from "../components/Customers/hooks/useDataCustomers.jsx";

const Customers = () => {
  // Cambiar el título de la pestaña al montar el componente
  useEffect(() => {
    document.title = "Clientes | Zona Digital";
  }, []);

  // Hook personalizado con toda la lógica del estado
  const {
    activeTab, setActiveTab,
    id, setId,
    name, setName,
    lastName, setLastName,
    email, setEmail,
    password, setPassword,
    phone, setPhone,
    dui, setDui,
    birthday, setBirthday,
    errorClient, setError,
    success, setSuccess,
    loading, setLoading,
    clients, setClients,
    cleanData,
    handleSubmit, handleUpdate,
    deleteClient, updateClient,
  } = useDataCustomers();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>

        {/* Navegación entre pestañas */}
        <div className="flex border-b border-gray-200 mb-4">
          {["list", "form"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium focus:outline-none transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "form") cleanData();
              }}
            >
              {tab === "list" ? "Lista de clientes" : "Gestionar clientes"}
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        {activeTab === "list" ? (
          <ListCustomers
            deleteClient={deleteClient}
            updateClient={updateClient}
            clients={clients}
            loading={loading}
          />
        ) : (
          <RegisterCustomers
            id={id}
            setId={setId}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            phone={phone}
            setPhone={setPhone}
            dui={dui}
            setDui={setDui}
            birthday={birthday}
            setBirthday={setBirthday}
            errorClient={errorClient}
            setError={setError}
            success={success}
            setSuccess={setSuccess}
            loading={loading}
            setLoading={setLoading}
            clients={clients}
            setClients={setClients}
            cleanData={cleanData}
            handleSubmit={handleSubmit}
            handleUpdate={handleUpdate}
          />
        )}
      </div>

      {/* Notificaciones */}
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Customers;