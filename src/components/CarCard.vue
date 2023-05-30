<template>
    <!-- NOTE the parameter 'carId' comes from and refers to the param in our router.js file -->
    <!-- NOTE here we are setting the route parameter (carId) to be equal to the unique id of the car we clicked on -->
    <div class="rounded elevation-5" v-if="carProp">
        <router-link :to="{ name: 'CarDetails', params: { carId: carProp?.id } }">
            <img class="img-fluid rounded-top" :src="carProp?.imgUrl" alt="">
        </router-link>
        <div class="p-2">
            <h1>{{ carProp?.model }}</h1>
            <div class="d-flex justify-content-between align-items-center">
                <p>{{ carProp?.price }}</p>
                <img class="creator-img" :src="carProp?.creator.picture" alt="">
            </div>
            <div class="text-end py-2">
                <!-- NOTE FOR UI: if you are going to use an icon as or on a button, you MUST have a title tag that denotes its purpose -->
                <!-- NOTE only show the button if the person logged in is the person who created it -->
                <button @click="deleteCar(carProp?.id)" v-if="carProp?.creator.id == account?.id" class="btn btn-danger"
                    title="Delete Car"><i class="mdi mdi-delete"></i> </button>
            </div>
        </div>
    </div>

    <!-- <h1>CarCard Template</h1> -->
</template>

<script>
import { computed } from 'vue';
import { Car } from '../models/Car.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { carsService } from '../services/CarsService.js';
export default {
    // NOTE we declare props on the child components to be ready to take in data
    props: {
        carProp: { type: Car, required: true }
    },
    setup() {

        return {

            async deleteCar(carId) {
                try {
                    await carsService.deleteCar(carId)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },

            account: computed(() => AppState.account)
        };
    },
};
</script>

<style></style>