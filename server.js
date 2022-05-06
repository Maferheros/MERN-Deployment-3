const express = require('express');
const cors = require('cors')
require( './config/config');
const app = express();
app.use(cors())
const ProductRouter = require ('./rutas/product.routes');
app.use(express.json() );
app.use( '/api/product', ProductRouter);
app.listen(8080, () => {
    console.log("Listening at Port 8080")
});
