import SearchForm from './SearchForm';

import useForm from '../../hooks/useForm';
import useWeather from '../../context/WeatherContext';
import useForecast from '../../context/ForecastContext';
import getForecast from '../../service/forecastApi';
import getWeather from '../../service/weatherApi';

const Search = () => {
  const { city, handleInputChange, resetForm } = useForm({ name: '' });
  const { setWeatherData } = useWeather();
  const { setForecastData } = useForecast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = city;
    try {
      const weatherResponse = await getWeather(name);
      const forecastResponse = await getForecast(name);

      setWeatherData({
        city: weatherResponse.name,
        temp: weatherResponse.main.temp,
        minTemp: weatherResponse.main.temp_min,
        maxTemp: weatherResponse.main.temp_max,
        description: weatherResponse.weather[0].main,
      });
      const forecastDataList = forecastResponse.list.map(
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
