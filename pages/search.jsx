
import DashboardLayout from '../components/Dashboard/DashboardLayout'

import React from 'react'
import withAuth from '../gaurds/withAuth';
import BookSearchCard from '../components/Dashboard/BookCardSearch';


function search() {
 

  return (
    <DashboardLayout headerText={"Dashboard"}>
      <BookSearchCard />
    </DashboardLayout>
  )
}

export default withAuth(search);