import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/general/Header';
import HomeScreen from './components/weather/home';
import MapperScreen from './components/weather/Mapper';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/edit-mapper" element={<MapperScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
