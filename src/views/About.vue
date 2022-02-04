<template>
  <div class="about">
    <WeekStatus/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import WeekStatus from "@/components/WeekStatus.vue";
export default {
  name: "About",
  components: {
    WeekStatus,
  },
};
</script>
