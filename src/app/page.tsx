import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-full h-screen flex justify-center items-center">
      <div className="-z-10 fixed w-full h-full">
        <Image 
          src="/bg-1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background image"
        />
      </div>

      <section className="backdrop-blur-sm bg-white/30 w-8/12 h-96 rounded p-8">
        <Image 
          src="/logo.png"
          width="60"
          height="20"
          alt="Logo"
          className="rounded-full absolute top-5 left-5"
        />
        <div className="h-full flex justify-between items-center">
          <div>
            <h2 className="text-6xl mb-8 font-bold">Bem Vindo!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <form className="flex flex-col bg-white p-8 rounded-3xl gap-5 shadow-md">
            <h2 className="text-2xl text-center font-semibold">Login</h2>
            <div className="flex flex-col gap-1">
              <label htmlFor="user-name">Usuário</label>
              <input className="bg-gray-100 rounded-full px-3 py-1" type="text" name="user-name" id="user-name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Senha</label>
              <input className="bg-gray-100 rounded-full px-3 py-1" type="password" name="password" id="password" />
            </div>
            <div className="flex justify-start gap-2">
              <input type="checkbox" name="connected" id="connected" />
              <label htmlFor="connected" className="text-xs">Manter conectado</label>
            </div>
            <input className="bg-slate-800 text-slate-100 rounded-full p-2" type="submit" value="Entrar" />
          </form>
        </div>
      </section>
    </main>
  )
}
