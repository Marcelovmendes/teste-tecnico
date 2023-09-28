import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_API_KEY;
const forecastUrl = import.meta.env.VITE_REACT_FORECAST_URL;

const getForecast = async (name: string) => {
  try {
    const { data } = await axios.get(`${forecastUrl}q=${name}&appid=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const forecastResponse = data;
    return forecastResponse;
  } catch (error) {
    console.log(error);
  }
};
export default getForecast;
