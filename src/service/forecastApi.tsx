import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_API_KEY;
const forecastUrl = import.meta.env.VITE_REACT_FORECAST_URL;

const getForecast = async (name: string) => {
  console.log(name, 'api');
  try {
    const { data } = await axios.get(`${forecastUrl}q=${name}&appid=${apiKey}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getForecast;
