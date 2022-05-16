import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from "./Routes/publicRoutes"
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { privateRoutes } from './Routes/privateRoutes';
import RequireAuth from './Authentication/RequireAuth';



function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            />)
          }
          <Route element={<RequireAuth />}>
            {
              privateRoutes.map(({ path, Component }, index) => <Route
                key={index}
                path={path}
                element={<Component />}
              />)
            }
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
