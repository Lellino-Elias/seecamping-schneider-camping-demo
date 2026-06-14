import type { CampsiteConfig } from "../types";

const IMG = "/campsites/seecamping-schneider";

const seecampingSchneider: CampsiteConfig = {
  name: "See-Camping Eben",
  shortName: "Seecamping",
  slug: "seecamping-schneider",
  ort: "Eben im Pongau",
  region: "Salzburger Land",
  brandKind: "Komfort-Camping am See",
  see: "Badesee Eben",
  regionLong: "Salzburger Sportwelt · Ski amadé · Salzburger Land",

  heroVariant: "center",

  claim: "Direkt am Badesee Eben campen",
  claimEmphasis: "am Badesee Eben",
  intro:
    "Unser Komfort-Campingplatz liegt direkt am Badesee Eben — der Eintritt ins kühle Nass ist für alle Campinggäste frei. Ob Zelt, Caravan oder Wohnmobil, Sommer oder Winter: Bei Familie Schneider bist du ganzjährig willkommen.",

  statement: {
    text: "Bei uns liegt der Badesee gleich hinter dem Stellplatz — Eintritt für Campinggäste inklusive.",
    emphasis: "gleich hinter dem Stellplatz",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Der Badesee Eben grenzt unmittelbar an den Platz — für alle Campinggäste mit freiem Eintritt ins kühle Bergwasser.",
      image: { src: `${IMG}/kids-301dcb18a1.webp`, alt: "Kinder am Steg des Badesees Eben" },
    },
    {
      title: "Sommer wie Winter",
      text: "Ganzjährig geöffnet: im Sommer baden im See, im Winter direkt von der Loipe auf die Piste von Ski amadé.",
      image: { src: `${IMG}/gallery-9757abc0d1.webp`, alt: "Familie beim Skifahren in Ski amadé bei Eben" },
    },
    {
      title: "Familiär geführt",
      text: "Familie Schneider führt den Platz persönlich und teilt gern ihre Begeisterung für Natur und Region.",
      image: { src: `${IMG}/activity-d0d0742910.webp`, alt: "Gastgeberin Herta Schneider bei einer Wanderung über Eben" },
    },
  ],

  usps: [
    "Badesee-Eintritt inklusive",
    "Ganzjährig geöffnet",
    "Kostenloses WLAN",
    "Komfort-Stellplätze",
    "Freizeitcenter mit Sauna",
    "Familiär geführt",
  ],

  trust: {
    heading: "Was den See-Camping Eben ausmacht",
    headingEmphasis: "See-Camping Eben",
    intro:
      "Direkt am Badesee, ganzjährig geöffnet und persönlich von Familie Schneider geführt — kurze Wege, freier Seezugang und ein Platz, der Sommer wie Winter funktioniert.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-5cca830176.webp`, alt: "Luftaufnahme: See-Camping Eben am Badesee Eben" },
    sunset: { src: `${IMG}/kids-34bdbfcf2f.webp`, alt: "Familie am Ufer des Badesees Eben" },
  },

  breather: {
    image: { src: `${IMG}/gallery-3f1ef81e10.webp`, alt: "Panorama des Badesees Eben mit Liegewiese und Bergen" },
    line: "Der Badesee beginnt gleich hinter dem Vorzelt.",
  },

  camping: {
    heading: "Camping direkt am Wasser",
    intro:
      "Vom Stellplatz sind es nur ein paar Schritte ins kühle Nass — dazu Komfort-Stellplätze, ein Freizeitcenter mit Sauna und alles, was einen entspannten Campingtag ausmacht.",
    features: [
      {
        title: "Badesee inklusive",
        text: "Der Eintritt in den Badesee Eben ist für alle Campinggäste frei — Sandstrand und klares Bergwasser liegen gleich nebenan.",
        image: { src: `${IMG}/gallery-cabf1f57e7.webp`, alt: "Sonniger Badesee Eben mit Sandstrand und Bergpanorama" },
      },
      {
        title: "Komfort-Stellplätze",
        text: "Parzellierte Plätze mit 80–100 m² und Anschluss für Strom, Gas, Wasser und Kanal — kostenloses WLAN am ganzen Gelände inklusive.",
        image: { src: `${IMG}/amenity-f0c85e6a42.webp`, alt: "Stellplätze für Wohnmobile am See-Camping Eben" },
      },
      {
        title: "Restaurant am See",
        text: "Im Seerestaurant warten Kuchen, Kaffee, Eisbecher und kulinarische Köstlichkeiten — nur ein paar Schritte vom Stellplatz.",
        image: { src: `${IMG}/gallery-0a39086c46.webp`, alt: "Restaurant und Wasserrutschen am Badesee Eben" },
      },
      {
        title: "Beachvolleyball",
        text: "Direkt am Badesee liegt ein Sandplatz für die Partie zwischendurch, mit dem Bergpanorama der Sportwelt als Kulisse.",
        image: { src: `${IMG}/gallery-f0c3520bb2.webp`, alt: "Beachvolleyballplatz am Badesee Eben" },
      },
      {
        title: "Liegewiese am Wasser",
        text: "Großzügige Liegewiesen rund um den See laden zum Sonnen, Entspannen und Abschalten zwischen den Bergen ein.",
        image: { src: `${IMG}/amenity-d5c87d91e9.webp`, alt: "Liegewiese am Badesee Eben" },
      },
    ],
  },

  mobilheime: {
    heading: "Übernachten ohne eigene Ausrüstung",
    intro:
      "Kein eigener Wohnwagen? Bei uns schläfst du trotzdem komfortabel — im neuen Wohn- & Schlaf-Fass aus Vollholz oder im Blockhaus für bis zu vier Personen.",
    items: [
      {
        name: "Wohn- & Schlaf-Fass",
        kind: "Schlaf-Fass aus Vollholz",
        text: "Unser neues Schlaf-Fass aus Vollholz mit ausklappbarem Bett- & Tischsystem und Extra-Schlafkoje — den Sonnenaufgang in den Salzburger Bergen gibt es gratis dazu. Bettwäsche oder Schlafsack bitte selbst mitbringen.",
        image: { src: `${IMG}/gallery-a7b527bb88.webp`, alt: "Wohn- & Schlaf-Fass beim See-Camping Eben" },
        features: ["Vollholz", "Extra-Schlafkoje", "Bett- & Tischsystem"],
      },
    ],
  },

  kinder: {
    heading: "Wasserspaß für Kinder",
    intro:
      "Am Badesee wird kein Tag langweilig: zwei Wasserrutschen, ein Kleinkinderbecken, Sprungsteg und Spielplatz — und der KiTiWaPf endet direkt vor unserer Haustür.",
    features: [
      {
        title: "Zwei Wasserrutschen",
        text: "Die großen Gäste sausen über zwei Rutschen in den See, die Kleinen planschen im Kleinkinderbecken mit eigener Rutsche.",
        image: { src: `${IMG}/gallery-f620a152f8.webp`, alt: "Kind auf der Wasserrutsche am Badesee Eben" },
      },
      {
        title: "Sprungsteg & Schwimmtrampolin",
        text: "Wasserpilz, Sprungsteg und ein Schwimmtrampolin sorgen für Sprünge und Spaß im klaren Bergwasser des Badesees.",
        image: { src: `${IMG}/kids-88553be1c2.webp`, alt: "Schwimmtrampolin im Badesee Eben" },
      },
      {
        title: "KiTiWaPf-Wanderpfad",
        text: "Der Kinder-Tiere-Wanderpfad führt spielerisch durch Eben — Start in der Kreistsiedlung, Ziel direkt vor dem Campingplatz.",
        image: { src: `${IMG}/kids-a8588a6294.webp`, alt: "Familie am KiTiWaPf Kinder-Tiere-Wanderpfad in Eben" },
      },
    ],
  },

  aktivitaeten: {
    heading: "In Eben kann man was erleben",
    intro:
      "Rund um den Platz wartet die Salzburger Sportwelt — Wandern und Biken im Sommer, Ski amadé und Loipe im Winter, dazu Almen zum Einkehren das ganze Jahr.",
    items: [
      {
        title: "Radfahren & Mountainbiken",
        text: "Vom gemütlichen Ennsradweg bis zu anspruchsvollen Bergtouren — ein dichtes Netz an Rad- und Bikestrecken beginnt direkt am Platz.",
        image: { src: `${IMG}/activity-0531adaa26.webp`, alt: "Radfahrer auf einem Höhenweg über Eben im Pongau" },
      },
      {
        title: "Wandern in der Sportwelt",
        text: "Gut markierte Wege in allen Schwierigkeitsgraden, dazu Almen und Berggasthöfe zum Rasten — mitten in der Salzburger Sportwelt.",
        image: { src: `${IMG}/activity-96eedeb5dd.webp`, alt: "Wanderer am Gerzkopf bei Eben" },
      },
      {
        title: "Almen & Einkehr",
        text: "Panoramagasthöfe wie die Reitlehenalm laden mit regionalen Schmankerln und weiter Aussicht zur wohlverdienten Pause.",
        image: { src: `${IMG}/hero-2351c98462.webp`, alt: "Reitlehenalm mit Panoramaterrasse über Eben" },
      },
      {
        title: "Ski amadé",
        text: "Der Hausberg Monte Popolo gehört zu Ski amadé — 760 Pistenkilometer, und ein kostenloser Skibus bringt dich in die Nachbargebiete.",
        image: { src: `${IMG}/gallery-f1dbf8bc53.webp`, alt: "Familie auf der Piste im Skigebiet bei Eben" },
      },
      {
        title: "Langlaufen ab Platz",
        text: "Der Einstieg in die Tauernloipe liegt direkt am Campingplatz — bestens präpariert für klassische Langläufer und Skater.",
        image: { src: `${IMG}/activity-16760267b4.webp`, alt: "Langläufer auf der Loipe in der Salzburger Sportwelt" },
      },
      {
        title: "Rodeln & Winterspaß",
        text: "Beleuchtete Rodelbahnen, Winterwandern und Eislaufen runden den Tag abseits der Piste ab — Spaß im Schnee für alle.",
        image: { src: `${IMG}/activity-44c1ae591b.webp`, alt: "Rodelbahn in Eben und Umgebung" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Eben",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn bis zur Abfahrt Eben im Pongau — der Platz liegt rund 60 km südlich von Salzburg, ausgeschildert Richtung Badesee.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächste Bahnhöfe sind Bischofshofen und Radstadt an der Ennstalstrecke — von dort weiter mit Bus oder Taxi nach Eben.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg liegt rund 60 km entfernt, etwa eine Autostunde über die Tauernautobahn.",
      },
    ],
  },

  galerie: {
    heading: "Sommer wie Winter am See",
    headingEmphasis: "am See",
    intro:
      "Vom Schlaf-Fass über den Bikeweg bis zur Almwanderung — ein paar Eindrücke von Eben im Pongau.",
    tag: "Sommer & Winter",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-1ae5801ee4.webp`, alt: "Innenraum des Wohn- & Schlaf-Fasses mit Doppelbett" },
      { src: `${IMG}/gallery-2e8a162930.webp`, alt: "Wohn- & Schlaf-Fass mit Einzelbetten und Sitzbänken" },
      { src: `${IMG}/activity-d562f27300.webp`, alt: "Mountainbiken in der Salzburger Sportwelt" },
      { src: `${IMG}/kids-bc1dc38e2f.webp`, alt: "Familienwanderung zu einer Almhütte mit Spielplatz bei Eben" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Platz am Badesee?",
    headingEmphasis: "am Badesee",
    intro:
      "Wähle Zeitraum und Personen — Familie Schneider meldet sich persönlich mit deiner Verfügbarkeit für den Stellplatz am Badesee.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis pro Nacht für 2 Erwachsene — Stellplatz € 15 (inkl. Müll & Badesee-Eintritt) plus Erwachsener je € 12 und Kurtaxe je € 3; Strom und Kind (bis 14 J.) extra. Sommer 2026, Änderungen vorbehalten.",
    highlight: {
      title: "Badesee inklusive",
      text: "Der Stellplatzpreis enthält den freien Eintritt in den Badesee Eben.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Caravan/Wohnmobil)", perNight: 45, perExtraGuest: 15 },
      { id: "zelt", label: "Zeltplatz", perNight: 45, perExtraGuest: 15 },
    ],
  },

  kontakt: {
    coords: { lat: 47.399422, lng: 13.396088 },
    tel: "+43 664 4502000",
    telHref: "tel:+436644502000",
    mail: "info@seecamping-schneider.at",
    adresse: "Badeseestraße 54 · 5531 Eben im Pongau · Salzburger Land",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Badesee", href: "#kinder" },
      ],
    },
    { label: "Übernachten", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default seecampingSchneider;
