<template v-slot:append>
  <button
    class="d-flex align-items-center justify-center w-100 mb-5 bg-green pa-3 text-center text-uppercase"
    @click="incrementItem(productId)"
  >
    <span class="mr-1">Add to cart</span>

    <v-icon icon="mdi-cart-plus" size="small"> </v-icon>
  </button>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
const { productId, inCart } = defineProps(["productId", "inCart"]);
const productStore = useProductsStore();
const count = ref(inCart);

const incrementItem = (id: number) => {
  if (count.value >= 99) {
    count.value = 99;
  } else if (count.value < 0) {
    count.value = 0;
  } else {
    count.value++;
    productStore.addToCart(id);
  }
};

const decrementItem = (id: number) => {
  if (count.value <= 0) {
    count.value = 0;
  } else {
    count.value--;
    productStore.removeOneItem(id);
  }
};
</script>
