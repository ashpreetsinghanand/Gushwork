import { GoogleOAuthProvider } from '@react-oauth/google'
import LandingPage from '../components/LandingPage/LandingPage'
import React from 'react'

function index() {
  return (
   <div>
   <GoogleOAuthProvider clientId="286799478320-5joide48kgprlm31f4l9fp37kipr8km5.apps.googleusercontent.com">

        <LandingPage/>
   </GoogleOAuthProvider>
   </div>
  )
}

export default index