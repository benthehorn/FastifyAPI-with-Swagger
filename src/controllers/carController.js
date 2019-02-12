const boom = require('boom');

const Car = require('../models/Car');

// get all cars
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        return cars;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// get single car by id
exports.getSingleCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (error) {
        throw boom.boomify(error);
    }
}

// add a car
exports.addCar = async (req, res) => {
    try {
        const car = new Car(req.body);
        return car.save();
    } catch (error) {
        throw boom.boomify(error);
    }
}

//update a car
exports.updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const { ...updateData } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
        return update;
    } catch (error) {
        throw boom.boomify(error);
    }
}

// delete a car
exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (error) {
        throw boom.boomify(error);
    }
}
