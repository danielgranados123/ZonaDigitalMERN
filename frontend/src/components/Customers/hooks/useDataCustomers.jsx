import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';


const useDataCustomers = () => {

    const ApiRegister="http://localhost:4000/api/registerClients";
    const ApiClients="http://localhost:4000/api/clients";
 
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [phone, setPhone] = useState("");
      const [dui, setDui] = useState("");
      const [birthday, setBirthday] = useState("");
      const [errorClient, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [loading, setLoading] = useState(false);
      const [clients, setClients] = useState([]);
    
      const cleanData = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setDui("");
        setBirthday("");
        setId("");
      };
    
      // Guardar datos
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (
          !name ||
          !lastName ||
          !email ||
          !password ||
          !phone ||
          !dui ||
          !birthday
        ) {
          setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
          return;
        }
    
        try {
          const newClient = {
            name,
            lastName,
            email,
            password,
            phone,
            dui,
            birthday
          };
    
          console.log(newClient, "datos nuevo cliente");
    
          const response = await fetch(ApiRegister, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newClient),
          });
    
          if (!response.ok) {
            throw new Error("Hubo un error al registrar al cliente");
          }
    
          const data = await response.json();
            toast.success('Cliente registrado');
          setClients(data);
          setSuccess("Cliente registrado correctamente");
          cleanData();
          fetchData();
        } catch (error) {
          setError(error.message); 
          console.error("Error:", error);
          alert("Error", "Ocurrió un error al registrar al cliente");
            toast.error('Ocurrió un error al registrar al cliente');
        } finally {
          setLoading(false);
        }
      };
    
      // Obtener datos
      const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(ApiClients);
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            setClients(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
        };
    
      const deleteClient = async (id) => {
        try {
          const response = await fetch(
            `${ApiClients}/${id}`,
            {
              method: "DELETE",
              body: JSON.stringify(deleteClient),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to delete client");
          }
    
          const result = await response.json();
          console.log("Deleted:", result);
    toast.success('Cliente eliminado');
          fetchData();
        } catch (error) {
          console.error("Error deleting employee sfs:", error);
        }
      };
    
      const updateClient = async (dataClient) => {
        setId(dataClient._id);
        setName(dataClient.name);
        setLastName(dataClient.lastName);
        setEmail(dataClient.email);
        setPhone(dataClient.phone);
        setDui(dataClient.dui);
        setBirthday(dataClient.birthday);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
      };
    
      const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const updatedClient = {
            name,
            lastName,
            email,
            password,
            phone,
            dui,
            birthday
          };
    
          const response = await fetch(
            `${ApiClients}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedClient),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al actualizar al cliente");
          }
    
          toast.success('Cliente actualizado');
          setSuccess("Cliente actualizado correctamente");
          cleanData();
          setId(""); 
          setActiveTab("list");
          fetchData(); 
        } catch (error) {
          setError(error.message);
          alert("Error al actualizar al cliente");
          console.error("Error:", errorClient);
        } finally {
          setLoading(false);
        }
      };



return {
    activeTab,
    setActiveTab,
    id,
    setId,
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
    birthday,
    setBirthday,
    errorClient,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    clients,
    setClients,
    cleanData,
    handleSubmit,
    fetchData,
    deleteClient,
    updateClient,
    handleUpdate,
};

  };

export default useDataCustomers;