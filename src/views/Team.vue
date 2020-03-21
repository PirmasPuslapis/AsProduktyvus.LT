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
                  Darbas komandoje per atstumą gali tapti iššūkiu net ir savo
                  srities profesionalams. Pateikiame keletą patarimų, kaip tokį
                  darbą paversti efektyviu.
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
                <i class="fas fa-video text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Įrankiai vaizdo pokalbiams:
              </h3>

              Tai viena efektyviausių priemonių ir vienas geriausių ginklų jūsų
              darbo priemonių arsenale. Tačiau ir čia svarbu pasirinkti teisingai.
              <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://hangouts.google.com/">„Google Hangout“</a>
                         <h4 class="text-gray-600">
                         </br>+ Nereikia papildomos programinės įrangos
                         </br>+ Nemokama paslaugaa
                         </br>- Vienu metu ekrane galite matyti tik keturis žmones
                         </br>- Gali būti nepatogu dirbti su didesne komanda
                         </br>- Nėra galimybės gyvai dalintis pastabomis ir kt. („Whiteboard“)
                         </br>- Mokama įrašymo funkcija
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://zoom.us/">„Zoom“</a>
                         <h4 class="text-gray-600">
                         </br>+ Ekrane galite matyti visus prisijungusius žmones
                         </br>+ Yra galimybė gyvai dalintis pastabomis ir kt. („Whiteboard“)
                         </br>+ Į kainą įeina ir įrašymo funkcija
                         </br>- Jei pokalbyje dalyvauja daugiau nei keturi žmonės, jis gali trukti iki 40 min.*
                         </br>- Paslauga mokama
                         </br>- Reikia programėlės ir programinės įrangos
                        </h4>
                      </div>
                    </div>
                  </li>
                   <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://teams.microsoft.com/">„Microsoft Teams“ (anksčiau – „Skype“)</a>
                         <h4 class="text-gray-600">
                         </br>+ Nemokama paslauga
                         </br>+ Yra galimybė gyvai dalintis pastabomis ir kt. („Whiteboard“)
                         </br>- Lyginant su kitais įrankiais, sudėtinga naudotis
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                         </br>*šis apribojimas laikinai neveikia.
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
                    Nepersistenkite!
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Visi šie įrankiai gali atrodyti tarsi išsigelbėjimas, tačiau
                    nerekomenduojama jais piktnaudžiauti. Kai kurias užduotis galima
                    efektyviau atlikti ar skirti elektroniniu paštu ar privačia žinute.

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
                  <i class="fas fa-comments text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Pokalbių kambariai</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Be elektroninio pašto, viena iš geriausių nuotolinės komunikacijos priemonių yra
                  pokalbių kambariai. Jie ne tik padeda išlaikyti ryšį, bet ir nereikalauja
                  nuolatinio įsitraukimo.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>                         „Slack“
                         <h4 class="text-gray-600">
                         </br>+ Nemokamai galite išsiųsti iki 10 000 žinučių per mėnesį
                         </br>+ Vienu metu galite bendrauti daugybėje skirtingų pokalbių
                         </br>+ Lengva naudotis
                         </br>- Reikia programinės įrangos
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                   <div class="flex items-center">
                      <div>
                         <a href="https://teams.microsoft.com">„Microsoft Teams“</a>
                         <h4 class="text-gray-600">
                         </br>+ Nemokama paslauga
                         </br>- Nepatogu naudotis
                         </br>- Reikia programinės įrangos
                         </br>- Nepatogus pokalbių formatas (threads)
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
                <i class="fas fa-camera-retro text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Video pokalbis
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
              </p>
                Vaizdo pokalbio metu bendrauti su skirtingais žmonėmis yra sudėtingiau,
                nes atstumas gali tapti psichologinio barjero atsiradimo priežastimi.
                Pateikiama keletą patarimų, kaip bendrauti vaizdo pokalbio metu.

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
                          Visada naudokite vaizdo kamerą. Tai padės pokalbį išlaikyti dinamišką ir gyvą.
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
                        <h4 class="text-gray-600">Prieš skambutį pasitikrinkite, ką pašnekovas matys už jūsų</h4>
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
                        <h4 class="text-gray-600">Jei nekalbate, išjunkite ir mikrofoną.
                          Niekas nenori girdėti, kaip valgote, kviečiate katiną ar šaukiate ant savo kaimyno.
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
                        <h4 class="text-gray-600">Pradedant susitikimą praneškite, ko tikitės, o pabaigoje
                          aptarkite kitus veiksmus ir išsiųskite susitikimo išvadas bei planą visiems jo dalyviams.
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
                        <h4 class="text-gray-600">Venkite atlikti du darbus vienu metu.
                          Jei pokalbio metu atliekate kitas užduotis, tai ženklas, kad blogai planuojate savo laiką.
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
                        <h4 class="text-gray-600">Prieš skirdami susitikimo laiką paklauskite savęs, kodėl šis susitikimas
                          yra toks svarbus. Jei tai galima išspręsti naudojantis kitomis komunikacijos priemonėmis – taip ir padarykite.

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

                  </h4>Pauzės ir pokalbio „temperatūra“
                  <p class="text-md font-light mt-2 text-white">
                    Visada patikrinkite savo pokalbio „temperatūrą". Paprašykite pirštų pagalba (nuo 1 iki 5)
                    parodyti, kaip pašnekovas ar pokalbio dalyviai jaučiasi. Palaikykite pokalbį, klauskite, ar viskas suprantama
                    ir nėra klausimų. Tačiau nedarykite to, ko nedarytumėte gyvo susitikimo metu.

                  </p>
                  <p class="text-md font-light mt-2 text-white">
                    Vaizdo pokalbio metu darykite ilgesnes pauzes. Toks susitikimas nevyksta realiu laiku, todėl nesulaukus atsakymo per sekundę,
                    palaukite kelias sekundes. Nekalbėkite greitai ir sekite savo kalbėjimo įpročius.
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
                  <i class="fas fa-meh-rolling-eyes text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Emocijos</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                 Toks bendravimas reikalauja dar geriau pažinti savo pašnekovų emocijas.
                 Jei gautas laiškas atrodo negatyvus ar net piktas, nebūtinai taip yra.
                 Prieš darydami išvadas paklauskite savęs, ar tikrai galite būti visiškai tikras.
                 Įvertinkite visas aplinkybes ir pasitikslinkite.

                 Tai ypač aktualu dirbant užsienio kalba ir bendradarbiaujant su kitų kultūrų žmonėmis.
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
