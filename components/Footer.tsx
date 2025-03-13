export default function Footer() {
    return (
        <footer className="bg-gradient-to-bl from-[#1e203b] to-slate-800 h-screen bg-slate-700 relative">
            <div id="noise-wrapper" className="absolute inset-0 bg-[url(/img/noise.svg)] opacity-25 brightness-100 contrast-150">
            </div>




            <div className="py-32 mx-auto text-white text-xl grid grid-cols-2 gap-4 items-center text-center container relative max-w-xl">
                <div className=" col-span-2">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Võta meiega ühendust</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Helista või saada meil, aitame nõu ja jõuga.</p>

                </div>
                <div className="justify-center content-center mb-10 px-1 sm:col-span-1 col-span-2">
                    <a className="mt-4 bg-violet-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 inline-block" href="tel:0037255555200">+372 55 555 200</a>
                </div>
                <div className="justify-center content-center mb-10 px-1 sm:col-span-1 col-span-2">
                    <a href="mailto:info@rmevent.ee" className="mt-4 bg-violet-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 inline-block">
                        Kirjuta Meile
                    </a>
                </div>
            </div>


            <div className="absolute bottom-0 text-white text-center items-center w-full p-16 text-xl">
                <p className="mx-auto">&copy; 2025 RM Event. All rights reserved.</p>
            </div>

        </footer>
    )
}