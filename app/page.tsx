

import { Montserrat } from "next/font/google";
import { Karla } from "next/font/google";
import Image from "next/image";


const montserrat = Montserrat({

  subsets: ["latin"],
});

const karla = Karla({

  subsets: ["latin"],
});





export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-bl from-purple-950 to-indigo-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16 lg:px-12">
          <Image
            className="w-full max-w-96 mx-auto mb-8"
            src="./img/logos/rmevent7_solo_dark.svg"
            alt="RM Events Logo"
            width={100}
            height={100}
          ></Image>


          <h1
            className={` ${montserrat.className} mb-4 text-4xl font-semibold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white`}
          >Teie idee, meie teostus.</h1>
          <p 
          className={`${karla.className} mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400 `}
          >Muudame teie visiooni tegelikkuseks läbi professionaalse planeerimise, täpse koordineerimise ja laitmatu elluviimise.</p>

          <div className={` ${montserrat.className} px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 uppercase`}
          >
            <span className="mont font-semibold text-gray-400">Meie Kliendid:</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="https://www.tv3.ee/" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400">

                <Image
                src={"./img/logos/tv3.svg"}
                width={100}
                height={100}
                className="w-10"
                alt="TV 3 kanal"
                ></Image>
              </a>
              <a href="https://www.kanal2.ee/" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400">
                <Image
                src={"./img/logos/astra.svg"}
                  className="w-60"
                  width={100}
                  height={100}
                  alt="Astra"
                
                />
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400 text-4xl">
                ???
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 text-center max-w-screen-lg mx-auto grid sm:grid-cols-2 gap-4 items-center">
        <div>
          <h2
          className={`${montserrat.className} text-4xl font-semibold text-slate-800`}
          >Kes me oleme</h2>
          <p className="mt-2 text-slate-900 text-lg">
            Tänu mitmekesisele kogemusele toitlustuses, ürituste planeerimises ning bankettide, pulmade ja rahvusvaheliste konverentside korraldamises on RM Event teie usaldusväärne partner meeldejäävate ürituste loomisel.
          </p>
        </div>
        <Image
        src={"/img/team.jpg"}
        height={780}
        width={1170}
        alt="RM Event Team"
        className="w-full rounded-lg"
        />
      </section>

      <section className={`${karla.className} p-8 bg-white text-center max-w-screen-lg mx-auto lg:py-16`}>
        <h2 className={ ` ${montserrat.className} text-4xl font-semibold text-slate-800 mb-8`}>Meie Teenused</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="bg-gradient-to-bl from-purple-700 to-blue-800 text-white rounded-lg shadow-lg overflow-hidden">
            <Image
            src={"/img/banquet.jpg"}
            width={1200}
            height={900}
            alt="Banquet setup"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-violet-100">Banketid</h3>
              <p className="mt-2">Elegantsed ja hästi korraldatud banketid igaks sündmuseks.</p>
            </div>
          </div>

          <div className="bg-gradient-to-bl from-purple-700 to-blue-800 text-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={"/img/wedding.jpg"}
            width={1200}
            height={900}
            alt="Wedding event planning"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-violet-100">Pulmad</h3>
              <p className="mt-2">Teie erilise päeva unustamatuks muutmine laitmatu planeerimisega.</p>
            </div>
          </div>
          <div className="bg-gradient-to-bl from-purple-700 to-blue-800 text-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={"/img/events.jpg"}
            width={1200}
            height={900}
            alt="Misc events"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-violet-100">Muud suuremad üritused</h3>
              <p className="mt-2">Sujuv sündmuste koordineerimine suuremahuliste ürituste jaoks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 text-center max-w-screen-xl mx-auto grid grid-cols-12 gap-4 items-center">
        <div className="sm:col-span-4 text-center col-span-12 sm:text-left items-center ">
          <h2
          className={`${montserrat.className} text-4xl font-semibold text-slate-800 `}
          >Üritused</h2>
          <p className="mt-2 text-slate-900 text-lg">
            Siin näited mõndadest üritustest mida oleme korraldanud.
          </p>
        </div>

        <div className="sm:col-span-8 col-span-12  flex flex-nowrap overflow-x-auto gap-6 snap-mandatory">
          <div className="bg-blue-300 flex-none snap-center snap-always">
            <Image 
              src={"/img/anne.jpg"}
              width={1080}
              height={1920}
              alt="Anne Veski"
              className=" h-[400px] w-auto"
            />
          </div>
          <div className=" flex-none snap-center snap-always">
          <Image 
              src={"/img/ennuratas.jpg"}
              width={1080}
              height={1920}
              alt="Ennu Ratas"
              className=" h-[400px] w-auto"
            />
          </div>
          <div className="flex-none snap-center snap-always ">
          <Image 
              src={"/img/lenny.jpg"}
              width={960}
              height={540}
              alt="Anne Veski"
              className=" h-[400px] w-auto"
            />
          </div>
          

        </div>
      </section>

      <section className="p-8 py-16 text-center">
        <h2 className={ ` ${montserrat.className} text-4xl font-semibold text-slate-800 mb-8`}>Võtke Meiega Ühendust</h2>
        <p className="mt-2 text-gray-700">Pöörduge meie poole nõu saamiseks ja teeme teie ürituse edukaks!</p>
        <a href="mailto:info@rmevent.ee" className="mt-4 bg-violet-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 inline-block">
          Võta Ühendust
        </a>
      </section>

      <footer className="bg-violet-950 text-white py-4 text-center">
        &copy; 2025 RM Event. All rights reserved.
      </footer>
    </main>
  );
}
