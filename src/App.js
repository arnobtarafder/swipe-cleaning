import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from "./Routes/publicRoutes"
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            />)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
