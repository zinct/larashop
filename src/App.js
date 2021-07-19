import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './pages/Login';
import Logout from './pages/Logout';
import CreateProduct from './pages/Product/CreateProduct';
import EditProduct from './pages/Product/EditProduct';
import Product from './pages/Product/Product';
import Register from './pages/Register';
import authService from './services/authService';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(authService.getCurrentUser());
  },[]);
  
  return (
    <BrowserRouter>
      <Navbar user={user} />   
      <div className="container mt-4">
        <Switch>
          <Route path="/product" render={props => <Product {...props} user={user} />} exact />
          <ProtectedRoute path="/product/create" component={CreateProduct} />
          <ProtectedRoute path="/product/:id" component={EditProduct} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>   
    </BrowserRouter>
  );
}

export default App
