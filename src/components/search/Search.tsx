import SearchForm from './SearchForm';
import axios from 'axios';
import useForm from '../../hooks/useForm';

const apiKey = '36df708715231e0ab6c8216661f2991b';

const Search = () => {
  const { city, handleInputChange, resetForm } = useForm({ name: '' });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = city;
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`,
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

      console.log('Weather Data:', weatherResponse.data);
      console.log('Forecast Data:', forecastResponse.data);
      resetForm();
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      } else {
        console.log('Unexpected error', err);
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
