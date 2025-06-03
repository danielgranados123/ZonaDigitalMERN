import React from "react";
import Button from "../Button";

const RegisterEmployees = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  phone,
  setPhone,
  dui,
  setDui,
  address,
  setAddress,
  birthday,
  setBirthday,
  hireDate,
  setHireDate,
  isssNumber,
  setIsssNumber,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        {id ? "Editar Empleado" : "Registro de Nuevo Empleado"}
      </h2>

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Nombre" value={name} setValue={setName} placeholder="Bryan" />
          <InputField label="Apellido" value={lastName} setValue={setLastName} placeholder="Miranda" />
          <InputField label="Correo Electrónico" type="email" value={email} setValue={setEmail} placeholder="bryan_miranda@ricaldone.edu.sv" />
          <InputField label="Contraseña" type="password" value={password} setValue={setPassword} placeholder="********" />
          <InputField label="Teléfono" value={phone} setValue={setPhone} placeholder="1234-5678" />
          <InputField label="DUI" value={dui} setValue={setDui} placeholder="12345678-1" />
          <InputField label="Dirección" value={address} setValue={setAddress} placeholder="Calle Principal #123, San Salvador" />
          <InputField label="Fecha de Nacimiento" type="date" value={birthday} setValue={setBirthday} readOnly={!!birthday} />
          <InputField label="Fecha de Contratación" type="date" value={hireDate} setValue={setHireDate} />
          <InputField label="Número de ISSS" value={isssNumber} setValue={setIsssNumber} placeholder="987957321" />
        </div>

        <div className="mt-6 text-center">
          {id ? (
            <Button
              type="submit"
              label="Editar Información"
              actionButton={handleUpdate}
              colorClass="warning"
            />
          ) : (
            <Button
              type="submit"
              label="Registrar"
              actionButton={handleSubmit}
              colorClass="primary"
            />
          )}
        </div>
      </form>
    </section>
  );
};

// Subcomponente reutilizable para campos de entrada
const InputField = ({
  label,
  type = "text",
  value,
  setValue,
  placeholder = "",
  readOnly = false,
}) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default RegisterEmployees;