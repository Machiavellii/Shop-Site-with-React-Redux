import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import DeleteBlogs from './components/admin/DeleteBlogs';

// import NotFound from './components/pages/NotFound';
import './App.css';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Landing} />
            <div className="container">
              <Switch>
                <Route exact path="/products" component={Products} />
                <Route exact path="/female" component={Female} />
                <Route exact path="/male" component={Male} />
                <Route exact path="/popularly" component={Popularly} />
                <Route exact path="/action" component={Action} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/describe" component={DescribeProduct} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/aadmin=@1222" component={Admin} />
                <Route
                  exact
                  path="/deleteproduct=1@$@3"
                  component={DeleteProduct}
                />
                <Route exact path="/deleteblog=$@34@" component={DeleteBlogs} />
                {/* <Route component={NotFound} /> */}
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
