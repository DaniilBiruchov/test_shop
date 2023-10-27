<template>
  <v-container>
    <v-card>
      <v-card-title>
        <DashboardHeader
          :currentRate="currentRate"
          @updateRate="generateRandomRate"
        />
      </v-card-title>
      <v-card-text class="main">
        <ProductList :currentRate="currentRate" />
        <BasketList :currentRate="currentRate" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { RUB_EXCHANGE_RATE } from '@/config/index';
import DashboardHeader from '@/components/Header';
import ProductList from '@/components/ProductList';
import BasketList from '@/components/BasketList';

export default {
  name: 'App',
  components: { DashboardHeader, ProductList, BasketList },
  data: () => ({
    currentRate: 0,
  }),
  mounted() {
    this.generateRandomRate();
  },
  methods: {
    generateRandomRate() {
      this.currentRate =
        Math.floor(
          Math.random() *
            (RUB_EXCHANGE_RATE.usd.max - RUB_EXCHANGE_RATE.usd.min + 1)
        ) + RUB_EXCHANGE_RATE.usd.min;
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  display: flex;
}
</style>
