<template>
  <v-container class="main_basket">
    <div
      v-for="(product, index) in getBasket"
      :key="index"
      class="basketProduct"
    >
      <p class="basketProduct_category">
        {{ product.category }}
      </p>
      <p class="basketProduct_name">
        {{ product.name }}
      </p>
      <div class="basketProduct_price">
        <input
          v-model="product.count"
          type="text"
          class="basketProduct_price_field"
        />
      </div>
      <p class="basketProduct_count">
        {{ (product.price * currentRate).toFixed(2) }}
      </p>
      <button class="basketProduct_action" @click="removeProduct(product)">
        Удалить
      </button>
    </div>
    <div>Общая стоимость: {{ (getBasketTotal * currentRate).toFixed(2) }}</div>
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
      console.log(this.getBasket);
      this.removeProductFromBasket(product);
    },
  },
};
</script>
<style lang="scss" scoped>
.basketProduct {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.basketProduct_category {
  border: 1px solid;
  background: #ffff0088;
  width: 20%;
  margin-right: 8px;
  text-align: center;
}
.basketProduct_name {
  width: 50%;
  margin-right: 8px;
}
.basketProduct_price {
  width: 5%;
  margin-right: 8px;
}
.basketProduct_price_field {
  border: 1px solid black;
  width: 100%;
  text-align: center;
}
.basketProduct_count {
  width: 10%;
  margin-right: 8px;
}
.basketProduct_action {
  width: 15%;
  color: white;
  background: #b71c1c;
  border: 1px solid;
  padding: 4px;
  text-align: center;
}
</style>
