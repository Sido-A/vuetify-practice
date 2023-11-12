<template>
  <NuxtLink
    class="text-grey-darken-4 text-decoration-none"
    :to="`/products/${product.id}`"
  >
    <v-img
      cover
      :aspect-ratio="1"
      :src="product.images[0]"
      :alt="product.title"
      :lazy-src="`https://picsum.photos/10/6?image=${2 * 5 + 10}`"
    ></v-img>
    <p class="font-weight-thin">
      {{ product.title }}
    </p>
    <p class="font-weight-bold">£{{ product.price }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
