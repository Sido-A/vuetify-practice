<template>
  <v-container>
    <v-row v-if="productsArray.length > 0">
      <v-col
        v-for="p in productsArray"
        :key="p.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-sheet>
          <ProductCard :product="p" />
        </v-sheet>
      </v-col>
    </v-row>
    <p v-else>Loading...</p>
  </v-container>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
const productsStore = useProductsStore();
const { fetchAllProducts } = productsStore;
const { productsArray } = storeToRefs(productsStore);

await fetchAllProducts();
</script>
