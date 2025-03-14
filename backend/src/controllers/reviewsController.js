// Array de métodos (CRUD)
const reviewsController = {};
import reviewsModel from "../models/Reviews.js"

// SELECT
reviewsController.getReviews = async (req, res) => {
    const review = await reviewsModel.find().populate('idClient')
    res.json(review)
};

// INSERT
reviewsController.createReviews = async (req, res) => {
    const { comment, rating, idClient } = req.body;
    const newReview = new reviewsModel({ comment, rating, idClient });
    await newReview.save()
    res.json({ message: "Review saved"})
};

// DELETE
reviewsController.deleteReviews = async (req, res) => {
    await reviewsModel.findOneAndDelete(req.params.id)
    res.json({ message: "Review deleted"})
};

// UPDATE
reviewsController.updateReviews = async (req, res) => {
    const { comment, rating, idClient } = req.body;
    await reviewsModel.findByIdAndUpdate(req.params.id, 
    {
        comment, 
        rating, 
        idClient
    }, {new: true}
    );

    res.json({ message: "Review updated"})
};

export default reviewsController;