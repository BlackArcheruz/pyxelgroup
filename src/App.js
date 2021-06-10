import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
    <div>
          <div className="container">
          <Sidebar/>
            <Navbar/>
            </div> 
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/services'>
                <Services/>
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
            </Switch>
            <Footer/>
    </div>
    </Router>
  );
}

export default App;
