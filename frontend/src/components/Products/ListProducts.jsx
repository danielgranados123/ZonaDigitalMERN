import React from "react";
import CardProduct from "./CardProducs";

const ListProduct = ({
  deleteProduct,
  updateProduct,
  loading,
  products,
}) => {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Listado de Productos
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Cargando productos...</div>
      ) : products?.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">No hay productos registrados.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListProduct;