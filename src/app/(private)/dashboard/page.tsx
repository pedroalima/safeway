import Image from "next/image";


export default function Dashboard() {
  return (
    <section>
        <div className="-z-10 fixed w-full h-full blur-sm">
            <Image
                src="/bg-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Background image"
            />
        </div>

        <div className="px-20 py-14 grid grid-cols-3 grid-rows-3 gap-6">
            <div className="bg-slate-600 col-start-1 col-end-2 row-start-1 row-end-4">
                <h1>Dashboard</h1>
            </div>
            <div className="bg-red-400 col-start-2 col-end-4 row-start-1 row-end-2">
                <h1>Dashboard</h1>
            </div>
            <div className="bg-yellow-300 col-start-2 col-end-3 row-start-2 row-end-4">
                <h1>Dashboard</h1>
            </div>
            <div className="bg-green-700 col-start-3 col-end-4 row-start-2 row-end-3">
                <h1>Dashboard</h1>
            </div>
            <div className="bg-teal-500">
                <h1>Dashboard</h1>
            </div>
        </div>
        
    </section>
  )
}