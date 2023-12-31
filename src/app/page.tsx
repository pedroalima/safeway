"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    router.push("/dashboard");
    cookie.set("auth_token", "as32f1sa564fsa897sa51gsa5g4");
  };

  return (
    <div className="min-w-full h-screen flex justify-center items-center">
      <section className="backdrop-blur-sm bg-white/30 w-11/12 sm:w-8/12 h-auto sm:h-96 rounded-3xl py-8 px-5 sm:p-8">
        <Image 
          src="/logo.png"
          width="55"
          height="55"
          alt="Logo"
          className="rounded-full absolute -top-8 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:top-5 sm:left-5"
        />
        <div className="h-full flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-start mb-5">
            <h2 className="text-4xl sm:text-6xl mb-8 font-bold">Bem Vindo!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col bg-white p-8 rounded-3xl gap-5 shadow-xl">
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
            <button
              type="submit" 
              className="bg-slate-700 hover:bg-slate-800 text-slate-100 rounded-full p-2 cursor-pointer" 
            >Entrar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
