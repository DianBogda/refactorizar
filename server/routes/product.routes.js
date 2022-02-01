const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get("/api/productos", ProductController.verPcto);
    app.post("/api/producto/nuevo", ProductController.crearNuevo);
    app.get("/api/producto/:_id", ProductController.encontrarXId);
    app.put("/api/producto/update/:_id", ProductController.actualizarXID);
    app.delete("/api/producto/delete/:_id", ProductController.eliminarPcto)
}