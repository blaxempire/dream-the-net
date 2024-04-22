import './App.css';
import PlatformToolbar from './components/platform-toolbar/platform-toolbar.tsx';
import { Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.js';
import { createBrowserHistory } from 'history'
import ContactView from './views/contact-view/contact-view.tsx';
import logo from './logo.svg';
import Homeview from './views/home-view/home-view.tsx';


function App() {
  const history = createBrowserHistory();


  return (

    <Router history={history}>   
       <div className="App">
       <PlatformToolbar/>
        <Switch>
          <Route exact path="/">
            <Homeview/>
          </Route>
          <Route path="/contact">
            <ContactView/>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
