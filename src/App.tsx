import { styled } from 'styled-components';
import Search from './components/search/Search';

import WeatherGraphic from './components/graphic/WeatherGraphic';
import { WeatherProvider } from './context/WeatherContext';
import WeatherInfos from './components/dashboard/WeatherInfos';
import { ForecastProvider } from './context/ForecastContext';

function App() {
  return (
    <ForecastProvider>
      <WeatherProvider>
        <Container>
          <NavBar>
            <h1>Levo um casaquinho?</h1>
            <Search />
          </NavBar>
          <WeatherInfos />
          <WeatherGraphic />
        </Container>
      </WeatherProvider>
    </ForecastProvider>
  );
}

export default App;

const Container = styled.main`
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Sarala', sans-serif;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  h1 {
    color: #3848a6;
    font-size: 36px;
    font-weight: 700;
  }
`;
