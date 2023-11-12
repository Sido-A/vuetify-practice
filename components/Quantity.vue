<template>
  <v-select
    v-model="quantity"
    label="Quantity"
    :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    density="compact"
    variant="outlined"
  ></v-select>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
const productStore = useProductsStore();
const { itemId, itemQuantity } = defineProps(["itemId", "itemQuantity"]);

const quantity = ref<number>(itemQuantity);

watch(quantity, (q) => productStore.editQuantity(itemId, q));
</script>
