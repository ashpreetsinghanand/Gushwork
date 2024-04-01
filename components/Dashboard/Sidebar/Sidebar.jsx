import SidebarMenuItem from "./SidebarMenuItem";
import { googleLogout } from "@react-oauth/google";


function Sidebar() {
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
    <div
      className={`px-3 font-brandonBlack h-full flex flex-col justify-between  bg-blue-500 overflow-y-auto `}>
      <div className="">
        <div className="text-6xl text-white p-5">Books.</div>

        {/* Menu items */}
        <div className="flex flex-col py-[8px] mt-[2px]">
          <SidebarMenuItem
            text="Dashboard"
            href="/dashboad"
            redirectlink={"/dashboard"}
          />
          <SidebarMenuItem
            text="Search"
            href="/search"
            redirectlink={"/search"}
          />

          {/* <SidebarMenuItem
            text="Reviews Ratings"
            redirectlink={"/reviewrating"}
            href="/reviewrating"
          /> */}
          {/* <SidebarMenuItem
            text="Favourite"
            redirectlink={"/favourite"}
            href="/favourite"
          /> */}
        </div>

        <button className="btn px-4 font-[700] ml-3 mt-40 text-xl" onClick={handleLogout}>Logout</button>
      </div>

    
    </div>
  );
}

export default Sidebar;
