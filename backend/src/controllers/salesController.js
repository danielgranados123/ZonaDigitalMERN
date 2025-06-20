import salesModel from "../models/Sales.js";

const salesController = {};

salesController.salesByCategory = async(req, res)=>{
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$category", 
                        totalVentas: {$sum: "$total"}
                    }
                },
                // ordenar
                {
                    $sort: {
                        totalVentas: -1 // De mayor a menor
                    }
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error " + error)
        res.status(500).json({message: "Internal server error"})
    }
}

salesController.bestSellingProducts = async(req, res)=>{
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$product", 
                        cantidad: {$sum: 1}
                    }
                },
                // ordenar
                {
                    $sort: {
                        cantidad: -1 // De mayor a menor
                    }
                },
                // limitar la cantidad de datos a mostrar
                {
                    $limit: 5
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error " + error)
        res.status(500).json({message: "Internal server error"})
    }
}

salesController.frequentCustomer = async(req, res)=>{
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$customer", 
                        compras: {$sum: "$total"}
                    }
                },
                // ordenar
                {
                    $sort: {
                        compras: -1 // De mayor a menor
                    }
                },
                // limitar la cantidad de datos a mostrar
                {
                    $limit: 3
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error " + error)
        res.status(500).json({message: "Internal server error"})
    }
}

salesController.totalEarnings = async(req, res)=>{
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: null, 
                        gananciasTotales: {$sum: "$total"}
                    }
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error " + error)
        res.status(500).json({message: "Internal server error"})
    }
}

salesController.insertSales = async(req, res)=>{
    try {
        const { product, category, customer, total, date } = req.body;

        const newSale = new salesModel({product, category, customer, total, date})

        await newSale.save()

        res.status(200).json({message: "Sale saved"})
    } catch (error) {
        console.log("error " + error)
        res.status(500).json({message: "Internal server error"})
    }
}

export default salesController;