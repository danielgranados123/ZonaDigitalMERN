import faqsModel from "../models/Faqs.js";

const faqsController = {};

//SELECT
faqsController.getAllFaqs = async(req,res) => {
    try {
        const faqs = await faqsModel.find()
        res.status(200).json(faqs) // Todo bien
    } catch (error) {
        console.log("error "+error)
        res.status(500).json("Internal server error") // Error del servidor
    }    
}

faqsController.insertFaqs = async (req, res) => {
    // Pedir datos
    const { question, answer, level, isActive } = req.body;

    try {
        // Validaciones

        if(!question || !answer || !level || !isActive ){
            return res.status(400).json({message: "Please complete all the fields"}) // Error del cliente, campos vacios
        }   
        
        if(level < 1 || level > 10 ){
            return res.status(400).json({message: "Invalid level"}) // Error del cliente, nivel inválido
        }

        if(question.length < 4 || answer.length < 4 || question.length > 100 || answer.length > 100){
            return res.status(400).json({message: "Invalid length"}) // Error del cliente, longitud del texto muy corta o muy larga
        }

        // Guardar datos
        const newFaqs = new faqsModel({ question, answer, level, isActive });

        newFaqs.save();

        res.status(200).json({message: "Faq saved"}); // Todo bien

    } catch (error) {
        console.log("error "+error)
        return res.status(500).json("Internal server error") // Error del servidor
    }
}

//UPDATE
faqsController.updateFaqs = async(req, res)=>{
    // Pedir datos
    const { question, answer, level, isActive } = req.body;

    try {
        // Validaciones
        if(level < 1 || level > 10 ){
            return res.status(400).json({message: "Invalid level"}) // Error del cliente, nivel inválido
        }

        if(question.length < 4 || answer.length < 4 || question.length > 100 || answer.length > 100){
            return res.status(400).json({message: "Invalid length"}) // Error del cliente, longitud del texto muy corta o muy larga
        }

        // Guardar datos
        faqsUpdated = await faqsModel.findByIdAndUpdate(
            req.params.id,
            { question, answer, level, isActive },
            { new: true }
        )

        if(!faqsUpdated){
            return res.status(400).json({message: "faq not found"}) // Error del cliente, faq no encontrada
        }

        res.status(200).json({message: "Faqs updated"}) // Todo bien

    } catch (error) {
        console.log("error "+error)
        return res.status(500).json("Internal server error") // Error del servidor
    }
}

//DELETE
faqsController.deleteFaqs = async (req, res) => {
    try {
        const deletedFaqs = await faqsModel.findByIdAndDelete(req.params.id)

        if(!deletedFaqs){
            return res.status(400).json({message: "faq not found"}) // Error del cliente, faq no encontrada
        }

        res.status(200).json({message: "Faqs deleted"}) // Todo bien

    } catch (error) {
        console.log("error "+error)
        return res.status(500).json("Internal server error") // Error del servidor
    }
}

export default faqsController;