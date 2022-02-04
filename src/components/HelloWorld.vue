<template>
  <div class="hello">
    <TodayHL />
    <input type="text" placeholder="Search" />
    <section id="week-status"></section>
    <section id="today-status"></section>
    <section id="today-hightlights"></section>
  </div>
</template>

<script>
import TodayHL from '@/components/TodayHightlights.vue';
export default {
  name: "HelloWorld",
  components:{TodayHL},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
