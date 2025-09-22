/******************************************************************************
Funksjoner og metoder opgave

Les opgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for opgave 1 her

function checkOddEven(num1) {
  if (num1 % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}
console.log(checkOddEven(44)); // Partall

const checkOddEven2 = (num1) => {
  if (num1 % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
};
console.log(checkOddEven2(535)); // Oddetall

// num % 2 => Remainderen: det som er "til overs" etter en deler to integraler
// 5 % 2 => 5/2 = 2.5 | Only integer part: 5-(2*2)=1 => r = 1

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for opgave 2 her

function getCaps(str) {
  return str.toUpperCase() + "!";
}
console.log(getCaps("dette er kult")); // DETTE ER KULT!

const getCaps2 = (str) => {
  return str.toUpperCase() + "!";
};
console.log(getCaps2("dette er kult")); // DETTE ER KULT!

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for opgave 3 her

function getGreeting(name, time) {
  let greeting = "";

  if (time >= 0 && time <= 5) {
    greeting = "God Natt";
  } else if (time >= 6 && time <= 11) {
    greeting = "God morgen";
  } else if (time >= 12 && time <= 17) {
    greeting = "God dag";
  } else if (time >= 18 && time <= 23) {
    greeting = "God Kveld";
  }
  
  if ((time < 0) | (time > 23)) {
    return `Ugyldig Tid`;
  } else {
    return `${greeting} ${name}`;
  }
}
console.log(getGreeting("Anders", 33)); // Ugyldig Tid
console.log(getGreeting("Anders", -1)); // Ugyldig Tid
console.log(getGreeting("Anders", 0)); // God Natt Anders
console.log(getGreeting("Anders", 23)); // God Kveld Anders
console.log(getGreeting("Anders", 14)); // God dag Anders
console.log(getGreeting("Anders", 6)); // God morgen Anders

// 0 <= x <= 1 fungerer ikke i js; x >= 0 && x <= 1

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for opgave 4 her

const colors = ["Rød", "Grønn", "Blå", "Gul"];
const numbers = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

// ikke destruktiv (endrer ikke orginalen)
// ! returnerer ikke orginalen ! gir en newArray som er alle elementer utenom det første(1) og siste(-1)

const sliceArray = (arr) => {
  let newArray = [];
  newArray = arr.slice(1, -1); // fra index 1( 2nd element ), til
  return newArray;
};
console.log(sliceArray(colors)); // [ "Grønn", "Blå" ]
console.log(sliceArray(numbers)); //[ "To", "Tre", "Fire", "Fem" ]

// Destruktiv (Endrer orginalen)
function cutArray(arr) {
  arr.shift();
  arr.pop();
  return arr;
}
console.log(cutArray(colors)); // [ "Grønn", "Blå" ]
console.log(cutArray(numbers)); // [ "To", "Tre", "Fire", "Fem" ]

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den opdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for opgave 5 her

let str1 = "  Javascript er vanskelig   ";
let str2 = " Det er vanskelig å bruke metoder ";
let str3 = "   vanskelig        ";
let str4 = "       Det er så vanskelig å være Vanskelig i van skeligeretider";

function getPositiveTrim(str) {
  let strPositive = str.replace(/\bvanskelig\b/gi, "gøy");
  return strPositive.trim();
}

//  - \b = Word Bounderies; \bvanskelig\b => "vanskeligere = false"
//
// Flags:
//  - g → global (all matches)
//  - i → case-insensitive (INsensetive, not case sensetive)
//  - m → multiline (affects ^ and $)
//  - s → dot matches newline

console.log(getPositiveTrim(str1)); // "Javascript er gøy"
console.log(getPositiveTrim(str2)); // "Det er gøy å bruke metoder"
console.log(getPositiveTrim(str3)); // "gøy"
console.log(getPositiveTrim(str4)); // "Det er så gøy å være gøy i vanskeligere tider"

console.log(str4.replace(/vanskelig/g, "gøy").trim()); // Det er så gøy å være Vanskelig i gøyere tider

// My testing :)
// const getPositiveTrim = (str) => {
//   return str.replace(/\bvanskelig\b/g, "gøy").trim();
// };
//
// const speller1 = (str) => {
//   return str.replace(/vanskelig/g, "gøy");
// };
// const speller2 = (str) => {
//   return str.replace(/vanskelig/gi, "gøy");
// };
// const speller3 = (str) => {
//   return str.replace(/\bvanskelig\b/g, "gøy");
// };
// console.log(speller1(str4));
// console.log(speller2(str4));
// console.log(speller3(str4));
//

/******************************************************************************         
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for opgave 6 her

//steg 1
items.shift();
console.log(items); // [ "Penn", "Notatbok", "Viskelær", "Blyant", "Markør" ]

//steg 2
if (items.indexOf("Viskelær") != -1) {
  items[items.indexOf("Viskelær")] = "Linjal";
}
console.log(items); // [ "Penn", "Notatbok", "Linjal", "Blyant", "Markør" ]

/******************************************************************************
 My testing:)
function replaceElement(el1, el2, arr) {
  const elIndex = arr.indexOf(el1);
  if (elIndex != -1) {
    return (arr[elIndex] = el2);
  }
}
replaceElement("Viskelær", "Linjal", items);
console.log(items);
******************************************************************************/

//steg3
items.splice(0, 2, "Markeringspenn");
console.log(items); // [ "Markeringspenn", "Linjal", "Blyant", "Markør" ]

//steg4

let itemsStr = items.join(" | ");
console.log(itemsStr); // Markeringspenn | Linjal | Blyant | Markør
console.log(items.join(" | ")); // Markeringspenn | Linjal | Blyant | Markør

// Ekstra utfordring:

let newArrayE = items.filter((el) => el.includes("e"));
console.log(newArrayE); // [ "Markeringspenn" ]

const foods = ["Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream"];

let newArrayA = foods.filter((a) => a.includes("a"));
console.log(newArrayA); // [ "Taco", "Spaghetti", "Potato", "Icecream" ]
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den opdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det opdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for opgave 7 her

console.log(foods); //[ "Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream" ]

function opSyvD(arr, str) {
  if (arr.includes(str)) {
    let index = arr.indexOf(str);
    arr.splice(index, 1);
  } else {
    arr.push(str);
  }
  return arr;
}

console.log(opSyvD(foods, "Taco")); // ["Spaghetti", "Fish", "Rice", "Potato", "Icecream"];
console.log(opSyvD(foods, "Te")); // [ "Spaghetti", "Fish", "Rice", "Potato", "Icecream", "Te" ]
console.log(opSyvD(foods, "Taco")); // [ "Spaghetti", "Fish", "Rice", "Potato", "Icecream", "Te", "Taco" ]

//
//
//Non destructive

const foods2 = ["Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream"];
console.log(foods2); // [ "Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream" ]

function opSyvND(arr, str) {
  if (arr.includes(str)) {
    let index = arr.indexOf(str);
    return arr.slice(index + 1, arr.length);
  } else {
    return arr.concat(str);
  }
}
console.log(opSyvND(foods2, "Taco")); // [ "Spaghetti", "Fish", "Rice", "Potato", "Icecream" ]
console.log(foods2); // [ "Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream" ]

console.log(opSyvND(foods2, "Te")); // ["Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream", "Te"];
console.log(foods2); // [ "Taco", "Spaghetti", "Fish", "Rice", "Potato", "Icecream" ]

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for opgave 8 her

function smartAss(param) {
  if (typeof param === "string") {
    return "😎" + param + "😎";
  } else if (typeof param === "number") {
    return "😎" + param * 2 + "😎";
  } else if (typeof param === "boolean") {
    if (param === true) {
      return "😎Ja😎";
    } else {
      return "😎Slapp av😎";
    }
  } else {
    return "😎Kun primitive verdier😎";
  }
}

console.log(smartAss("hey")); // 😎hey😎
console.log(smartAss(1)); // 😎2😎
console.log(smartAss(true)); // 😎Ja😎
console.log(smartAss(false)); // 😎Slapp av😎
console.log(smartAss(new String("hello"))); // 😎Kun primitive verdier😎

// :)
// const smarterAss = (param) => {
//   if (param instanceof String) {
//     return "😎" + param.valueOf() + "😎";
//   }
// };

// console.log(smarterAss(new String("hello"))); // 😎hello😎
