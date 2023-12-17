"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard", { scroll: false});
  };

  return (
    <main className="min-w-full h-screen flex justify-center items-center">
      <div className="hidden sm:block -z-0 fixed w-full h-full">
        <Image 
          src="/bg-1.jpg"
          layout="fill"
          alt="Background image"
        />
      </div>
      <div className="sm:hidden -z-10 fixed w-full h-full">
        <Image 
          src="/bg-2.jpg"
          layout="fill"
          alt="Background image"
        />
      </div>

      <section className="backdrop-blur-sm bg-white/30 w-11/12 sm:w-8/12 h-auto sm:h-96 rounded-3xl py-8 px-5 sm:p-8">
        <Image 
          src="/logo.png"
          width="60"
          height="20"
          alt="Logo"
          className="rounded-full absolute -top-8 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:top-5 sm:left-5"
        />
        <div className="h-full flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5">
            <h2 className="text-4xl sm:text-6xl mb-8 font-bold">Bem Vindo!</h2>
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
            <input onClick={handleLogin} className="bg-slate-700 hover:bg-slate-800 text-slate-100 rounded-full p-2" type="button" value="Entrar" />
          </form>
        </div>
      </section>
    </main>
  );
}
