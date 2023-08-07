/* eslint-disable react/prop-types */
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const RequireAuth = ({ redirecPath }) => {
  const isAuthenticated = localStorage.getItem('token')

  if (!isAuthenticated) {
    return <Navigate to={redirecPath}/>
  }

  return (
    <Outlet/>
  )
}

export default RequireAuth
