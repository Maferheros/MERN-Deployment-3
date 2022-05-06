const express = require( 'express' );
const ProductRouter = express.Router();
const Productcontroller = require( './../controladores/product.controller');

ProductRouter.post ('/new', Productcontroller.crearProducto);
ProductRouter.get( '', Productcontroller.getAllProductos);
ProductRouter.get( '/:id', Productcontroller.getOneProducto);

module.exports = ProductRouter;