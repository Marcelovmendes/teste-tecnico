import { styled } from 'styled-components';
import useWeather from '../../context/WeatherContext';
import { weatherConditionStyles } from '../../utils/ColorDashBoard';
const WeatherInfos = () => {
  const { weatherData } = useWeather();
  const convertTemp = (temp: number) => {
    const tempCelsius = temp - 273.15;
    return tempCelsius.toFixed(1);
  };
  const weatherStyle = weatherConditionStyles[weatherData?.description || ''];
  if (!weatherData) {
    return (
      <LoadWeather>
        <div>Insira uma cidade para ver o clima atual da localidade!</div>
      </LoadWeather>
    );
  }

  return (
    <StyledInfos
      style={{
        backgroundColor: weatherStyle?.background ? weatherStyle?.background : '#808080',
        color: weatherStyle?.color ? weatherStyle?.color : 'white',
      }}
    >
      <ContainerCity>
        <CityNow>
          <h2>Agora: {weatherData.city}</h2>
        </CityNow>
        <h3>Minima:{convertTemp(weatherData.minTemp)}°C</h3>
        <h3>Maxima:{convertTemp(weatherData.maxTemp)}°C</h3>
      </ContainerCity>
      <ContainerWeather>
        <h3>{weatherStyle?.legend}</h3>
        <h1>{convertTemp(weatherData.temp)}°C</h1>
      </ContainerWeather>
    </StyledInfos>
  );
};

export default WeatherInfos;

const LoadWeather = styled.div`
  width: 40vw;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const StyledInfos = styled.div`
  width: 45vw;
  height: 84px;
  border-radius: 16px;
  color: white;
  display: flex;
  padding: 14px;
  margin-top: 44px;
  h1 {
    font-size: 36px;
  }
  h2 {
    margin-top: 6px;
    margin-left: 5px;
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 2px;
  }
`;

const ContainerCity = styled.div`
  width: 50%;
  height: 100%;
`;
const CityNow = styled.div`
  height: 50%;
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  justify-content: start;
`;
const ContainerWeather = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
