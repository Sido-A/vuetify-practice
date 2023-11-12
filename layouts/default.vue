<template>
  <v-app>
    <v-layout>
      <v-app-bar prominent>
        <v-toolbar-title>
          <NuxtLink to="/" class="text-green-darken-1 text-decoration-none">
            Nook's Shop
          </NuxtLink>
        </v-toolbar-title>
        <NuxtLink
          class="text-green-darken-1 text-decoration-none mr-4"
          to="/cart"
        >
          <v-badge :content="numberOfCartItem" color="error">
            <v-icon icon="mdi-cart"></v-icon>
          </v-badge>
        </NuxtLink>
        <v-app-bar-nav-icon
          class="text-green-darken-1 text-decoration-none"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list>
          <v-list-item>
            <NuxtLink class="text-green-darken-1 text-decoration-none" to="/"
              >Home</NuxtLink
            >
          </v-list-item>
          <v-list-item>
            <NuxtLink
              class="text-green-darken-1 text-decoration-none"
              to="/about"
              >About</NuxtLink
            >
          </v-list-item>
          <v-list-item>
            <NuxtLink
              class="text-green-darken-1 text-decoration-none"
              to="/products"
              >Products</NuxtLink
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Body -->
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
const productStore = useProductsStore();
const numberOfCartItem = computed(() => productStore.totalCartItemNumber);
const drawer = ref(false);
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
