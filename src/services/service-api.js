import axios from 'axios';

const url = 'https://www.metaweather.com/api/';

const apiPetitions = {
    async getLocation() {
        try {
            const response = await axios.post(url + 'location/' + 468739,)
            //console.log(response);
            const {data} = response;
            const {consolidated_weather} = data;
            // console.log(consolidated_weather);
            return consolidated_weather
        } catch (error) {
            return error.messagge;
        }
    }
}

export default apiPetitions;