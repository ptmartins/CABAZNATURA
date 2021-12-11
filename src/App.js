import {Routes, Route} from 'react-router-dom';
import { Header, Footer, Home, About} from './components';
import './App.css';

function App() {
  return (
    <>
      <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
