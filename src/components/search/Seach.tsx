import SearchForm from './SearchStyled';
import { useState } from 'react';
function Search() {
  const [city, setCity] = useState({ city: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });
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
      <SearchForm
        city={city}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
    </>
  );
}
export default Search;
