const express = require('express');

const {FlightMiddleware}=require('../../middlewares/index');
const CityController = require("../../controllers/city-controller");
const FlightController=require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

router.post('/flights',FlightMiddleware.validateCreateFligth,FlightController.create);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);

router.post('/airport',AirportController.create);
router.get('/flights/:id',FlightController.get);
module.exports= router;