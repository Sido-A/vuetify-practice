<template>
  <v-container v-if="cart.length > 0">
    <v-row>
      <v-col sm="12" md="8">
        <v-row v-for="item in cart" :key="item.title">
          <v-col cols="12">
            <v-card elevated="2">
              <div class="d-flex align-center">
                <v-avatar class="ma-3" size="150" rounded="0">
                  <v-img
                    cover
                    :src="item.images[0]"
                    :alt="item.title"
                    :lazy-src="`https://picsum.photos/10/6?image=${2 * 5 + 10}`"
                  ></v-img>
                </v-avatar>

                <div
                  class="d-flex align-baseline justify-space-between pa-5 w-100"
                >
                  <div class="w-100">
                    <p class="font-weight-bold text-body-1">
                      £{{ item.price }}
                    </p>

                    <p class="text-body-1 mb-5">
                      {{ item.title }}
                    </p>

                    <Quantity
                      :itemId="item.id"
                      :itemQuantity="item.cartCount"
                    />
                  </div>
                  <v-btn
                    variant="flat"
                    icon="mdi-trash-can-outline"
                    @click="bulkRemoveItem(item.id)"
                  >
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="12" md="4">
        <v-row class="">
          <v-col cols="12">
            <v-card class="pa-5">
              <p class="text-h5 font-weight-bold mb-4">Total</p>
              <v-divider class="mb-4"></v-divider>

              <div class="d-flex align-center justify-space-between mb-4">
                <p class="font-weight-bold">Sub-total</p>
                <p>£100</p>
              </div>

              <div class="d-flex align-center justify-space-between mb-4">
                <p class="font-weight-bold">Delivery Fee</p>
                <p>£{{ deliveryCost }}</p>
              </div>

              <v-select
                v-model="deliveryType"
                label="Delivery Type"
                :items="['Standard', 'Express']"
                density="compact"
                variant="outlined"
              ></v-select>

              <v-divider class="mb-4"></v-divider>

              <button
                class="w-100 mb-5 bg-green pa-3 font-weight-bold text-center text-uppercase"
              >
                Check out
              </button>

              <p class="text-uppercase mb-3 font-weight-bold">We accept:</p>
              <v-img
                :width="200"
                src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                alt="Accepted payment methods are Visa Card, Master Card, Paypal, American Express, Visa Electron"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();
const { bulkRemoveItem } = store;
const { cart } = storeToRefs(store);

const deliveryType = ref("Standard");
const deliveryCost = ref<number>(0);

watch(deliveryType, (delivery) => {
  switch (delivery) {
    case "Standard":
      if ("total in cart".length < 50) {
        deliveryCost.value = 10;
      } else {
        deliveryCost.value = 0;
      }
      return deliveryCost.value;

    case "Express":
      if ("total in cart".length < 50) {
        deliveryCost.value = 30;
      } else {
        deliveryCost.value = 0;
      }

      return deliveryCost.value;

    default:
      return deliveryCost.value;
  }
});
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
