const database = require('../config/database');
const product = database.product;

const getAllAntiques = (req, res) => {
    product.findAll()
        .then(antiques => res.status(200).json(antiques))
        .catch(error => res.status(500).json({ message: 'Error fetching antiques', error }));
};

const getAntiqueById = (req, res) => {
    const { id } = req.params;
    product.findByPk(id)
        .then(antique => {
            if (antique) {
                res.status(200).json(antique);
            } else {
                res.status(404).json({ message: 'Antique not found' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error fetching antique', error }));
};
const createAntique = (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    product.create({ name, price, description, imageUrl })
        .then(newAntique => res.status(201).json(newAntique))
        .catch(error => res.status(500).json({ message: 'Error creating antique', error }));
};

const updateAntique = (req, res) => {
    const { id } = req.params;
    product.update(req.body, { where: { id } })
        .then(([updated]) => {
            if (updated) {
                return product.findByPk(id)
                    .then(updatedAntique => res.status(200).json(updatedAntique));
            } else {
                res.status(404).json({ message: 'Antique not found' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error updating antique', error }));
};

const deleteAntique = (req, res) => {
    const { id } = req.params;
    product.destroy({ where: { id } })
        .then(deleted => {
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Antique not found' });
            }
        })
        .catch(error => res.status(500).json({ message: 'Error deleting antique', error }));
};

module.exports = {
    getAllAntiques,
    getAntiqueById,
    createAntique,
    updateAntique,
    deleteAntique
};