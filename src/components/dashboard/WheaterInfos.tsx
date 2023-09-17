import { styled } from 'styled-components';

const WeatherInfos = () => {
  return (
    <StyledInfos>
      <ContainerCity>
        <CityNow>
          <h2>Agora: London</h2>
        </CityNow>
        <h3>Minima: 14</h3>
        <h3>Maxima: 25</h3>
      </ContainerCity>
      <ContainerWeather>
        <h3>Nublado</h3>
        <h1>18 C</h1>
      </ContainerWeather>
    </StyledInfos>
  );
};

export default WeatherInfos;

const StyledInfos = styled.div`
  background-color: #808080;
  width: 45vw;
  height: 48px;
  border-radius: 10px;
  color: white;
  display: flex;
  padding: 12px;
  margin: 30px;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 12px;
  }
  h3 {
    font-size: 10px;
  }
`;

const ContainerCity = styled.div`
  width: 50%;
  height: 100%;
`;
const CityNow = styled.div`
  height: 50%;
`;
const ContainerWeather = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
