import React from "react";
import { googleLogout } from "@react-oauth/google";

const BodyHeading = ({text}) => {
  const handleLogout = async () => {
    try {
      // Perform logout from Google account
      await googleLogout();

      // Clear localStorage
      localStorage.clear();

      // Redirect or perform any other action after logout
      // For example, redirect to the login page
      window.location.href = "/"; // Redirect to your login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className={`z-10 flex flex-col md:flex-row px-5 py-3 mt-4  items-center justify-between rounded-lg text-20  bg-queueLight1 text-queueLightText1 `}>
      <div className=" text-sm md:text-lg text-center font-[500]">{text}</div>
      <p></p>
      <button className="btn px-4" onClick={handleLogout}>Logout</button>
    </div>
  );

};
export default BodyHeading;
