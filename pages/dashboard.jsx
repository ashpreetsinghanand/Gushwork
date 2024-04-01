import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../components/Dashboard/DashboardLayout'

import React from 'react'
import withAuth from '../gaurds/withAuth';


function dashboard() {
 

  return (
    <DashboardLayout headerText={"Dashboard"}>
      <Dashboard />
    </DashboardLayout>
  )
}

export default withAuth(dashboard);