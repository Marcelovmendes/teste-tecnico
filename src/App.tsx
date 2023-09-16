import { styled } from 'styled-components';
import Search from './components/search/Seach';

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
  max-height: 100vh;
  padding: 25px;
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
  }
`;
