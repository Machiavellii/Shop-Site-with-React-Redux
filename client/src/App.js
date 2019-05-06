import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';

import Welcome from './components/landing/Welcome';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Landing from './components/landing/Landing';
import Products from './components/products/Products';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import AboutUs from './components/pages/AboutUs';
import Blog from './components/pages/Blog';
import Login from './components/auth/Login';

import Female from './components/products/Female';
import Male from './components/products/Male';
import Popularly from './components/products/Popularly';
import Action from './components/products/Action';
import DescribeProduct from './components/products/DescribeProduct';

import Admin from './components/admin/Admin';
import DeleteProduct from './components/admin/DeleteProduct';
import DeleteBlog from './components/admin/DeleteBlog';

// import NotFound from './components/pages/NotFound';

import store from './store';
import { Provider } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Landing} />
            <div className="container">
              <Route exact path="/products" component={Products} />
              <Route exact path="/describe" component={DescribeProduct} />
              <Route exact path="/action" component={Action} />
              <Route exact path="/popularly" component={Popularly} />
              <Route exact path="/female" component={Female} />
              <Route exact path="/male" component={Male} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/login" component={Login} />

              <Switch>
                <PrivateRoute exact path="/admin" component={Admin} />
                <PrivateRoute exact path="/deleteblog" component={DeleteBlog} />
                <PrivateRoute
                  exact
                  path="/deleteproduct"
                  component={DeleteProduct}
                />
              </Switch>
            </div>
            <Route exact path="/contact" component={Contact} />
            <Footer />
            {/*  */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
