export const SALON_INFO = {
  name: "Studio Sonce",
  tagline: "Kozmetični salon Kranj",
  address: "Cesta Staneta Žagarja 50, 4000 Kranj",
  phone: "040 233 335",
  phoneFull: "+386 40 233 335",
  phoneAlt: "04 23 54 400",
  email: "sonce@studiosonce.com",
  hours: {
    weekdays: "Pon–Pet: 8:00–22:00",
    saturday: "Sob: 9:00–15:00",
    sunday: "Ned: zaprto",
  },
  social: {
    facebook: "https://facebook.com/studiosonce",
    instagram: "https://instagram.com/studiosonce",
  },
};

export const SERVICES = [
  {
    id: "nega-obraza",
    title: "Nega obraza",
    subtitle: "Dermalogica tretmaji",
    icon: "Sparkles",
    description:
      "Profesionalna nega obraza z ekskluzivnimi Dermalogica izdelki za čisto in sijočo kožo.",
    longDescription:
      "Naši obrazni tretmaji so prilagojeni vašemu tipu kože in specifičnim potrebam. Uporabljamo ekskluzivne Dermalogica izdelke, ki so klinično testirani in dermatološko potrjeni.",
    benefits: [
      "Čiščenje por in globinska detoksikacija",
      "Vlaženje in prehrana kože",
      "Zmanjšanje gub in korekcija tona",
      "Posvetlitev in izenačitev kože",
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: "masaze",
    title: "Masaže",
    subtitle: "Sprostitev in razstrupljanje",
    icon: "Hand",
    description:
      "Sprostitvene in terapevtske masaže za popolno sprostitev telesa in duha.",
    longDescription:
      "Naše masaže združujejo različne tehnike za dosego globoke sprostitve in razstrupljanja telesa. Primerne za vse starosti in potrebe.",
    benefits: [
      "Zmanjšanje stresa in napetosti",
      "Izboljšanje cirkulacije",
      "Sproščanje mišičnih blokov",
      "Spodbujanje limfne drenaže",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "manikira",
    title: "Manikira",
    subtitle: "CND gel lak",
    icon: "Gem",
    description:
      "Popolna nega rok in nohtov z ekskluzivnimi CND gel laki v vseh odtenkih.",
    longDescription:
      "Naša manikura vključuje nego rok, oblikovanje nohtov in barvanje z ekskluzivnimi CND gel laki, ki zdržijo do 3 tedne.",
    benefits: [
      "Dolgotrajen gel lak do 3 tednov",
      "Nega in prehrana kože rok",
      "Oblikovanje po vaši željah",
      "Širok izbor barv in dizajnov",
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
  {
    id: "pedikura",
    title: "Pedikura",
    subtitle: "Peclavus tretmaji",
    icon: "Footprints",
    description:
      "Profesionalna nega stopal z Peclavus linijo za zdravo in lepo nego nog.",
    longDescription:
      "Naša pedikura z Peclavus linijo zagotavlja strokovno nego stopal, reševanje boleznin in dolgotrajne rezultate.",
    benefits: [
      "Profesionalna nega stopal",
      "Reševanje vrasenih nohtov",
      "Mehčanje trde kože",
      "Dolgotrajen gel lak",
    ],
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80",
  },
  {
    id: "depilacija",
    title: "Depilacija",
    subtitle: "Vosek in sladkor",
    icon: "Feather",
    description:
      "Učinkovita odstranitev dlak z voskovimi in sladkornimi tehnikami za gladko kožo.",
    longDescription:
      "Nudimo depilacijo z voskovimi trakovi in sladkorno tehniko (sugaring) za vse dele telesa. Naše metode so nežne in učinkovite.",
    benefits: [
      "Dolgotrajna gladkost kože",
      "Nežno za občutljivo kožo",
      "Upočasnjena rast dlak",
      "Takojšnji rezultati",
    ],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
  {
    id: "anti-celulit",
    title: "Anti-celulit",
    subtitle: "LPG Cellu M6",
    icon: "Zap",
    description:
      "Revolucionarni LPG Cellu M6 tretmaji za učinkovito redukcijo celulita in oblikovanje postave.",
    longDescription:
      "LPG Cellu M6 je edina naprava s certifikatom FDA za redukcijo celulita. Tehnologija mehanskega stimuliranja tkiva stimulira fibroblaste za produkcijo kolagena in elastina.",
    benefits: [
      "Vidno zmanjšanje celulita",
      "Oblikovanje postave",
      "Zaostrejanje kože",
      "Stimulacija kolagena",
    ],
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80",
  },
  {
    id: "solarij",
    title: "Solarij",
    subtitle: "Moderan solarij",
    icon: "Sun",
    description:
      "Varno in enakomerno porjavitev s sodobnimi solarijskimi napravami.",
    longDescription:
      "Naš solarij uporablja najnovejše tehnologije za enakomerno in varno porjavitev. Primerno za vse tipe kože.",
    benefits: [
      "Enakomerna porjavitev",
      "Moderna UVA/UVB tehnologija",
      "Hitra in učinkovita",
      "Naravno videz",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    id: "vacu-slim",
    title: "VACU & INFRA SLIM",
    subtitle: "Oblikovanje postave",
    icon: "Activity",
    description:
      "Kombinirani program vakuumske terapije in infrardečega sevanja za idealno postavo.",
    longDescription:
      "VACU & INFRA SLIM kombinira vakuumsko terapijo z infrardečim sevanjem za najučinkovitejše oblikovanje postave in zmanjšanje maščobe.",
    benefits: [
      "Zmanjšanje maščobnih oblog",
      "Oblikovanje in zaostrejanje",
      "Izboljšanje cirkulacije",
      "Vidni rezultati že po prvem tretmaju",
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maja K.",
    rating: 5,
    text: "Absolutno sem navdušena nad Studio Sonce! Nega obraza z Dermalogica je bila fantastična – koža je zasijala. Osebje je izjemno prijetno in strokovno.",
    service: "Nega obraza",
  },
  {
    name: "Tina M.",
    rating: 5,
    text: "LPG tretmaji so spremenili moje telo! Po 10 tretmajih je celulit skoraj izginil. Priporočam vsaki ženski!",
    service: "Anti-celulit LPG",
  },
  {
    name: "Ana P.",
    rating: 5,
    text: "Salon je čudovit – ambijent, vonj, glasba... Vse je popolno. Manikura z gel lakom traja že 3 tedne in izgleda kot nova.",
    service: "Manikira",
  },
];

export const PRICING = {
  "nega-obraza": [
    { name: "Osnovna nega obraza", duration: "60 min", price: "45 €" },
    { name: "Dermalogica Pro Brightening", duration: "75 min", price: "65 €" },
    { name: "Dermalogica Age Smart", duration: "90 min", price: "75 €" },
    { name: "Ultrasonic tretma", duration: "60 min", price: "55 €" },
    { name: "Mikrodermabrazija", duration: "60 min", price: "50 €" },
  ],
  masaze: [
    { name: "Sprostitvena masaža (hrbet)", duration: "30 min", price: "30 €" },
    { name: "Sprostitvena masaža (celotno telo)", duration: "60 min", price: "55 €" },
    { name: "Aromaterapevtska masaža", duration: "60 min", price: "60 €" },
    { name: "Anticelulitna masaža", duration: "45 min", price: "45 €" },
    { name: "Masaža stopal in nog", duration: "30 min", price: "30 €" },
  ],
  manikira: [
    { name: "Osnovna manikura", duration: "45 min", price: "20 €" },
    { name: "Gel lak CND", duration: "60 min", price: "30 €" },
    { name: "Trajni lak z nego", duration: "75 min", price: "38 €" },
    { name: "Nail art (decoracija)", duration: "na nohot", price: "od 2 €" },
    { name: "Odstranitev gel laka", duration: "30 min", price: "15 €" },
  ],
  pedikura: [
    { name: "Osnovna pedikura", duration: "60 min", price: "30 €" },
    { name: "Pedikura + gel lak", duration: "75 min", price: "42 €" },
    { name: "Peclavus medicinska pedikura", duration: "90 min", price: "55 €" },
    { name: "Express pedikura", duration: "45 min", price: "25 €" },
  ],
  depilacija: [
    { name: "Zgornja ustnica", duration: "10 min", price: "8 €" },
    { name: "Brada", duration: "10 min", price: "8 €" },
    { name: "Pazduhe", duration: "15 min", price: "12 €" },
    { name: "Bikini linija", duration: "20 min", price: "18 €" },
    { name: "Noge (celote)", duration: "45 min", price: "35 €" },
    { name: "Hrbet", duration: "30 min", price: "25 €" },
  ],
  "anti-celulit": [
    { name: "LPG Cellu M6 – 1 tretma", duration: "35 min", price: "45 €" },
    { name: "LPG paket – 5 tretmajev", duration: "5x35 min", price: "200 €" },
    { name: "LPG paket – 10 tretmajev", duration: "10x35 min", price: "380 €" },
    { name: "LPG obraz – 1 tretma", duration: "30 min", price: "40 €" },
  ],
  solarij: [
    { name: "Solarij – 10 minut", duration: "10 min", price: "4 €" },
    { name: "Solarij – 20 minut", duration: "20 min", price: "7 €" },
    { name: "Paket 100 minut", duration: "100 min", price: "30 €" },
  ],
  "vacu-slim": [
    { name: "VACU SLIM – 1 tretma", duration: "30 min", price: "30 €" },
    { name: "VACU SLIM – 10 tretmajev", duration: "10x30 min", price: "250 €" },
    { name: "INFRA SLIM – 1 tretma", duration: "30 min", price: "25 €" },
    { name: "Kombinacija VACU + INFRA", duration: "60 min", price: "50 €" },
  ],
};
