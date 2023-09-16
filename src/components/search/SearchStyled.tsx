// SearchForm.tsx
import React from 'react';
import styled from 'styled-components';
import { SearchFormProps } from '../../interfaces/SearchForm';

const FormWrapper = styled.section`
  form {
    display: flex;
    align-items: center;

    input {
      padding: 5px;
      margin-right: 10px;
    }

    button {
      padding: 5px 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`;

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { city, onSubmit, onInputChange } = props;
  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="city"
          value={city.city}
          onChange={onInputChange}
          placeholder="Digite a cidade"
        />
        <button type="submit">Buscar</button>
      </form>
    </FormWrapper>
  );
};

export default SearchForm;
