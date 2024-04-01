import SidebarMenuItem from "./SidebarMenuItem";



function Sidebar() {

  return (
    <div
      className={`px-3 font-brandonBlack h-full flex flex-col justify-between  bg-blue-500 overflow-y-auto `}>
      <div className="">
    <div className="text-6xl text-white p-5">Books.</div>

        {/* Menu items */}
        <div className="flex flex-col py-[8px] mt-[2px]">
          <SidebarMenuItem
            text="Home"
            href="/home"
            redirectlink={"/home"}
          />
          <SidebarMenuItem
            text="Search"
            href="/search"
            redirectlink={"/search"}
          />

          <SidebarMenuItem
            text="Reviews Ratings"
            redirectlink={"/reviewrating"}
            href="/reviewrating"
          />
          <SidebarMenuItem
            text="Favourite"
            redirectlink={"/favourite"}
            href="/favourite"
          />

          <SidebarMenuItem
            text="Settings"
            redirectlink={"/settings"}
            href="/settings"
          />

        
        </div>
      </div>

    
    </div>
  );
}

export default Sidebar;
