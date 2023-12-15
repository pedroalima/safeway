import Image from "next/image";

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
            <div className="bg-slate-100 col-start-1 col-end-3 row-start-1 row-end-7 rounded-2xl p-6">
                <div className="flex justify-center items-center gap-4">
                    <Image src="/logo.png" width="60" height="60" alt="Logo" className="rounded-full" />
                    <span className="font-bold">SafeWay</span>
                </div>
                <div>
                    <input type="search" name="search" id="search" placeholder="Search" className="rounded-lg w-full py-2 px-3" />
                </div>
                
                <h1>Dashboard 1</h1>
            </div>
            <div className="bg-slate-100 col-start-3 col-end-9 row-start-1 row-end-2 rounded-2xl p-6">
                <h1>Dashboard 2</h1>
            </div>
            <div className="bg-slate-100 col-start-3 col-end-6 row-start-2 row-end-7 rounded-2xl p-6">
                <h1>Dashboard 3</h1>
            </div>
            <div className="bg-slate-100 col-start-6 col-end-9 row-start-2 row-end-5 rounded-2xl p-6">
                <h1>Dashboard 4</h1>
            </div>
            <div className="bg-slate-100 col-start-6 col-end-9 row-start-5 row-end-7 rounded-2xl p-6">
                <h1>Dashboard 5</h1>
            </div>
        </div>
        
    </section>
  )
}