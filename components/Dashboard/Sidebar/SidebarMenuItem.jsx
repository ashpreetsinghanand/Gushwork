

import Link from "next/link";
import { useRouter } from "next/router";


function SidebarMenuItem({
  text,
  redirectlink,
  href,
}) {



  const router = useRouter();
  const segments = router.pathname.split("/");
  const url = "/" + segments[1];
  const isActive = url === href;



  return (
    <div className="">
      <Link href={`${redirectlink}`}>
        <div
          className={`rounded-lg pl-4 flex space-x-4 items-center 
          ${
            isActive && ""
          }   py-2 mx-3 my-1 lg:my-2 cursor-pointer 
          ${!isActive && "hover:bg-black"}`}
        >

          <div
            className={`hidden md:inline font-brandonBoldItalic text-sm md:text-lg 
              ${
                isActive ? "text-white" : "text-gray-300"
              }`}
          >
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SidebarMenuItem;
