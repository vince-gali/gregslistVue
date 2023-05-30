import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CarsService {

    async getCars() {
        const res = await api.get('api/cars')
        logger.log('[GETTING CARS]', res.data)
        AppState.cars = res.data.map(c => new Car(c))
        // logger.log(AppState.cars)
    }

    async getCarById(carId) {
        const res = await api.get(`api/cars/${carId}`)
        logger.log('[GETTING CAR BY ID]', res.data)
        AppState.activeCar = new Car(res.data)
    }


    async createCar(formData) {
        const res = await api.post('api/cars', formData)
        logger.log('[CREATING CAR]', res.data)
        AppState.cars.unshift(new Car(res.data))
    }

    async deleteCar(carId) {
        const res = await api.delete(`api/cars/${carId}`)
        logger.log('[DELETING CAR]', res.data)
        AppState.cars = AppState.cars.filter(c => c.id != carId)
    }
}

export const carsService = new CarsService()