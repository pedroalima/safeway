# SafeWay

Um protótipo inicial de uma plataforma SaaS que dispõe de um sistema de controle de rotas públicas e privadas, com versões otimizadas para mobile e desktop.

O projeto é de minha autoria e foi inspirado em outras aplicações já existentes, adaptando seus designs e recursos. A aplicação foi desenvolvida utilizando tecnologias como TypeScript, Next, TailwindCSS e CSS.

## Screenshots

![#](./public/1.png)

</br>

## 🎯 Objetivos

O principal objetivo deste projeto foi elaborar um sistema de rotas públicas e privadas utilizando o framework Next. Secundariamente, busquei familiarizar-me com o framework de estilos Tailwind CSS.

Os usuários têm a capacidade de:
> - Visualizar a aplicação de maneira independente, seja em dispositivos mobile ou desktop.
> - Navegar entre as páginas de login e dashboard. No entanto, a rota privada do dashboard só poderá ser acessada se o usuário possuir o token, o qual é obtido ao clicar no botão 'Entrar' no formulário de login. Da mesma forma, a rota pública raiz, onde se encontra o formulário de login, só poderá ser acessada se o usuário não possuir o token. Para excluir o token, é necessário clicar no botão 'Sair' na barra de navegação do dashboard (na versão mobile, o botão está no menu).

</br>

## 🔧 Propriedades e Tecnologias

> - TypeScript
> - Next 
> - TailwindCSS
> - CSS
> - ESLint

</br>

<!-- ## 🧠 Meu aprendizado

Este projeto proporcionou minha primeira experiência com o framework Next. Sem dúvida, o que mais me chamou a atenção na ferramenta, além de toda facilidade no desenvolvimento, foi a combinação de renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR), que oferecem uma fluidez imensa à aplicação.

<img src="./public/next.avif" width="800">

fonte: [Documentação](https://nextjs.org/docs/app/building-your-application/routing)

Gostaria de destacar a abordagem do framework em relação às rotas, pois tudo é muito intuitivo. A estrutura de pastas é utilizada para definir as rotas, como mostrado na imagem acima, cada pasta representa uma rota.

```ts
export default function Dashboard() {...
}
```

A pasta por si só não concederá acesso à rota; é necessário um arquivo page.jsx/tsx. Dentro desse arquivo, precisamos criar um componente com o nome da rota desejada.

[Saiba Mais!](https://nextjs.org/docs)     

</br> -->

## 💻 Rodando o projeto

![#](./public/mobile.gif)

Para conferir a versão final é só realizar os seguintes passos:

### 1 - Clonando o Projeto:
Navegue até o diretório onde deseja clonar o projeto.

Abra o terminal com o GitBash.

Execute o comando:

```bash
git clone URL_DO_REPOSITORIO
```
Substitua URL_DO_REPOSITORIO pela URL do repositório deste projeto.

### 2 - Instalando Dependências:
Navegue até o diretório "safeway".

Execute o comando:

```bash
npm install
```
ou
```bash
yarn install
```

### 3 - Executando o Projeto:
Ainda no diretório "safeway".

Execute o comando:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento Next.

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
