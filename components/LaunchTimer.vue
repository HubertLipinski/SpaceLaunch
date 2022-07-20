<template>
  <div class="w-full flex flex-row justify-between">
    <div class="flex flex-col text-center">
      <p class="timer-value">01</p>
      <p class="timer-caption">days</p>
    </div>
    <div class="flex flex-col text-center">
      <p class="timer-value">12</p>
      <p class="timer-caption">hours</p>
    </div>
    <div class="flex flex-col text-center">
      <p class="timer-value">07</p>
      <p class="timer-caption">minutes</p>
    </div>
    <div class="flex flex-col text-center">
      <p class="timer-value">59</p>
      <p class="timer-caption">seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    utcDate: {type: String, default: '2022-07-27T04:50:31.000Z'}
  },
  data() {
    return {
      timer: null
    }
  },
  mounted() {
    const launch = this.$moment(this.utcDate).utc();
    // const now = this.$moment();
    console.log(this.$moment.unix(1583556631).format('DD/MM/YYYY HH:mm:ss'))

    console.log(this.$moment().format('DD/MM/YYYY HH:mm:ss'), this.$moment(launch).format('DD/MM/YYYY HH:mm:ss'))
    const ms = this.$moment(launch).diff(this.$moment());
    const duration = this.$moment.duration(ms);
    this.timer = {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    }
  }
}
</script>

<style scoped>
.timer-value {
  @apply text-black text-5xl tracking-tight sm:tracking-widest lg:tracking-tight xl:tracking-widest sm:text-7xl md:text-8xl 2xl:text-[110px] 2xl:leading-[90px];
}

.timer-caption {
  @apply text-gray-500 uppercase pt-3 md:pt-1 xl:pt-0 font-light sm:text-xl md:text-2xl 2xl:text-[30px] 2xl:leading-[85px];
}
</style>
