// import { defineStore } from "pinia";
// import { type TProductsOriginal, type TProductsWithAdditional } from "~/types";

// export const useProductsStore = defineStore("products", () => {
//   const productsArray = ref<Array<TProductsOriginal>>([]);
//   const cart = ref<Array<TProductsWithAdditional>>([]);

//   const fetchAllProducts = async () => {
//     try {
//       const { data } = await useFetch("https://fakestoreapi.com/products");
//       const products = data.value as Array<TProductsOriginal>;
//       const newProducts = products.map((d: TProductsOriginal) => {
//         return { ...d, cartCount: 0 };
//       });
//       productsArray.value = newProducts;
//       return productsArray.value;
//     } catch (error) {
//       throw { statusCode: 500, message: error };
//     }
//   };

//   const totalCartItemNumber = () => {
//     let total = 0;
//     cart.value.forEach((item) => {
//       total += item.cartCount;
//     });
//     return total;
//   };

//   const addToCart = (id: number) => {
//     const product = productsArray.value.find((product) => product.id === id);
//     if (product) {
//       const existingProduct = cart.value.find((item) => item.id === product.id);

//       if (existingProduct) {
//         existingProduct.cartCount += 1;
//       } else {
//         const newProductObj = { ...product, cartCount: 1 };
//         cart.value.push(newProductObj);
//       }
//     }
//     return cart.value;
//   };

//   const removeOneItem = (id: number) => {
//     const product = productsArray.value.find((product) => product.id === id);
//     if (product) {
//       const existingProduct = cart.value.find((item) => item.id === product.id);

//       if (existingProduct) {
//         existingProduct.cartCount -= 1;
//         if (existingProduct.cartCount === 0) {
//           cart.value = cart.value.filter((item) => item.id !== product.id);
//         }
//       }
//     }
//     return cart.value;
//   };

//   const bulkRemoveItem = (id: number) => {
//     cart.value = cart.value.filter((item) => {
//       if (item.id === id) {
//         item.cartCount = 0;
//       }
//       return item.id !== id;
//     });
//     return cart.value;
//   };

//   onMounted(() => fetchAllProducts());

//   return {
//     productsArray,
//     cart,
//     addToCart,
//     removeOneItem,
//     bulkRemoveItem,
//     totalCartItemNumber,
//     fetchAllProducts,
//   };
// });
