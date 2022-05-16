import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from "./Routes/publicRoutes"
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { privateRoutes } from './Routes/privateRoutes';
import RequireAuth from './Authentication/RequireAuth';
import AdminRoute from './Authentication/AdminRoute';
import Dashboard from './Dashboard/Dashboard';
import AddAdmin from './Dashboard/AddAdmin';
import AddService from './Dashboard/AddService';



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

          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/dashboard/add-admin' element={<AddAdmin />}></Route>
                
                <Route path='/dashboard/add-service' element={<AddService />}></Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
