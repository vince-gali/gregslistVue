<template>
    <div class="container-fluid">
        <section class="row justify-content-center">

            <div class="col-8">
                <CarCard :carProp="activeCar" />
                <h1>{{ activeCar?.engineType }}</h1>
                <h2>{{ activeCar?.description }}</h2>
            </div>


        </section>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { carsService } from '../services/CarsService.js';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
export default {
    setup() {
        const route = useRoute(); // NOTE: gives me access to the current route or URL I am on
        const router = useRouter(); // NOTE gives me access to the entire VUE router (this router.js here)
        async function getCarById() {
            try {
                // NOTE grab the carId from the route parameters
                const carId = route.params.carId;
                await carsService.getCarById(carId);
            }
            catch (error) {
                Pop.error(error.message);
                logger.log(error);
            }
        }
        onMounted(() => {
            getCarById();
        });
        return {
            activeCar: computed(() => AppState.activeCar)
        };
    },
    components: { CarCard }
};
</script>

<style></style>