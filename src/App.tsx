import { styled } from 'styled-components';
import Search from './components/search/Search';

function App() {
  // const data = [];
  return (
    <Container>
      <NavBar>
        <h1>Levo um casaquinho?</h1>
        <Search />
      </NavBar>
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  padding: 25px;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  h1 {
    color: #3848a6;
    font-size: 20px;
    font-family: 'Sarala', sans-serif;
    font-weight: 700;
  }
`;
