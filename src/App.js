import React from 'react';
import {
  BrowserRouter as Router,
  
  Link,

} from 'react-router-dom';

import About from './components/About';
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
              <li><Link to="/battle/">Experince</Link></li>
              <li><Link to="/popular/">Education</Link></li>
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