import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import Previous from './pages/Previous';
import Recordings from './pages/Recordings';
import PersonalRoom from './pages/PersonalRoom';

function App() {
  return (
    <main style={{ backgroundColor: '#161925' }}>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route path="/" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/previous" element={<Previous />}/>
          <Route path="/recordings" element={<Recordings />}/>
          <Route path="/personal-room" element={<PersonalRoom />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
