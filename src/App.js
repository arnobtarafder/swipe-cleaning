import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Login from './Pages/Login';


const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/services", name: "Services", Component: Services },
  { path: "/login", name: "Login", Component: Login },
]


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
