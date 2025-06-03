import React, { useEffect } from "react";
import RegisterProducts from "../components/Products/RegisterProducts.jsx";
import ListProducts from "../components/Products/ListProducts.jsx";
import { Toaster } from "react-hot-toast";
import useDataProducts from "../components/Products/hooks/useDataProducts.jsx";

const Products = () => {
  // Cambiar el título de la pestaña al montar el componente
  useEffect(() => {
    document.title = "Empleados | Zona Digital";
  }, []);

  // Hook personalizado con toda la lógica del estado
  const {
    activeTab, setActiveTab,
    id, setId,
    name, setName,
    description, setDescription,
    price, setPrice,
    stock, setStock,
    errorProduct, setError,
    success, setSuccess,
    loading, setLoading,
    products, setProducts,
    cleanData,
    handleSubmit, handleUpdate,
    deleteProduct, updateProduct,
  } = useDataProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Productos</h1>

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
              {tab === "list" ? "Lista de productos" : "Gestionar productos"}
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        {activeTab === "list" ? (
          <ListProducts
            setId={setId}
            setActiveTab={setActiveTab}
            updateProduct={updateProduct}
            handleUpdate={handleUpdate}
            deleteProduct={deleteProduct}
            products={products}
            loading={loading}
          />
        ) : (
          <RegisterProducts
            id={id}
            setId={setId}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            stock={stock}
            setStock={setStock}
            errorProduct={errorProduct}
            setError={setError}
            success={success}
            setSuccess={setSuccess}
            loading={loading}
            setLoading={setLoading}
            products={products}
            setProducts={setProducts}
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

export default Products;