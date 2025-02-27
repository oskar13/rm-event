"use client"

import { Montserrat } from "next/font/google";
import { Karla } from "next/font/google";
import Image from "next/image";

import { useState } from "react";

const montserrat = Montserrat({

  subsets: ["latin"],
});

const karla = Karla({

  subsets: ["latin"],
});





const headerVariants = [
  {
    id: "default",
    bgClass: "bg-gradient-to-bl from-purple-950 to-indigo-900",
    textColor: "text-white",
    clientFilter: "",
    cardBg: "text-white bg-gradient-to-bl from-purple-700 to-blue-800"
  },
  {
    id: "black",
    bgClass: "bg-black",
    textColor: "text-white",
     clientFilter: "grayscale",
      cardBg: "text-slate-800"
  },
  {
    id: "white",
    bgClass: "bg-white",
    textColor: "text-slate-700",
     clientFilter: "grayscale",
      cardBg: "text-slate-800"
  },
  {
    id: "slate",
    bgClass: "bg-gradient-to-bl from-slate-900 to-slate-700",
    textColor: "text-white",
     clientFilter: "grayscale",
      cardBg: "text-slate-900 "
  },
  {
    id: "sunset",
    bgClass: "bg-gradient-to-bl from-red-800 to-orange-500",
    textColor: "text-white",
     clientFilter: "grayscale-0",
      cardBg: "text-violet-900 bg-gradient-to-r from-yellow-100 to-pink-100"
  },
  {
    id: "muu",
    bgClass: "bg-gradient-to-tr from-violet-700 via-blue-800 to-sky-800 relative",
    textColor: "text-white",
     clientFilter: "grayscale-0",
      cardBg: "text-white bg-gradient-to-bl from-purple-700 to-blue-800"
  },
  {
    id: "muu 2",
    bgClass: "bg-gradient-to-tr from-violet-500 to-orange-300",
    textColor: "text-white",
     clientFilter: "grayscale-0",
      cardBg: "text-slate-700 "
  },
  {
    id: "muu 3",
    bgClass: "bg-gradient-to-bl from-gray-100 to-amber-50",
    textColor: "text-slate-600",
     clientFilter: "grayscale",
      cardBg: "text-slate-700 "
  },
  {
    id: "muu 4",
    bgClass: "bg-gradient-to-bl from-orange-100 to-amber-50",
    textColor: "text-slate-600",
     clientFilter: "grayscale",
      cardBg: "text-slate-700 "
  },
  {
    id: "muu 5",
    bgClass: "bg-gradient-to-bl  bg-gradient-to-r from-indigo-200 to-yellow-100",
    textColor: "text-slate-600",
     clientFilter: "grayscale-50",
      cardBg: "text-slate-700 "
  },
  {
    id: "cream 1",
    bgClass: "bg-[#FFFEF2]",
    textColor: "text-slate-600",
     clientFilter: "grayscale-0",
      cardBg: "text-slate-700 "
  },
  {
    id: "cream 2",
    bgClass: "bg-[#FFFDD1]",
    textColor: "text-slate-600",
     clientFilter: "grayscale-0",
      cardBg: "text-slate-700 "
  }
];


const logoVariants = [
  {
    id: "default",

    logoSrc: "/img/logos/rmevent7_solo_dark.svg",
  },
  {
    id: "alternative",

    logoSrc: "/img/logos/rmevent7_solo_light.svg",
  },
  {
    id: "alternative2",

    logoSrc: "/img/logos/rmevent7_solo_light2.svg",
  },
  {
    id: "simple light",

    logoSrc: "/img/logos/rmevent_simple_solo_light.svg",
  },
  {
    id: "simple dark",

    logoSrc: "/img/logos/rmevent_simple_solo_dark.svg",
  },
  {
    id: "simple light umbrella",

    logoSrc: "/img/logos/rmevent_simple_solo_light_umbrella.svg",
  },
  {
    id: "simple dark umbrella",

    logoSrc: "/img/logos/rmevent_simple_solo_dark_umbrella.svg",
  }
];


export default function Home() {
  const [selectedVariant, setSelectedVariant] = useState(headerVariants[0]);
  const [selectedLogoVariant, setSelectedLogoVariant] = useState(logoVariants[0]);

  return (
    <main>


      <section className={`${selectedVariant.bgClass} transition-all duration-500 relative`}>
        <div id="noise-wrapper" className="absolute inset-0 bg-[url(/img/noise.svg)] opacity-25 brightness-100 contrast-150">
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-4 right-4 z-10">
          <h2 className="inline-block text-white font-semibold text-lg">Taust:</h2>
          <br />
          <select
            className="p-2 bg-white text-black rounded-md shadow-md cursor-pointer"
            value={selectedVariant.id}
            onChange={(e) =>
              setSelectedVariant(headerVariants.find(v => v.id === e.target.value) || headerVariants[0])
            }
          >
            {headerVariants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-24 right-4 z-10">
          <h2 className="inline-block text-white font-semibold text-lg">Logo:</h2>
          <br />
          <select
            className="p-2 bg-white text-black rounded-md shadow-md cursor-pointer"
            value={selectedLogoVariant.id}
            onChange={(e) =>
              setSelectedLogoVariant(logoVariants.find(v => v.id === e.target.value) || logoVariants[0])
            }
          >
            {logoVariants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16 lg:px-12 relative">


          {/* Logo */}
          <Image
            className="w-full max-w-96 mx-auto mb-8"
            src={selectedLogoVariant.logoSrc}
            alt="RM Events Logo"
            width={100}
            height={100}
          />

          {/* Heading */}
          <h1 className={`mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl lg:text-6xl ${selectedVariant.textColor}`}>
            Teie idee, meie teostus.
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            Muudame teie visiooni tegelikkuseks läbi professionaalse planeerimise, täpse koordineerimise ja laitmatu elluviimise.
          </p>


          <div className={` ${montserrat.className} px-4 mx-auto text-center uppercase`}
          >
            <span className="mont font-semibold text-gray-400">Meie Kliendid:</span>
            <div className={`flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between gap-4 `}>
              <a href="https://www.tv3.ee/" target="_blank" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400">

                <Image
                  src={"./img/logos/tv3.svg"}
                  width={512}
                  height={943}
                  className={`lg:h-[100px] h-[50px] w-full transition-all duration-300 hover:grayscale-0 a ${selectedVariant.clientFilter}`}
                  alt="TV 3 kanal"
                ></Image>
              </a>
              <a href="https://www.astrazeneca.com/" target="_blank" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400">
                <Image
                  src={"./img/logos/astra.svg"}
                  className={`lg:h-[100px] h-[50px] w-full transition-all duration-300 hover:grayscale-0 a ${selectedVariant.clientFilter}`}
                  width={188}
                  height={43}
                  alt="Astra"
                />
              </a>
              <a href="https://www.bonava.ee/" target="_blank" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400 text-4xl">
                <Image
                  src={"./img/logos/bonova.svg"}
                  className={`lg:h-[100px] h-[50px] w-full transition-all duration-300 hover:grayscale-0 a ${selectedVariant.clientFilter}`}
                  width={590}
                  height={262}
                  alt="Astra"
                />
              </a>
              <a href="https://skechers.ee" target="_blank" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400 text-4xl">
                <Image
                  src={"./img/logos/skechers.svg"}
                  className={`lg:h-[100px] h-[50px] w-full transition-all duration-300 hover:grayscale-0 a ${selectedVariant.clientFilter}`}
                  width={475}
                  height={42}
                  alt="Astra"
                />
              </a>
              <a href="https://www.excellent.ee/" target="_blank" className="mr-5 mb-5 lg:mb-0  hover:text-gray-400 text-4xl">
                <Image
                  src={"./img/logos/exc.svg"}
                  className={`lg:h-[100px] h-[50px] w-full transition-all duration-300 hover:grayscale-0 a ${selectedVariant.clientFilter}`}
                  width={475}
                  height={42}
                  alt="Astra"
                />
              </a>
            </div>
          </div>



        </div>


      </section>




      <section className="lg:py-24 p-8 text-center max-w-screen-lg mx-auto grid sm:grid-cols-2 gap-4 items-center">
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

      <section className={`${karla.className} p-8 text-center max-w-screen-lg mx-auto lg:py-16`}>
        <h2 className={` ${montserrat.className} text-4xl font-semibold text-slate-800 mb-8`}>Meie Teenused</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className=" rounded-lg shadow-lg overflow-hidden">
            <Image
              src={"/img/banquet.jpg"}
              width={1200}
              height={900}
              alt="Banquet setup"
            />
            <div className={`p-4 h-full ${selectedVariant.cardBg}`}>
              <h3 className="text-2xl font-bold ">Banketid</h3>
              <p className="mt-2">Elegantsed ja hästi korraldatud banketid igaks sündmuseks.</p>
            </div>
          </div>

          <div className="  rounded-lg shadow-lg overflow-hidden">
            <Image
              src={"/img/wedding.jpg"}
              width={1200}
              height={900}
              alt="Wedding event planning"
            />
            <div className={`p-4 h-full ${selectedVariant.cardBg}`}>
              <h3 className="text-2xl font-bold">Pulmad</h3>
              <p className="mt-2">Teie erilise päeva unustamatuks muutmine laitmatu planeerimisega.</p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={"/img/events.jpg"}
              width={1200}
              height={900}
              alt="Misc events"
            />
            <div className={`p-4 h-full ${selectedVariant.cardBg}`}>
              <h3 className="text-2xl font-bold">Muud suuremad üritused</h3>
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
        <h2 className={` ${montserrat.className} text-4xl font-semibold text-slate-800 mb-8`}>Võtke Meiega Ühendust</h2>
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
