const Product = require('../models/product.model');

module.exports.crearNuevo = (req, res) => {
    console.log('Si funciona!');
    Product.create(req.body)
        .then(newPcto => res.json({ producto: newPcto }))
        .catch(err => res.json({ message: 'Algo está mal', error: err }));
};

module.exports.verPcto = (req, res) => {
    console.log('Si funciona!');
    Product.find({})
        .then(allPctos => res.json({ productos: allPctos }))
        .catch(err => res.json({ message: 'Algo está mal', error: err }));
},

module.exports.encontrarXId = (req, res) => {
    console.log('Si funciona!');
    Product.findById({_id: req.params._id})
        .then(pctoEncontrado => res.json({ producto: pctoEncontrado }))
        .catch(err => res.json({ message: 'Algo está mal', error: err }));
};

module.exports.actualizarXID = (req, res) => {
    console.log('Si funciona!');
    Product.findByIdAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(pctoActualizado => res.json({ producto: pctoActualizado }))
        .catch(err => res.json({ message: 'Algo está mal', error: err }));
};

module.exports.eliminarPcto = (req, res) => {
    console.log('Si funciona!');
    Product.findOneAndDelete({_id: req.params._id} )
        .then(result => res.json({message: 'Producto eliminado', resultado: result}))
        .catch(err => res.json({ message: 'Algo está mal', error: err }));
}