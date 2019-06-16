<template>
  <section>
    <count :count="count"></count>
    <button @click="increment">increment</button>
    <button @click="decrement">async decrement</button>
  </section>
</template>

<script>
import Count from "./Count.vue";

export default {
  components: {
    Count
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
