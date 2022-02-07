<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodayStatus/>
  </div>
</template>
<script>
// @ is an alias to /src
import TodayStatus from "@/components/TodayStatus.vue";
export default {
  name: "About",
  components: {
    TodayStatus,
  },
};
</script>
