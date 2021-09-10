const Presentation = require('../models/Presentation');

const getAllPresentations = async (req, res) => {
    try {
        const presentations = await Presentation.find({});
        res.json(presentations);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getPresentationById = async (req, res) => {
    try {
        const presentation = await Presentation.findById(req.params.id);
        res.json(presentation);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllPresentations,
    getPresentationById
}