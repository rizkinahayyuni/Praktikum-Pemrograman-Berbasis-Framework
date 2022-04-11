import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './StatelessComponent/AboutPage';
import HomePage from './Pages/HomePage';
import BelanjaPage from './Pages/BelanjaPage';
import KeranjangPage from './Pages/KeranjangPage';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">Rizkina Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className='nav-item'>
                  <Link to="/" className='nav-link'><span>Home</span></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/about" className='nav-link'><span>About</span></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/belanja" className='nav-link'><span>Belanja</span></Link>
                </li>
              </ul>
              <form class="d-flex">
                <Link to="/keranjang" className='nav-link'><span>
                  <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                  </button>
                </span></Link>
              </form>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/belanja">
            <BelanjaPage />
          </Route>
          <Route path="/keranjang">
            <KeranjangPage />
          </Route>
        </Switch>
        <footer class="py-3 bg-dark">
          <div class="container"><p class="m-0 text-center text-white">Copyright &copy; UTS PBF Rizkina 2022</p></div>
        </footer>
      </div>
    </Router>
  );
}



export default App;
