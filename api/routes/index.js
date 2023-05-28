const express = require('express');

const plateTypeRouter = require('./plate_type.router')
const garageRouter = require('./garage.router')
const carPlateRouter = require('./car_plate.router')
const orderRouter = require('./order.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/plateType', plateTypeRouter)
  router.use('/garage', garageRouter)
  router.use('/carPlate', carPlateRouter)
  router.use('/order', orderRouter)
}

module.exports = routerApi;
