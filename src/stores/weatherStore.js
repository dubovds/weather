import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null, 
  }),
  actions: {
    async fetchWeather(city) {
      this.loading = true;
      this.error = null;
      try {
        const api_key = 'fa3bc0fb7cd341f7854215449241810';
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`);
        const data = await response.json();
        this.weatherData = data;
      } catch (error) {
        this.error = "something wrong"
      } finally {
        this.loading = false;
      }
    }
  }

})