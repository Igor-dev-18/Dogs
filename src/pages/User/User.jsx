import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../../components/User/UserHeader'

function User() {
  return (
 <section className='container'>
    <UserHeader/>

    <Outlet />

 </section>
  )
}

export default User