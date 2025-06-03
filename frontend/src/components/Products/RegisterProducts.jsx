import React from "react";
import Button from "../Button";

const RegisterProducts = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        {id ? "Editar Producto" : "Registro de Nuevo Producto"}
      </h2>

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          <InputField label="Nombre" value={name} setValue={setName} placeholder="Computadora" />
          <InputField label="Descripción" value={description} setValue={setDescription} placeholder="Computadora de última generación" />
          <InputField label="Precio" type="number" value={price} setValue={setPrice} placeholder="199.99" />
          <InputField label="Stock" type="number" value={stock} setValue={setStock} placeholder="12" />
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

export default RegisterProducts;