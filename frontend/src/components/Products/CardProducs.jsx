import React from "react";
import Button from "../Button";

const CardProduct = ({ product, deleteProduct, updateProduct }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.01] duration-200">
      <div className="px-6 py-5 space-y-3">
        <h2 className="text-2xl font-bold text-blue-700">
          {product.name}
        </h2>

        <div className="grid grid-cols-1 gap-4 text-gray-700">
          <p>{product.description}</p>
          <p><span className="font-semibold">${product.price}</span><br /> </p>
          <p><span className="font-semibold">Stock:</span> {product.stock}</p>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button 
            label="Eliminar"
            actionButton={() => deleteProduct(product._id)}
            colorClass="danger"
          />
          <Button 
            label="Editar Información"
            actionButton={() => updateProduct(product)}
            colorClass="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;