<template>
  <div>
    <section id="tomorrow">
      <span v-if="temperature.min != 0"
        >Temperature Min.: {{ temperature.min }}</span
      ><br /><br />
      <span v-if="temperature.max != 0"
        >Temperature Max.: {{ temperature.max }}</span
      ><br /><br />
      <span v-if="temperature.max != 0"
        >Imagen Weather State: {{ weatherState }}</span
      ><br /><br />
      <span v-if="temperature.max != 0">forecast day's: {{ date }}</span>
    </section>
    <!-- <section id="tomorrow+1"></section>
    <section id="tomorrow+2"></section>
    <section id="tomorrow+3"></section>
    <section id="tomorrow+4"></section> -->
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "@vue/runtime-core";
import apiPetitions from "../services/service-api";
export default {
  name: "WeekStatus",
  props:{
    day:{
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const { day } = toRefs(props);
    const temperature = reactive({
      min: "",
      max: "",
    });
    const weatherState = ref("");
    const date = ref("");

    const getWindStatus = async () => {
      let response = await apiPetitions.getLocation();
      // Temperature
      const temperatureRef = toRefs(temperature);
      //console.log(temperatureRef);
      console.log(day.value);
      if(day.value < 6){
        const minTemp = parseInt(response[day.value].min_temp);
        const maxTemp = parseInt(response[day.value].max_temp);
        temperatureRef.min.value = minTemp;
        temperatureRef.max.value = maxTemp;
        // Weather State
        weatherState.value = response[day.value].weather_state_abbr;
        //Date
        let options = {
          weekday: "long",
        };
        date.value = new Date(response[day.value].applicable_date).toLocaleDateString(
          undefined,
          options
        );
      }
    };

    onMounted(() => {
      (function () {
        var cors_api_host = "cors-anywhere.herokuapp.com";
        var cors_api_url = "https://" + cors_api_host + "/";
        var slice = [].slice;
        var origin = window.location.protocol + "//" + window.location.host;
        var open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (
            targetOrigin &&
            targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host
          ) {
            args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
        };
      })();
      getWindStatus();
    });
    return {
      temperature,
      weatherState,
      date,
      getWindStatus,
    };
  },
};
</script>