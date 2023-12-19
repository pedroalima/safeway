"use client";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { WiStars } from "react-icons/wi";
import { MdOutlineSpaceDashboard, MdHomeWork, MdAnalytics, MdBorderColor, MdBugReport, MdAssignmentInd  } from "react-icons/md";

const navLinks = [
  {
    title: "Home",
    slug: "/",
    icon: <MdHomeWork />
  },
  {
    title: "Dashboard",
    slug: "/dashboard",
    icon: <MdOutlineSpaceDashboard />
  },
  {
    title: "Projects",
    slug: "/",
    icon: <MdAnalytics  />
  },
  {
    title: "Tasks",
    slug: "/",
    icon: <MdBorderColor  />
  },
  {
    title: "Reporting",
    slug: "/",
    icon: <MdBugReport   />
  },
  {
    title: "Users",
    slug: "/",
    icon: <MdAssignmentInd  />
  }
];

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    cookie.remove("auth_user");
    router.push("/");
  };

  return (
    <section className="h-screen">
      <div className="-z-10 fixed w-full h-full blur-md">
        <Image
          src="/bg-1.jpg"
          fill
          alt="Background image"
          priority
        />
      </div>

      <div className="px-20 py-14 h-full grid grid-cols-8 grid-rows-6 gap-6">
        <div className="bg-white col-start-1 col-end-3 row-start-1 row-end-7 rounded-2xl p-6 flex flex-col gap-8">
          <div className="flex justify-start items-center gap-4">
            <Image 
              src="/logo.png" 
              width="45" 
              height="45" 
              alt="Logo" 
              className="rounded-full"
            />
            <span className="font-bold">SafeWay</span>
          </div>
          <div>
            <input type="search" name="search" id="search" placeholder="Search" className="bg-gray-100 rounded-lg w-full py-2 px-3" />
          </div>
          <div className="px-3 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link href={`${link.slug}`} key={i} className="text-gray-400 hover:text-slate-950 hover:font-bold flex items-center gap-2">{link.icon} {link.title}</Link>
            ))}
          </div>
          <div className="mt-auto flex justify-start items-center gap-3">
            <Image 
              src="/user.png"
              width="40"
              height="40"
              alt="Profile image"
            />
            <div className="flex flex-col">
              <span className="text-xs text-slate-950">Pedro Lima</span>
              <span className="text-xs text-gray-300">tsc.pedrolima@gmail.com</span>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            type="button"
            className="bg-red-700 hover:bg-red-800 text-slate-100 rounded-full p-2 cursor-pointer"
          >Sair</button>
        </div>

        <div className="bg-white col-start-3 col-end-9 row-start-1 row-end-2 rounded-2xl p-6 flex justify-around items-center">
          <div className="flex items-center gap-5">
            <div className="border rounded-md">
              <WiStars size="2rem" />
            </div>
            <span><strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing elit</span>
          </div>
          <button className="bg-slate-700 hover:bg-slate-800 text-white rounded-md px-4 py-1">Assinar</button>
        </div>

        <div className="bg-white col-start-3 col-end-6 row-start-2 row-end-7 rounded-2xl p-6">
          
          <h1>Dashboard 3</h1>
        </div>
        <div className="bg-white col-start-6 col-end-9 row-start-2 row-end-5 rounded-2xl p-6">
          <h1>Dashboard 4</h1>
        </div>
        <div className="bg-white col-start-6 col-end-9 row-start-5 row-end-7 rounded-2xl p-6">
          <h1>Dashboard 5</h1>
        </div>
      </div>
        
    </section>
  );
}