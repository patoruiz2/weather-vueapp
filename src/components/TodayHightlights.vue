<template>
  <div>
    <p>Wind Status: {{ windStatus }}</p>
    <p>Humidity: {{ humidity }}</p>
    <p>Visibility: {{ visibility }}</p>
    <p>Air pressure: {{ airPressure }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import apiPetitions from "../services/service-api";
export default {
  name: "TodayHL",
  setup() {
    const windStatus = reactive({
      speed:0,
      direction:0,
      direction_compass:"",
    });
    const humidity = ref(0);
    const visibility = ref(0);
    const airPressure = ref(0);

    const getWindStatus = async () => {
      let response = await apiPetitions.getLocation();
      // WindStatus
      const windStatusRef = toRefs(windStatus);
      const windSpeed = parseInt(response[0].wind_speed)
      const windDirection = parseInt(response[0].wind_direction)
      const windDirectionCompass = response[0].wind_direction_compass
      windStatusRef.speed.value = windSpeed;
      windStatusRef.direction.value = windDirection;
      windStatusRef.direction_compass.value = windDirectionCompass;
      // Humidity
      humidity.value = response[0].humidity;
      //Visibility
      visibility.value =parseInt(response[0].visibility);
      //AirPressure
      airPressure.value = parseInt(response[0].air_pressure)
    };

    onMounted(() => {
      getWindStatus();
    });
    return {
      windStatus,
      humidity,
      visibility,
      airPressure,
      getWindStatus,
    };
  },
};
</script>