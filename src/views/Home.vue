<template>
  <div class="home">
    <div v-for="(day, index) in days" :key="index">
      <section><WeekStatus :day="index + 1" /></section><br><br>
    </div>
    
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WeekStatus from '@/components/WeekStatus.vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
    WeekStatus
  },
  setup(){
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return{days}
  }
};
</script>
