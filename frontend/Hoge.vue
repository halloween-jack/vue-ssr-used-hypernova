<template>
  <section>
    <p>hoge</p>
    <p>data: {{ foo }}</p>
    <button @click="countup">countup</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      foo: 1
    };
  },
  methods: {
    countup() {
      console.log("countup");
      this.foo += 1;
    }
  }
};
</script>
