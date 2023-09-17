import SearchForm from './SearchForm';
import { useState } from 'react';
import axios from 'axios'; // Importe o Axios

const apiKey = '36df708715231e0ab6c8216661f2991b';

const Search = () => {
  const [city, setCity] = useState({ name: '' });
  console.log(city, 'city');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { name } = city;
    e.preventDefault();

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
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
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
