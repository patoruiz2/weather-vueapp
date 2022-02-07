<template>
  <div>
    <section >
      <img
        v-if="weatherImg"
        style="width: 100px"
        :src="`https://www.metaweather.com/static/img/weather/${weatherImg}.svg`"
        alt=""
      />
    </section>
    <section>Temperature:{{ temperature }}°</section>
    <section>Weather Name: {{ weatherDescription }}</section>
    <section>Day: {{ day }} || Date: {{ date }}</section>
    <section>Location: {{ location }}</section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import apiPetitions from "../services/service-api";
export default {
  name: "TodayStatus",
  setup() {
    const weatherImg = ref("");
    const temperature = ref("");
    const weatherDescription = ref("");
    const day = ref("Today");
    const location = ref("");
    const date = ref("");

    const getInfo = async () => {
      let response = await apiPetitions.getLocation();
      console.log(response);
      const {
        the_temp,
        weather_state_abbr,
        weather_state_name,
        applicable_date,
      } = response[0];
      temperature.value = parseInt(the_temp);
      weatherImg.value = weather_state_abbr;
      weatherDescription.value = weather_state_name;

      const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
      };
      date.value = new Date(applicable_date).toLocaleDateString(undefined, options);
    };
    onMounted(() => {
      getInfo();
    });
    return {
      weatherImg,
      temperature,
      weatherDescription,
      day,
      date,
      location,
    };
  },
};
</script>