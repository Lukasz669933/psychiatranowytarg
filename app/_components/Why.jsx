import React from "react";
import Accordion from "./Accordian";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    title: "Depresja",
    answer:
      "Depresja to przewlekłe zaburzenie nastroju charakteryzujące się uczuciem głębokiego smutku, braku energii i zainteresowania codziennymi aktywnościami. Objawy mogą obejmować również zmiany apetytu, zaburzenia snu, trudności w koncentracji oraz myśli samobójcze. Leczenie zazwyczaj obejmuje terapię psychologiczną i farmakoterapię.",
  },
  {
    title: "Zaburzenia lękowe",
    answer:
      "Zaburzenia lękowe to grupa zaburzeń psychicznych, które charakteryzują się nadmiernym, nieustającym lękiem i obawami. Do najczęstszych należą zaburzenia lęku uogólnionego (GAD), fobie specyficzne, lęk społeczny oraz zaburzenia paniki. Leczenie obejmuje terapię poznawczo-behawioralną oraz leki przeciwlękowe.",
  },
  {
    title: "Zaburzenia afektywne dwubiegunowe",
    answer:
      "Zaburzenia afektywne dwubiegunowe (choroba dwubiegunowa) to schorzenie charakteryzujące się epizodami manii i depresji. Epizody manii obejmują podwyższony nastrój, nadmierną energię, impulsywność, a epizody depresji są podobne do objawów depresji. Leczenie obejmuje stabilizatory nastroju, leki przeciwdepresyjne oraz psychoterapię.",
  },
  {
    title: "Schizofrenia",
    answer:
      "Schizofrenia to poważne zaburzenie psychiczne, które wpływa na myślenie, emocje i zachowanie. Objawy mogą obejmować halucynacje, urojenia, dezorganizowane myślenie oraz zaburzenia funkcjonowania społecznego. Leczenie opiera się głównie na farmakoterapii (leki przeciwpsychotyczne) oraz terapii psychospołecznej.",
  },
  {
    title: "Zaburzenia obsesyjno-kompulsywne (OCD)",
    answer:
      "OCD to zaburzenie charakteryzujące się nawracającymi, niechcianymi myślami (obsesjami) oraz powtarzającymi się czynnościami (kompulsjami), które osoba czuje się zmuszona wykonywać, aby złagodzić lęk. Leczenie obejmuje terapię poznawczo-behawioralną oraz leki przeciwdepresyjne, takie jak selektywne inhibitory zwrotnego wychwytu serotoniny (SSRI).",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="lg:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Dlaczego warto odwiedzić{" "}
            <span className="text-primary"> psychiatrę? </span>{" "}
          </h2>

          <p className="my-4 text-gray-600 text-lg">
            W dzisiejszych czasach zdrowie psychiczne jest równie ważne jak
            zdrowie fizyczne. Wiele osób zmaga się z różnymi problemami
            emocjonalnymi i psychicznymi, które mogą znacząco wpływać na jakość
            życia. Wizyta u psychiatry to krok w stronę lepszego samopoczucia i
            zdrowia psychicznego.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 md:border-r px-3">
              <h3 className="text-2xl font-semibold">
                1. Profesjonalna diagnoza
              </h3>
              <p className="text-gray-600 text-lg">
                Psychiatra jest lekarzem specjalistą, który posiada wiedzę i
                doświadczenie niezbędne do rozpoznawania i leczenia różnorodnych
                zaburzeń psychicznych. Dzięki odpowiedniej diagnozie możliwe
                jest ustalenie przyczyny problemów oraz wdrożenie skutecznego
                leczenia.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h3 className="text-2xl font-semibold">2. Skuteczne leczenie</h3>
              <p className="text-gray-600 text-lg">
                Psychiatrzy mogą przepisywać leki, które pomagają w stabilizacji
                nastroju, redukcji objawów depresji, lęków czy innych zaburzeń
                psychicznych. Odpowiednio dobrana farmakoterapia może znacząco
                poprawić jakość życia pacjenta.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:border-r px-3">
              <h3 className="text-2xl font-semibold">3. Terapia i wsparcie</h3>
              <p className="text-gray-600 text-lg">
                Oprócz leczenia farmakologicznego, psychiatrzy oferują również
                różnorodne formy terapii, takie jak terapia
                poznawczo-behawioralna, terapia psychodynamiczna czy terapia
                interpersonalna. Regularne sesje terapeutyczne pomagają w
                lepszym zrozumieniu siebie, swoich emocji oraz radzeniu sobie z
                trudnościami życiowymi.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h3 className="text-2xl font-semibold">
                4. Poprawa jakości życia
              </h3>
              <p className="text-gray-600 text-lg">
                Zdrowie psychiczne ma ogromny wpływ na nasze codzienne
                funkcjonowanie. Depresja, lęki, zaburzenia snu czy problemy z
                koncentracją mogą znacząco obniżyć jakość życia. Dzięki pomocy
                psychiatry możliwe jest odzyskanie równowagi psychicznej i
                cieszenie się pełnią życia.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:border-r px-3">
              <h3 className="text-2xl font-semibold">
                5. Zapobieganie nawrotom
              </h3>
              <p className="text-gray-600 text-lg">
                Regularne wizyty u psychiatry pozwalają na monitorowanie
                postępów w leczeniu oraz wczesne wykrywanie ewentualnych
                nawrotów choroby. Dzięki temu możliwe jest szybkie reagowanie i
                zapobieganie pogorszeniu się stanu zdrowia psychicznego.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-3">
              <h3 className="text-2xl font-semibold">6. Wszechstronna pomoc</h3>
              <p className="text-gray-600 text-lg">
                Psychiatrzy współpracują z innymi specjalistami, takimi jak
                psycholodzy, terapeuci zajęciowi czy pracownicy socjalni, aby
                zapewnić kompleksową pomoc pacjentowi. Dzięki temu leczenie jest
                bardziej efektywne i dostosowane do indywidualnych potrzeb.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl mt-5">
            Nie zwlekaj - zadbaj o swoje zdrowie psychiczne
          </h2>

          <p className="my-4 text-gray-600 text-lg">
            Jeżeli odczuwasz trudności emocjonalne, zmiany nastroju, problemy z
            koncentracją czy inne objawy, które utrudniają Ci codzienne
            funkcjonowanie, nie wahaj się skorzystać z pomocy psychiatry. Wizyta
            u specjalisty to krok w stronę lepszego samopoczucia i zdrowia
            psychicznego. Pamiętaj, że zdrowie psychiczne jest fundamentem
            szczęśliwego i satysfakcjonującego życia.
          </p>
        </div>
        <div className="lg:py-6 flex items-center justify-center flex-col my-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Częste<span className="text-primary"> Schorzenia </span>{" "}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            {faqs.map((faq, index) => (
              <div className="w-full h-full" key={index}>
                <Accordion title={faq.title} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
