<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div>
  </div>
  <div>
    <p class="bg-info">Hello from the home page</p>
  </div>

  <div>
    <h1>{{ number }}</h1>
    <button class="btn btn-warning" @click="incrementNumber()">Increment</button>
  </div>

  <div class="p-2">
    <!-- NOTE only render the 'logged in' button IF there is an account -->
    <!-- <button class="btn btn-success" v-if="account.id">Logged In</button> -->

    <!-- NOTE this v-bind (shorthand is the ':') says add the disabled attribute if there is no account logged in -->
    <button class="btn btn-success" :disabled="!user.id">Logged In</button>
    <button class="btn btn-danger" v-if="user.id">Not Logged In</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    // NOTE this is where private functions go
    // NOTE you can this of this as similar to when we write functions outside of the controller class
    return {

      incrementNumber() {
        logger.log('increasing the number!')
        // NOTE because we are manipulating the AppState, good practice with MVC would be to move this to a service
        AppState.number++
      },


      // NOTE if you want to access a method or a variable from your template, those will be declared here
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      number: computed(() => AppState.number)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
