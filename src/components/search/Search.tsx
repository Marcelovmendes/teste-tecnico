import SearchForm from './SearchForm';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import useWeather from '../../context/WeatherContext';
import useForecast from '../../context/ForecastContext';

const apiKey = import.meta.env.VITE_REACT_API_KEY;
const weatherUrl = import.meta.env.VITE_REACT_WEATHER_URL;
const forecastUrl = import.meta.env.VITE_REACT_FORECAST_URL;

const Search = () => {
  const { city, handleInputChange, resetForm } = useForm({ name: '' });
  const { setWeatherData } = useWeather();
  const { setForecastData } = useForecast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = city;
    try {
      const weatherResponse = await axios.get(`${weatherUrl}q=${name}&appid=${apiKey}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const forecastResponse = await axios.get(
        `${forecastUrl}q=${name}&appid=${apiKey}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setWeatherData({
        city: weatherResponse.data.name,
        temp: weatherResponse.data.main.temp,
        minTemp: weatherResponse.data.main.temp_min,
        maxTemp: weatherResponse.data.main.temp_max,
        description: weatherResponse.data.weather[0].main,
      });
      const forecastDataList = forecastResponse.data.list.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => ({
          temp: (item.main.temp - 273.15).toFixed(2),
          minTemp: (item.main.temp_min - 273.15).toFixed(2),
          maxTemp: (item.main.temp_max - 273.15).toFixed(2),
          dt: item.dt_txt,
        }),
      );
      setForecastData(forecastDataList);
      resetForm();
    } catch (err: ErrorConstructor | unknown) {
      console.log(err);
    }
  };

  return (
    <>
      <SearchForm city={city} onSubmit={handleSubmit} onInputChange={handleInputChange} />
    </>
  );
};

export default Search;
