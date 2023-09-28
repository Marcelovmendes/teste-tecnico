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
      const [weatherResponse, forecastResponse] = await Promise.all([
        getWeather(name),
        getForecast(name),
      ]);

      setWeatherData({
        city: weatherResponse.name,
        temp: weatherResponse.main.temp,
        minTemp: weatherResponse.main.temp_min,
        maxTemp: weatherResponse.main.temp_max,
        description: weatherResponse.weather[0].main,
      });

      const convertTemp = (temp: number) => {
        const tempCelsius = temp - 273.15;
        return tempCelsius.toFixed(2);
      };
      const forecastDataList = forecastResponse.list.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => ({
          temp: convertTemp(item.main.temp),
          minTemp: convertTemp(item.main.temp_min),
          maxTemp: convertTemp(item.main.temp_max),
          dt: item.dt_txt,
        }),
      );

      setForecastData(forecastDataList);
      resetForm();
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.includes("Cannot read properties of undefined (reading 'name')")
      ) {
        alert('Cidade não encontrada ou não é valida');
      } else {
        alert('Erro ao buscar cidade');
      }
    }
  };

  return (
    <>
      <SearchForm city={city} onSubmit={handleSubmit} onInputChange={handleInputChange} />
    </>
  );
};

export default Search;
