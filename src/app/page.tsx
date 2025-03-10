'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <header className="bg-red-50 flex items-center h-20 shadow px-6">
        <button 
          className="md:hidden rounded-xl px-4 py-2 bg-red-200 hover:bg-red-50 mr-4"
          onClick={() => setIsOpen(true)}
        >
          ☰ Menu
        </button>
        <Image alt="Logo" src="globe.svg" width={50} height={50} />
         <p className="ml-4 text-xl font-semibold">Tailwind Tales</p>
      </header>
      <div className="flex h-full">
        <aside className={`
          fixed z-30 inset-y-0 left-0 transform shadow-md
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-250 ease-in-out 
          bg-red-100 w-60 p-4 
          md:relative md:translate-x-0
        `}>
          <button 
            className="md:hidden rounded-xl px-4 py-2 bg-red-200 hover:bg-red-50"
            onClick={() => setIsOpen(false)}
          >
            Fechar
          </button>
        </aside>
        <main className="flex-1 flex flex-col p-8 items-center justify-center">
          <div className="text-center max-w-2xl">
            <h1 className="text-xl font-bold">Artigo</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ex a purus rutrum placerat. Donec sollicitudin tincidunt faucibus. Aliquam nec quam et augue posuere sagittis. Proin metus lacus, maximus eget velit non, suscipit tempor sem. Curabitur in aliquet felis. Aliquam erat volutpat. Nulla sagittis ac lacus quis tristique. Praesent auctor, tortor eu ultrices bibendum, enim tellus rhoncus dolor, ac ultricies elit nibh nec risus. Fusce dolor nulla, finibus ac pulvinar eget, pellentesque sit amet risus. In eu feugiat risus. Curabitur eu sollicitudin mi. Praesent eu risus diam. Donec felis orci, placerat nec interdum vel, ornare nec tellus. Curabitur sed ultrices massa. Donec in tortor est. Praesent augue libero, interdum in laoreet ut, posuere a lorem.
            </p>
            <p className="text-lg mt-4">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget nunc sit amet sem ornare viverra quis quis justo. Quisque interdum justo purus, vel imperdiet neque venenatis eget. Maecenas accumsan quis nisl consectetur varius. Nunc accumsan purus eget est posuere lobortis. Aliquam congue rutrum risus in fringilla. Etiam sodales aliquam interdum. Maecenas sollicitudin nec eros sit amet suscipit. Donec sagittis dui ut enim suscipit, sodales finibus mi porta. Fusce dapibus, nibh ut rutrum bibendum, enim lacus faucibus ligula, at dictum ante eros sed lacus. Aliquam lacinia orci quis pulvinar rhoncus. Fusce pretium dolor dolor. Ut ut diam laoreet est viverra ultricies blandit at sem. Proin condimentum, tortor in varius bibendum, tortor ligula volutpat sapien, in posuere nisi lorem vitae elit. Mauris eget turpis quis ante pharetra consequat quis quis est.
            </p>
            <p className="text-lg mt-4">
              Integer lorem dui, rutrum nec vestibulum at, feugiat facilisis erat. Vestibulum venenatis at ex in finibus. Donec lobortis volutpat justo, vel congue nisl lobortis in. Duis pulvinar ante eros, in fringilla erat volutpat nec. Cras ac euismod libero. Integer convallis orci in accumsan cursus. Praesent luctus odio eget nisi tempor commodo. Etiam vel ligula tortor. Proin sem leo, tincidunt et facilisis sed, vehicula eget velit. Praesent ut finibus ligula. Nulla hendrerit lorem vel orci ornare, nec tempus erat dapibus. Duis ut purus dapibus tellus convallis malesuada. Ut eu ultricies nibh. Morbi quis nulla non metus consequat egestas. Praesent at gravida nisl. Duis eget neque lorem.
            </p>
            <a
              className="px-6 py-4 mt-4 rounded-full font-bold bg-red-50 text-gray-600 hover:text-black hover:bg-red-100 inline-block focus:outline-2 focus:outline-offset-2 focus:outline-red-100 active:bg-red-100"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Botão de teste
            </a>
           </div>
        </main>
      </div>
      <footer className="flex bg-red-50 shadow-inner p-4 justify-center">
        <a
          className="text-lg hover:underline underline-offset-2"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Footer
        </a>
      </footer>
    </div>
  );
}
