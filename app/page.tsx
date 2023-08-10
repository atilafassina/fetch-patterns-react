import ServerRequest from "./server/page";
import ClientRequest from "./client/page";

export default function Home() {
  return (
    <main className="grid grid-cols[auto_1fr_auto] h-screen">
      <header className="w-full grid place-items-center">
        <h1 className="text-3xl">GoodBois</h1>
      </header>
      <article className="flex w-full gap-5 justify-center">
        <section className="w-1/2 grid place-items-center ">
          <h2 className="text-3xl">Server Component</h2>
          <ServerRequest />
        </section>
        <section className="w-1/2 grid place-items-center">
          <h2 className="text-3xl">Client Component</h2>
          <ClientRequest />
        </section>
      </article>
      <footer className="w-full grid place-items-center">
        <span>
          by <a href="https://atila.io">Atila.io</a>
        </span>
      </footer>
    </main>
  );
}
