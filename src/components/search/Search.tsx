import SearchForm from './SearchForm';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import useWeather from '../../context/WeatherContext';

const apiKey = '36df708715231e0ab6c8216661f2991b';

const Search = () => {
  const { city, handleInputChange, resetForm } = useForm({ name: '' });
  const { setWeatherData } = useWeather();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = city;
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&lang=pt_br`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}`,
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
        description: weatherResponse.data.weather[0].description,
      });
      console.log(weatherResponse.data);
      console.log(forecastResponse.data);
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
