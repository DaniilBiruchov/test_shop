<template>
  <v-container class="products">
    <v-expansion-panels>
      <v-expansion-panel v-for="(category, i) in getProducts" :key="i">
        <v-expansion-panel-header>
          {{ category.G }}
        </v-expansion-panel-header>
        <v-expansion-panel-content v-for="(product, i) in category.B" :key="i">
          <div class="products_listProduct">
            <p class="products_listProduct_name">
              {{ product.N }} ({{ product.P }})
            </p>
            <div class="products_listProduct_info">
              <p class="products_listProduct_info_price">
                {{ (product.C * currentRate).toFixed(2) }}
              </p>
              <button
                class="products_listProduct_info_action"
                @click="addProducts(product, category.G)"
              >
                Купить
              </button>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ProductList',
  props: {
    currentRate: {
      type: Number,
    },
  },
  data: () => ({}),
  async mounted() {
    await this.fetchProducts();
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations(['addProductToBasket']),

    addProducts(product, category) {
      this.addProductToBasket({ product, category });
    },
  },
};
</script>
<style scoped>
.products {
  margin-right: 10px;
}
.products_listProduct {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products_listProduct_name {
  width: 70%;
}
.products_listProduct_info {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.products_listProduct_info_price {
  padding-right: 5px;
  margin-right: 5px;
  border-right: 1px solid grey;
}
.products_listProduct_info_action {
  color: white;
  background: #8c9eff;
  border: 1px solid;
  padding: 4px 6px;
}
</style>
