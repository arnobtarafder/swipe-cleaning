import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import {publicRoute} from "./Routes/publicRoutes"
// import AOS from "aos";
// import "aos/dist/aos.css";



function App() {
  return (
    <div>

      <Navbar>
        <Routes>
          {
            publicRoute.map(({path, Component}) => <Route
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
