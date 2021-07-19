import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import authService from '../../services/authService'

function ProtectedRoute({ path, component: Component }) {
  const user = authService.getCurrentUser();
  return (
    <Route 
      path={path}
      render={props => {
        if(!user) return <Redirect to="/login" />
        return <Component {...props} user={user} />
      }} 
      exact 
    />
  )
}

export default ProtectedRoute
