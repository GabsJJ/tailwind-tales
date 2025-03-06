//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <header className="bg-red-50">HEADER</header>
      <main className="flex">
        <aside className="flex bg-red-100 w-10"></aside>
        <div className="">
          <a
            className=""
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex bg-red-50">
        <a
          className=""
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </footer>
    </div>
  );
}
