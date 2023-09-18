import React from 'react';
import styled from 'styled-components';
import { SearchFormProps } from '../../interfaces/SearchProps';

const SearchForm: React.FC<SearchFormProps> = ({ city, onSubmit, onInputChange }) => {
  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={city.name}
          onChange={onInputChange}
          placeholder="Digite a cidade"
        />
        <button type="submit">Buscar</button>
      </form>
    </FormWrapper>
  );
};

export default SearchForm;

const FormWrapper = styled.section`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 19px;
    input {
      border: 1px solid #a7a7a7;
      font-size: 19px;
      border-radius: 1px;
      outline: none;
      &:active {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      }
    }
    button {
      &:hover {
        cursor: pointer;
        background-color: #dad8d8;
      }
      &:active {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      }
      font-size: 20px;
      line-height: normal;
      padding: 1px 2px;
      border: 1px solid #a7a7a7;
      border-radius: 1px;
      outline: none;
      color: #000;
      background-color: #efefef;
    }
  }
`;
