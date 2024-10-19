<script setup>
import { useWeatherStore } from '../stores/weatherStore';

const store = useWeatherStore();
const city = 'Sacramento';

store.fetchWeather(city);

</script>
<template>
  <div class="weather-container" v-if="!store.loading && store.weatherData">
    <h1 class="city">{{ store.weatherData.location.name }}</h1>
    <div class="current-info">
      <div class="current-info__image">
        <img :src="`https:${store.weatherData.current.condition.icon}`" alt="Weather Icon" />
      </div>
      <div class="current-info__temperature">
        {{ store.weatherData.current.temp_c }}°C
      </div>
      <div class="current-info__other">
        <p>Wind: {{ store.weatherData.current.wind_mph }} m/h</p>
        <p>Humidity: {{ store.weatherData.current.humidity }}%</p>
      </div>
    </div>
    
  
    <p>{{ store.weatherData.current.condition.text }}</p>
  </div>
  <div v-else-if="store.loading">
    <p>Загрузка...</p>
  </div>
  <div v-else-if="store.error">
    <p>{{ store.error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.weather-container {
  width: 600px;
  height: 600px;
  padding: 40px 40px 84px;
  background-color: blue;
  background: linear-gradient(to right, #052652, #2D9CDB);
  border-radius: 10px;
}

.city {
  font-size: 56px;
  font-weight: 900;
}

.current-info {
  display: flex;
  align-items: center;
  gap: 20px;

  &__image {
    width: 120px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__temperature {
    font-size: 72px;
    font-weight: 900;
  }

  &__other {
    p {
      margin: 0;
    }
  }
}
</style>