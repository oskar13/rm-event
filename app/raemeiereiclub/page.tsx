import Footer from "@/components/Footer"
import Image from "next/image"

import { Karla } from "next/font/google";




const karla = Karla({

    subsets: ["latin"],
});


export default function RaeMeiereiClub() {
    return (
        <>


            <section className={`relative mb-8`} >
                <div id="noise-wrapper" className="absolute inset-0 bg-[url(/img/noise.svg)] opacity-25 brightness-100 contrast-150">
                </div>

                <div className="py-16 px-4 mx-auto text-center lg:pb-16 lg:px-12 relative text-white bg-gradient-to-bl from-purple-950 to-indigo-900">


                    <div className="grid grid-cols-4 gap-4 justify-center align-middle items-center md:max-w-4xl mx-auto">
                       
                        <div className="sm:col-span-1 col-span-4 items-center  sm:flex">
                            {/* Logo */}
                            <Image
                                className="sm:w-full  max-w-20  mx-auto mb-8"
                                src={"/img/logos/rmevent7_solo_dark.svg"}
                                alt="RM Events Logo"
                                width={100}
                                height={100}
                            />

                        </div>
                     

                            {/* Heading */}
                            <h1 className={`${karla.className} sm:col-span-3 col-span-4 mb-4 text-4xl tracking-tight leading-none md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-100 to-violet-200 bg-clip-text text-transparent `}>
                                RM Event – Jätkame uues suunas!
                            </h1>

                    </div>







                </div>


            </section>


            <section className="container md:max-w-4xl mx-auto mb-8 text-lg p-4">
                <h2 className={` ${karla.className} font-semibold text-4xl mb-4`}  >Austatud külalised ja partnerid</h2>
                <p className="mb-4"><strong>Rae Meierei Restoran Club</strong> on lõpetanud oma tegevuse Tallinna vanalinnas. Meie kirg ja pühendumine ürituste korraldamisele ei ole aga kuskile kadunud! Oleme teinud suure muutuse ning jätkame oma teekonda RM Event nime all – professionaalse ürituste korraldajana.</p>
                <h2 className={` ${karla.className} font-semibold text-3xl mb-4`}  >Mida see tähendab?</h2>
                <p className="mb-4">Kuigi me ei tegutse enam vanalinnas, oleme otsustanud kasutada oma kogemust toitlustuse ja ürituste planeerimise vallas, et pakkuda teile veelgi paremaid lahendusi. RM Event on spetsialiseerunud erinevate sündmuste korraldamisele, alates bankettidest ja pulmadest kuni rahvusvaheliste konverentside ja suurüritusteni.</p>
                <h2 className={` ${karla.className} font-semibold text-3xl mb-4`}  >Meie uus missioon</h2>
                <p className="mb-4">Meie eesmärk on muuta teie visioon reaalsuseks – professionaalse planeerimise, täpse koordineerimise ja laitmatu elluviimise kaudu. Jätkame koostööd oma partneritega, et pakkuda terviklikke lahendusi, mis vastavad kõige kõrgematele standarditele.</p>
                <h2 className={` ${karla.className} font-semibold text-3xl mb-4`}  >Jätkame koos!</h2>
                <p className="mb-4">Kuigi meie asukoht on muutunud, jääb meie pühendumus kvaliteedile ja elamustele samaks. Kui otsite usaldusväärset partnerit oma järgmise sündmuse korraldamiseks, siis RM Event on siin, et aidata.</p>
                <p className="mb-16">Võtke meiega ühendust ja loome koos midagi erakordset!</p>
                <p className={`mb-16 text-2xl ${karla.className} font-light text-right`}>Teie RM Event meeskond</p>


            </section>


            <Footer>

            </Footer>
        </>

    )
}