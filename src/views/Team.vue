<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 30vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/10 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <p class="mt-4 text-lg text-gray-300">
                  Darba su kitais zmonemis grupeje per atstuma gali buti isukis.
                  Dazniausiai nes nesame prate prie tokio bendravimo nuolatos.
                  Musu patarimai kaip efektyviai dirbti su grupe, komanda per atstuma!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Irankiai - Vaizdo Pokalbiai
              </h3>

              Vaizdo Pokalbiai - Vaizdo pokalbiai yra vienas is geriausiu irankiu
              jusu arsenale. Is anskto nusistatyke taisykles (apie jas veliau). Dabar musu pasiulymai:
              <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://hangouts.google.com/">Google hangout</a>
                         <h4 class="text-gray-600">
                         </br>+ Nereikia papildomos programines irangos
                         </br>+ Nemokama
                         </br>- Vienu metu ekrane tik 4 zmonemis
                         </br>- Su daug zmoniu - bardakelis :)
                         </br>- Nera "Whiteboard funckijos"
                         </br>- Irasymo funkcija mokama
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://zoom.us/">Zoom</a>
                         <h4 class="text-gray-600">
                         </br>+ Matosi visi zmones vienu metu ekrane
                         </br>+ Whiteboard funkcija
                         </br>+ Irasymo funkcija ieina i kaina
                         </br>- Nuo 4 zmoniu susitikimo trukme 40min (dabar nuimtas sitas apribojimas, bet jis bus sugrazintas.
                         Tai pripratus dabar, veliau gali tekti susimoketi :) )
                         </br>- Mokama
                         </br>- Reikia programeles ir programines irangos
                        </h4>
                      </div>
                    </div>
                  </li>
                   <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://teams.microsoft.com/">Microsoft Teams (buves Skype)</a>
                         <h4 class="text-gray-600">
                         </br>+ Nemokama
                         </br>+ Kartu ir pokalbiu kambarys
                         </br>+ Whiteboard funckija
                         </br>- Ne intuityvi
                         </br>- Sudetinga naudotis, lyginant su kitais irankiais
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>

            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    nepersistenkite!
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Visi sie irankiai gali atrodyti kaip igelbejimas. Taciau nepersistenkite.
                    Nedarykite vaizdo susitikimu tik delto kad juos daryti. Pagalvokite,
                    gal isamus el. laiskas ar zinute pokalbiu kambaryje yra tai jo jums reikia?
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1557200134-3103da7b6bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Pokalbiu kambariai</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Be el. pasto vienas is geriausiu asichronines komunikacijos irankiu yra
                  pokalbiu kambariai. Jie padeda ne tik islaityi rysi, bet ir isvengti
                  "konteksto persijungimu" kai jus esate petraukiamas skambucio ar susitikimo.
                  Kazkada reikia ir dirbti :)
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://slack.com">Slack</a>
                         (vienariskiskai musu pasirinkimas)
                         <h4 class="text-gray-600">
                         </br>+ Nemokama iki 10000 zinuciu/per menesi
                         </br>+ Super lengva naudotis
                         </br>+ Kambariu principas
                         </br>- Reikia programines irangos
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                   <div class="flex items-center">
                      <div>
                         <a href="https://teams.microsoft.com">Microsoft Teams</a>
                         <h4 class="text-gray-600">
                         </br>+ Nemokama
                         </br>+ Gan lengva naudotis
                         </br>- Neintuityvus interfeisas
                         </br>- Reikia programines irangos
                         </br>- Nepatogus pokalbiu formatas (threads)
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative bg-gray-300 py-5">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Video pokalbis
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
              </p>
                Video pokalbio metu su zmonemis bendrauti yra daug sunkiau nes
                atstumas sudaro tam tikra pchiholoini barjera.
                Musu patarimai kaip elgtis pokalbio metu paciam ir su grupe:

                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Visada naudokite kamera. Vaizdas padeda islaikyti gyvuma
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Pasitikite, kas yra jusu fone kai naudojate kamera</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Jei nekalbate, visada "uzsitildykte" mikrofona.
                          Niekas nenori girdeti kaip jus valgote, kvieciate katina, ar saukiate ant kaimyno.
                        </h4>
                      </div>
                    </div>
                  </li>
                   <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Pradekite susitikima pranesdami ko tikites is sio susitikimo. susitikimo
                          pabaigoje pasitikrinkite sekancius veiksmus, ir isiuskite susitikimo santraupa el. pastu visiems dalyviams.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Jokiu budu nedarykite 2 dabu vienu metu. Jei darote kazka kita susitikimo metu,
                          kol kazkas kabla - arba blogai planuoajate laika, arba jums nereikai buti siame susitikime.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Svarbiausia: Neorganziuokite susitikimu del fakto kad reikia susitikimo.
                          Pries pertrukdami kitu zmoniu diena - paklauskite saves - Kodel sitas susitikimas negali buti el. laiskas?
                        </h4>
                      </div>
                    </div>
                  </li>

                </ul>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1580917922805-f8f57e08c0ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Pauzes, temperatura
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Visada "pasimatuokite" susustikimo temepratura. Parasykite parodyti
                    pirstais kaip jauciasi susitikimo dalyviai: "Nuo 1 iki 5 Kaip jauciates siandiena?"
                    Paprasykite dalyviu atsistoti, paklauskite ar zmones suprato ka pasajate, ar nera klausimu.
                  </p>
                  <p class="text-md font-light mt-2 text-white">
                    Darkite ilgesnes pauzes. Kalbant per video pokalbi, pokalbis nevyksta realiu laiku. Jei nesulaukiate
                    atsakymo per 1 sekunde, palaukite 3. Zmogus intuitivyiai po 1 sekundes tylos nori kalbeti toliau. Nedarykite to!!!
                    Sekite savo kalbejimo manieras.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1575278220902-cdf1a07a0421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Emocijos</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                 Bendraujant per atstuma labai sunku suprasti kitu zmoniu emocijas.
                 Jei gavote laiska, kuris atrodo negatyvus, ar net piktas - tai nebutinai yra taip.
                 Pries darydami bet kokias isvadas paklauskite saves, ar tikrai taip yra?
                 Pameginkite save pastatyti i kito zmogaus vieta.

                 Tai ypac galioja jei dirbate ne gimtaja kalba ar su kitos tautybes, kulturos zmonemis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
