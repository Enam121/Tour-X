import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About page/About/About';
import Contact from './pages/Contact page/Contact/Contact';
import Destination from './pages/Destination page/Destination/Destination';
import Detail from './pages/Detail/Detail';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home page/Home/Home';
import Nav from './pages/Home page/Nav/Nav';
import Login from './pages/Login page/Login';
import NotFound from './pages/404 Error page/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Signup from './pages/Signup page/Signup';
import MyCart from './pages/My Cart Page/MyCart/MyCart';
import ManageOrders from './pages/Manage All Orders page/ManageAllOrders/ManageOrders';
import AddService from './pages/Add New Service page/AddService/AddService';

function App() {


  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/destination">
              <Destination />
            </Route>

            <PrivateRoute path="/detail/:id">
              <Detail />
            </PrivateRoute>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/my-cart">
              <MyCart />
            </Route>

            <Route path="/manage-orders">
              <ManageOrders />
            </Route>

            <Route path="/add-service">
              <AddService />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
