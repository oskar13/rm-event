import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({

  subsets: ["latin"],
});


export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-bl from-purple-950 to-indigo-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Image
            className="w-64 mx-auto mb-8"
            src="./img/logos/rmlogo.svg"
            alt="RM Events Logo"
            width={100}
            height={100}
          ></Image>


          <h1
            className={` ${montserrat.className} mb-4 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}
          >Teie idee, meie teostus.</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 montserrat-font">Muudame teie visiooni tegelikkuseks läbi professionaalse planeerimise, täpse koordineerimise ja laitmatu elluviimise.</p>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase montserrat-font-heavy">Meie Kliendid:</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="https://www.tv3.ee/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">

                <Image
                src={"./img/logos/tv3.svg"}
                width={100}
                height={100}
                className="w-10"
                alt="TV 3 kanal"
                ></Image>
              </a>
              <a href="https://www.kanal2.ee/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <Image
                src={"./img/logos/astra.svg"}
                  className="w-60"
                  width={100}
                  height={100}
                  alt="Astra"
                
                />
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 text-4xl">
                ???
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 text-center max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-semibold">Kes me oleme</h2>
        <p className="mt-2 text-gray-700 text-lg">
          Tänu mitmekesisele kogemusele toitlustuses, ürituste planeerimises ning bankettide, pulmade ja rahvusvaheliste konverentside korraldamises on RM Event teie usaldusväärne partner suurepäraste meeldejäävate loomisel.
        </p>
      </section>

      <section className="p-8 bg-white text-center max-w-screen-lg mx-auto rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-700">Meie Teenused</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="bg-purple-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Banketid</h3>
            <p className="mt-2">Elegantsed ja hästi korraldatud banketid igaks sündmuseks.</p>
          </div>
          <div className="bg-purple-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Pulmad</h3>
            <p className="mt-2">Teie erilise päeva unustamatuks muutmine laitmatu planeerimisega.</p>
          </div>
          <div className="bg-purple-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Rahvusvahelised Konverentsid</h3>
            <p className="mt-2">Sujuv sündmuste koordineerimine suuremahuliste konverentside jaoks.</p>
          </div>
        </div>
      </section>

      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold">Võta Meiega Ühendust</h2>
        <p className="mt-2 text-gray-700">Pöörduge meie poole nõu saamiseks ja teeme teie ürituse edukaks!</p>
        <a href="mailto:info@rmevent.ee" className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 inline-block">
          Võta Ühendust
        </a>
      </section>

      <footer className="bg-violet-900 text-white py-4 text-center">
        &copy; 2025 RM Event. All rights reserved.
      </footer>
    </main>
  );
}
