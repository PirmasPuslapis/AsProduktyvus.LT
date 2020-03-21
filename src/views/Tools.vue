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
                  Jūsų produktyvumui rekomenduojame keliatą įrankių.
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
            xmlns="https://www.w3.org/2000/svg"
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
                         </br>+ Nemokama paslauga
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
                         </br>- Nemokamos versijos pokalbis gali trukti iki 40 min.*
                         </br>- Paslauga mokama
                         </br>- Reikia programėlės ir programinės įrangos
                        </h4>
                      </div>
                    </div>
                  </li>
                   <li class="py-2">
                    <div class="flex items-center">
                      <div>
                         <a href="https://teams.microsoft.com/">„Microsoft Teams“ (anksčiau – „Skype for Business“)</a>
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
                    xmlns="https://www.w3.org/2000/svg"
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
                    efektyviau atlikti ar skirti elektroniniu paštu, privačia žinute.

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
            xmlns="https://www.w3.org/2000/svg"
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
                      <div>
                        <a href="https://slack.com/">„Slack“ (Rekomenduojame)</a>
                         <h4 class="text-gray-600">
                         </br>+ Nemokamai galite išsiųsti iki 10 000 žinučių per mėnesį
                         </br>+ Vienu metu galite bendrauti daugybėje skirtingų pokalbių kambarių
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
                         </br>- Nepatogus pokalbių formatas (angl. Threads)
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
