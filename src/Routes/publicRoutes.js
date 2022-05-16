import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

export const publicRoutes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
  ]