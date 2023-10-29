<template>
  <v-container class="header">
    <p>Курс: ₽ {{ currentRate }}</p>
    <p>Обновление через: {{ timer }}</p>
  </v-container>
</template>

<script>
import { TIMER_INTERVAL_SECONDS } from '@/config/index';

export default {
  name: 'DashboardHeader',
  props: {
    currentRate: {
      type: Number,
    },
  },
  data: () => ({
    timer: TIMER_INTERVAL_SECONDS,
  }),
  mounted() {
    this.updateTimer();
  },
  methods: {
    updateTimer() {
      this.timer = TIMER_INTERVAL_SECONDS;
      const interval = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          this.$emit('updateRate');
          this.timer = TIMER_INTERVAL_SECONDS;
          clearInterval(interval);
          this.updateTimer();
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
