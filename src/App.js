import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,

} from 'react-router-dom';
import About from './components/About';
import Experince from './components/Experience';
import Benevolat from './components/Benevolat'


// import DiscoverBattle from './components/DiscoverBattle';
// import MyList from './components/MyList';
// import Popular from './components/Discover';
// import PopularBattle from './components/PopularBattle';

// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/experience/">Experince</Link></li>
              <li><Link to="/education/">Education</Link></li>
              <li><Link to="/benevolat/">Benevolat</Link></li>
            </ul>
          </nav>
          {/* <Switch>
            <Route path="/">
              <Discover />
            </Route>
            <Route path="/battle/">
              <DiscoverBattle />
            </Route>
            <Route path="/popular/">
              <MyList />
            </Route>
            <Route path="/popularbattle/">
              <Popular />
            </Route>
            <Route path="/mylist/">
              <PopularBattle />
            </Route>
          </Switch> */ }
        </div>
      </Router>
    );
  }
}
export default App;