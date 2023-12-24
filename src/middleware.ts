import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
 
export function middleware(request: NextRequest) {
  // Busca e pega o valor do token
  const token = request.cookies.get("auth_user")?.value;
  // Se o token não existir
  if (!token) {
    // E se o usuário estiver na rota "/"
    if (request.nextUrl.pathname == "/") {
      // Prossiga sem encaminhar
      return NextResponse.next();
    }
    // Encaminha o usuário para a rota "/"
    return NextResponse.redirect(new URL("/", request.url));
  }
  //Se o token existir e o usuário quiser acessar a rota "/"
  if (request.nextUrl.pathname == "/") {
    // Encaminhe o usuário para a rota "dashboard"
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  // Rotas afetadas
  matcher: ["/", "/dashboard/:path*"]
};