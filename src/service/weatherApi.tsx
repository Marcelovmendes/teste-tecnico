import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_API_KEY;
const weatherUrl = import.meta.env.VITE_REACT_WEATHER_URL;

const getWeather = async (name: string) => {
  try {
    const { data } = await axios.get(`${weatherUrl}q=${name}&appid=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const weatherResponse = data;
    return weatherResponse;
  } catch (error) {
    console.log(error);
  }
};
export default getWeather;
