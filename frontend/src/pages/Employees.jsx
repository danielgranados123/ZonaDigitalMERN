import React, { useEffect } from "react";
import RegisterEmployees from "../components/Employees/RegisterEmployees.jsx";
import ListEmployees from "../components/Employees/ListEmployees.jsx";
import { Toaster } from "react-hot-toast";
import useDataEmployees from "../components/Employees/hooks/useDataEmployees.jsx";

const Employees = () => {
  // Cambiar el título de la pestaña al montar el componente
  useEffect(() => {
    document.title = "Empleados | Zona Digital";
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
    address, setAddress,
    birthday, setBirthday,
    hireDate, setHireDate,
    isssNumber, setIsssNumber,
    errorEmpleado, setError,
    success, setSuccess,
    loading, setLoading,
    employees, setEmployees,
    cleanData,
    handleSubmit, handleUpdate,
    deleteEmployee, updateEmployee,
  } = useDataEmployees();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Empleados</h1>

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
              {tab === "list" ? "Lista de empleados" : "Gestionar empleados"}
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        {activeTab === "list" ? (
          <ListEmployees
            setId={setId}
            setActiveTab={setActiveTab}
            updateEmployee={updateEmployee}
            handleUpdate={handleUpdate}
            deleteEmployee={deleteEmployee}
            employees={employees}
            loading={loading}
          />
        ) : (
          <RegisterEmployees
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
            address={address}
            setAddress={setAddress}
            birthday={birthday}
            setBirthday={setBirthday}
            hireDate={hireDate}
            setHireDate={setHireDate}
            isssNumber={isssNumber}
            setIsssNumber={setIsssNumber}
            errorEmpleado={errorEmpleado}
            setError={setError}
            success={success}
            setSuccess={setSuccess}
            loading={loading}
            setLoading={setLoading}
            employees={employees}
            setEmployees={setEmployees}
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

export default Employees;