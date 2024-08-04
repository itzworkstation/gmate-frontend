<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";

// import Public from "./layouts/public.vue";
const { user, loading, error } = storeToRefs(useAuthStore());
</script>

<template>
  <!-- <Public /> -->
  <!-- <v-layout class="rounded rounded-md"> -->
  <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
        <v-list-item title="Category 1"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Application bar">
      <RouterLink to="/home" v-if="user.name">Home</RouterLink> - 
      <RouterLink to="/" >Login</RouterLink>
    </v-app-bar> -->

  <RouterView />

  <!-- </v-layout> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
