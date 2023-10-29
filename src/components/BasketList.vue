<template>
  <v-container class="basket">
    <div
      v-for="(product, index) in getBasket"
      :key="index"
      class="basket_products"
    >
      <p class="basket_products_category">
        {{ product.category }}
      </p>
      <p class="basket_products_name">
        {{ product.name }}
      </p>
      <div class="basket_products_price">
        <input
          v-model="product.count"
          type="text"
          class="basket_products_price_field"
          disabled
        />
      </div>
      <p class="basket_products_count">
        {{ (product.price * currentRate).toFixed(2) }}
      </p>
      <button class="basket_products_action" @click="removeProduct(product)">
        Удалить
      </button>
    </div>
    <div v-if="getBasket.length > 0">
      Общая стоимость: {{ (getBasketTotal * currentRate).toFixed(2) }}
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'BasketList',
  props: {
    currentRate: {
      type: Number,
    },
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['getBasket', 'getBasketTotal']),
  },
  methods: {
    ...mapMutations(['removeProductFromBasket']),

    removeProduct(product) {
      this.removeProductFromBasket(product);
    },
  },
};
</script>
<style scoped>
.basket_products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.basket_products_category {
  border: 1px solid;
  background: #ffff0088;
  width: 20%;
  margin-right: 8px;
  text-align: center;
}
.basket_products_name {
  width: 50%;
  margin-right: 8px;
}
.basket_products_price {
  width: 5%;
  margin-right: 8px;
}
.basket_products_price_field {
  border: 1px solid black;
  width: 100%;
  text-align: center;
}
.basket_products_count {
  width: 10%;
  margin-right: 8px;
}
.basket_products_action {
  width: 15%;
  color: white;
  background: #b71c1c;
  border: 1px solid;
  padding: 4px;
  text-align: center;
}
</style>
