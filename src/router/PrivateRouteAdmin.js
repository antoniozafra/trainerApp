import React from 'react';
import { Navigate } from 'react-router-dom';
 
export const PrivateRouteAdmin = ({ children, uid }) => {

  
  return  !!uid
    ? children
    : <Navigate to='/login' />
}