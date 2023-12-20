import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import About from "./pages/About";
import CircleFollowCursor from './Components/CircleFollowCursor';

function App() {
  return (
    <div className='index-base'>
      <CircleFollowCursor>
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </CircleFollowCursor>

    </div>
  );
}

export default App;
