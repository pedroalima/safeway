import Image from "next/image";
import Link from "next/link";

const navLinks = [
    "Home",
    "Dashboard",
    "Projects",
    "Tasks",
    "Reporting",
    "Users"
]

export default function Dashboard() {
  return (
    <section className="h-screen">
        <div className="-z-10 fixed w-full h-full blur-md">
            <Image
                src="/bg-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Background image"
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
                        <Link href={`/${link}`} key={i} className="text-gray-400 hover:text-slate-950 hover:font-bold">{link}</Link>
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
            </div>

            <div className="bg-white col-start-3 col-end-9 row-start-1 row-end-2 rounded-2xl p-6">
                <h1>Dashboard 2</h1>
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
  )
}