import { useState } from 'react';

const useForm = (initialState = { name: '' }) => {
  const [city, setCity] = useState(initialState);
  console.log(city);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setCity(initialState);
  };

  return {
    city,
    handleInputChange,
    resetForm,
  };
};

export default useForm;
