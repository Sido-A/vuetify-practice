<template>
  <v-container
    class="d-flex align-center justify-space-between flex-column flex-md-row h-100"
  >
    <v-row>
      <v-col cols="2">
        <v-img
          v-for="(img, i) in product.images"
          class="mb-1 cursor-pointer"
          :key="img"
          :width="100"
          aspect-ratio="4/3"
          :src="img"
          :alt="img"
          @click="model = i"
        >
        </v-img>
      </v-col>
      <v-col cols="6">
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(img, i) in product.images"
            :src="img"
            :alt="img"
            :value="i"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="4">
        <div class="ma-3">
          <p class="mb-5 text-h5 font-weight-light">{{ product.title }}</p>

          <v-divider class="mb-5"></v-divider>

          <p class="mb-5 text-body-h5">{{ product.description }}</p>
          <p class="mb-5 text-h6 font-weight-bold">£{{ product.price }}</p>

          <CartItemController
            :productId="product.id"
            :inCart="product.cartCount"
          />
          <v-sheet border class="pa-3">
            <small>Free delivery for over £50 purchase.</small>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { product } = defineProps(["product"]);
const model = ref(0);
</script>
