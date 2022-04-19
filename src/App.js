import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/include/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/include/Footer/Footer';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/NotFound/Notfound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleService from './pages/SingleService/SingleService';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/service/:id">
                <SingleService></SingleService>
              </PrivateRoute>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>

    </div>
  );
}

export default App;
