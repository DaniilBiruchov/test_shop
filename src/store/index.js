import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/api/api';
import { mapProducts } from '@/utils/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
    basketProducts: [],
  },
  getters: {
    getBasketTotal(state) {
      return state.basketProducts.reduce((sum, item) => sum + item.price, 0);
    },
    getBasket(state) {
      return state.basketProducts;
    },
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addProductToBasket(state, { product, category }) {
      const similarProduct = state.basketProducts.find(
        (el) => el.name === product.N
      );
      if (similarProduct) {
        if (product.P > similarProduct.count) {
          similarProduct.count += 1;
          similarProduct.price = product.C * similarProduct.count;
          return;
        }
        return;
      }
      const currentProduct = {
        price: product.C,
        count: 1,
        name: product.N,
        category,
      };
      state.basketProducts.push(currentProduct);
    },
    removeProductFromBasket(state, payload) {
      const indexProduct = state.basketProducts.indexOf(payload);
      if (payload.count > 1) {
        return (payload.count -= 1);
      }
      state.basketProducts.splice(indexProduct, 1);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const [products, productsNames] = await Promise.all([
          Api.fetchProducts(),
          Api.fetchProductsNames(),
        ]);
        const getProductList = mapProducts(products, productsNames);
        commit('setProducts', getProductList);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
