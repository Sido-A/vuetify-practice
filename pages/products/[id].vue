<template>
  <ProductDetail :product="product" />
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
const productStore = useProductsStore();
const { id } = useRoute().params;
const product = await productStore.fetchProductById(parseInt(id));
</script>
