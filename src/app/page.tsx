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
        <h1>logo</h1>
        <div className="h-full flex justify-between items-center">
          <div>
            <h2 className="text-6xl mb-8">Bem Vindo!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <form className="flex flex-col">
            <h2 className="text-2xl">Login</h2>
            <label htmlFor="user-name">Usuário</label>
            <input type="text" name="user-name" id="user-name" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Entrar" />
          </form>
        </div>
      </section>
    </main>
  )
}
