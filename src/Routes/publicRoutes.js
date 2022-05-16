import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Login from '../Pages/Login';

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
  ]