<template>
  <v-container class="header">
    <p class="header_rate">Курс: {{ currentRate }}</p>
    <p class="header_timer">Обновление через: {{ timer }}</p>
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
    this.updateTimer(); // Запуск таймера
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
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_courses {
  display: flex;
  align-items: center;
}

.header_courses_title {
  padding-right: 10px;
}

.header_courses_value {
  width: 40px;
  border: 1px solid black;
  text-align: center;
}
</style>
