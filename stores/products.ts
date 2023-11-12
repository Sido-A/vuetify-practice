import { defineStore } from "pinia";
import { type TProductsOriginal, type TProductsWithAdditional } from "~/types";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsArray: [] as Array<TProductsWithAdditional>,
      cart: [] as Array<TProductsWithAdditional>,
      productsFetched: false,
    };
  },

  getters: {
    totalCartItemNumber: (state) => {
      let total = 0;
      state.cart.forEach((item: TProductsWithAdditional) => {
        total += item.cartCount;
      });
      return total;
    },
  },

  actions: {
    async fetchAllProducts() {
      if (this.productsFetched) {
        return this.productsArray;
      }

      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const products = await res.json();
        const newProducts = products.map((product: TProductsOriginal) => {
          return { ...product, cartCount: 0 };
        });
        this.productsArray.push(...newProducts);
        this.productsFetched = true;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProductById(id: number) {
      const product = this.productsArray.find((product) => product.id === id);
      return product;
    },

    addToCart(id: number) {
      const product = this.productsArray.find(
        (product: TProductsWithAdditional) => product.id === id
      );
      if (product) {
        product.cartCount += 1;
        const existingProduct = this.cart.find(
          (item: TProductsWithAdditional) => item.id === product.id
        );

        if (existingProduct) {
          existingProduct.cartCount += 1;
        } else {
          const newProductObj = { ...product };
          this.cart.push(newProductObj);
        }
      }
      return this.cart;
    },

    editQuantity(id: number, quantity: number) {
      const product = this.productsArray.find(
        (product: TProductsWithAdditional) => product.id === id
      );
      if (product) {
        product.cartCount = quantity;
        const existingProduct = this.cart.find(
          (item: TProductsWithAdditional) => item.id === product.id
        );

        if (existingProduct) {
          existingProduct.cartCount = quantity;
        } else {
          const newProductObj = { ...product };
          this.cart.push(newProductObj);
        }
      }
      return this.cart;
    },

    removeOneItem(id: number) {
      const product = this.productsArray.find(
        (product: TProductsOriginal) => product.id === id
      );
      if (product) {
        product.cartCount -= 1;
        const existingProduct = this.cart.find(
          (item: TProductsWithAdditional) => item.id === product.id
        );

        if (existingProduct) {
          existingProduct.cartCount -= 1;
          if (existingProduct.cartCount === 0) {
            this.cart = this.cart.filter(
              (item: TProductsWithAdditional) => item.id !== product.id
            );
          }
        }
      }
      return this.cart;
    },

    bulkRemoveItem(id: number) {
      const product = this.productsArray.find(
        (product: TProductsOriginal) => product.id === id
      );
      if (product) {
        product.cartCount = 0;
        const existingProduct = this.cart.find(
          (item: TProductsWithAdditional) => item.id === product.id
        );

        if (existingProduct) {
          existingProduct.cartCount = 0;
          if (existingProduct.cartCount === 0) {
            this.cart = this.cart.filter(
              (item: TProductsWithAdditional) => item.id !== product.id
            );
          }
        }
      }
      return this.cart;
    },
  },
  persist: true,
});
