import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/router';
import {jwtDecode} from 'jwt-decode';

function LandingPage() {
    const router = useRouter();

    const onSuccess = async (user) => {
      // Handle successful login
      localStorage.setItem('isAuthenticated', true);
      const decoded = jwtDecode(user.credential)
      localStorage.setItem('credentials',decoded);
      //Here gpt
      console.log('Login successful:', decoded.email);
      // Redirect user to dashboard
      router.push('/dashboard');
    };
  
    const onFailure = (error) => {
      // Handle failed login
      console.error('Login failed:', error);
    };
  
  return (
    <div class="flex">
      <div class="w-1/3 h-screen relative bg-[#785cfa] ">
      
        <div class="absolute inset-0   mt-2 flex flex-col justify-between ">
          <div class=" p-5"><img class="h-16  " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdUlEQVR4nO2Zx2sUURzHP0FjLKgkQbAfNAZromIBxZY/QA9KzEXPFjzqQYnlKGjEbqKid7G3iJ7sgiVoFJSIMfYOFjQxceXhd+Ah7mzm7czOCvuFgWXn196b3/u1BznkkBUoAOYAG4CjwAPgI9AGtOr3fb0zNLPFEzsmArXAJyAR8DE8e4AJcRg+Hjj7l0F3gM3AfKAMKATy9RTpvwVADdBg8f0CTut95OgBbAHapfyzjB7lIGu0FvNFsn5KVnciwghr54yyrdrldFEMbJdM70uWEDKmAO+k4BEwKWwF/NHRJB1vgclhCvY+8zmgD9GhL3Decs/JYbiNt/OHdCCjRj5w2PoSw9M5sJ7P12fIeA/dgAvSfdv1YG+RgMchHVaXw90sGzYFZR6nqNABzCA+zFKeMLaUB2H0klQd8eOAbDkZpDwwDN+BwcSPobLllyqAlKjVAvaRPTgom3alIiywCrOpZA+myaYPilBJMUeEz4A8R2Um0VUr/H0FvgE3gBVplNB5wAvZNtOPcIOI9jsqGqPFJyuhzaIGpHmY1/kRHRPREsfE90j8l9W09AR6q8R+qne3UrlBEiwT/xF88EBEJv4GxSrx3k3iKkXW1zHGBIXn3o1+RO9FVOqg4Ip45/rQVIrG0AZFqXhNbZYUrQ6t4d9PPx/5hSHI/+G3gEv/wQIuEhE8F5rnQ7MwDReKHCtTHGJTXT4XzdKojFgMvHQcdZgw+tDa4QqglxJbpRWBbjqG0YnAK2CRH9F6KdmBeyLz4v2/HpMD+jvK3tWZRFYhoie4wySuNdrpLyonrgHLHXfeKyVaZJtJkJ0q5saSPSjvbDGHyuiEZjXZgt2yyZT6KVGm5sEkjEHEjyGyJRGkrawXwzbix07ZcioIU7kaetNMTyc+zNQctl2DhkCo0cpbVElmGoXWWGWjiwBTy9+TgBMxDLZOS3dDOhPrEqvEPp6hW5UCjVC80nlYugLHa0ZpBJ6JeLjbx5pJvXHx+2QYaTXVzamyYRqThybpeB1FIjVT4utS0KELDtcG3cZAJc0Oyb4ahtskQ1eNTNqs7qhO10Uuhd9eK0mZbnA10IUMoEyJxa40n2gxVcojxdYlX7H+q5LRXnhMWFEuNH8PesDrdA8ctDU0hVlt0KlzVMjX2GOtZkuN1kV3m3436l21goBxxxxyIGb8BhbWZXZy/MC/AAAAAElFTkSuQmCC"/></div>
          <div class="mb-4 text-center">
            <h1 class="text-6xl font-bold text-white ">BASE</h1>
          </div>
          <div class="flex gap-x-5 justify-center align-center pb-8 ">
            <div class=" ">
              <img class="h-10" src="icon1.svg" alt="Logo 1"/>
            </div>
            <div class="">
              <img class="h-10 " src="icon2.svg" alt="Logo 2"/>
            </div>
            <div class="">
              <img class="h-10 " src="icon3.svg" alt="Logo 3"/>
            </div>
            <div class="">
              <img class="h-9" src="icon4.svg" alt="Logo 4"/>
            </div>
          </div>
         
         
        </div>
      </div>
      <div class="w-2/3 bg-gray-100 rounded-r-md">
        <div className="h-0 w-0 border-r-8 border-t-8 border-transparent border-solid"></div>
        <div class="flex flex-col items-center justify-center h-screen">
          <div class="w-full max-w-md">
              <h1 class="text-4xl font-bold mb-2 text-left">Sign In</h1>
              <p class=" text-gray-700 font-bold mb-6">Sign in to your account</p>
              <div className='flex justify-between mb-5 w-full gap-x-7'>
                <GoogleLogin
                        clientId="286799478320-5joide48kgprlm31f4l9fp37kipr8km5.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        redirectUri="http://localhost:3000" // Redirect URI configured in Google OAuth app
                        scope="email profile openid" // Additional scopes if needed
                    />
              <button class='bg-white w-1/2 rounded-md'>
                <div class='flex px-4 py-2 '>
                    <img class='h-6' src='iconApple.svg'/>
                        <p className='text-gray-500 w-full'> Sign in with Apple</p>
                </div>
              </button>
              </div>
                <div class="bg-white shadow-md rounded-xl p-6">
                  <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                      Email address
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"/>
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
                    <a class="text-blue-700 no-underline" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="bg-[#785cfa] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 

                      Sign In
                 
                    </button>
                  </div>
                 
                </div>
                <div class="text-center mt-6">
                    <p class="text-gray-600 ">
                      Don't have an account?
                      <a class="text-blue-700 no-underline pl-1" href="#">
                        Register here
                      </a>
                    </p>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;