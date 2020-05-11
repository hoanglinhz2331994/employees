import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div id="wrapper">
            <Menu />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {this.showContentMenus(routes)}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>

    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
