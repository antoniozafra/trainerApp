import React from 'react'
import { Navigate } from 'react-router-dom'
 
export const PublicRouteAdmin = ({ children, uid }) => {
  return !!uid
    ? <Navigate to='/adminPanel' />
    : children
 
}