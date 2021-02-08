// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,  //21
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4, //0
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7, //7
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5, //0
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8, //5
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6, //3
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10, //2
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10, //2
    sold: 8,
  },
];
//Opdracht 1a:** Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent. -- verwacht word 40
function countInventory(inventoryToCount) {
  // const inventory = inventoryToCount;
  let count = 0;

  for (const inventory of inventoryToCount) {
    const stock = inventory.originalStock - inventory.sold;
    count += stock;
  }
  return count;
}
console.log(`backstage count 'totaal te verkopen televisies': ${countInventory(inventory)}`);

//Opdracht 1b:** Zorg ervoor dat dit aantal _in het rood_ wordt weergegeven op de pagina
const displayTotalInventory = document.getElementById('totalStock');
displayTotalInventory.textContent = `${countInventory(inventory)}`;
displayTotalInventory.style.color = "darkred";

//Opdracht 2a:** Gebruik een array-methode om een array te maken met alle tv-type namen.
const televisionTypes = inventory.map((type) => {
  return `Type televisie: , ${type.name}`;
});
console.log(`backstage info 'Alle televisie types': ${televisionTypes}`);

//Opdracht 2b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
const televisionsSoldOut = inventory.filter((soldOut) => {
  return (soldOut.originalStock === soldOut.sold);
});
console.log(televisionsSoldOut);

//Opdracht 2c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const ambilightTelevisions = inventory.filter((checkTelevision) => {
  return (checkTelevision.options.ambiLight === true);
});
console.log(JSON.stringify(ambilightTelevisions));

//Opdracht 2d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
const televisionPrices = inventory.map((type) => {
  return type.price;
})

televisionPrices.sort((televisionA, televisionB) => {
  if (televisionA > televisionB) {
    return 1;
  }
  if (televisionA < televisionB) {
    return -1;
  }
  return 0;
})
console.log(televisionPrices);

//Opdracht 3a:** Wat is onze doel-opbrengst?
//Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het **blauw** weer op de pagina.
function totalValue(televisions) {
  let value = 0;

  for (const television of televisions) {
    value += television.price * (television.originalStock);
  }
  let formatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value);
  return formatter;
}

const displayValue = document.getElementById('totalValue');
displayValue.textContent = `${totalValue(inventory)}`;
displayValue.style.color = "darkblue";
console.log(`De totaalwaarde is ${totalValue(inventory)}`);

//Opdracht 3b:** Hoeveel hebben we tot nu toe verdient?
function totalSoldValue(televisions) {
  let value = 0;

  for (const television of televisions) {
    value += television.price * television.sold;
  }
  let formatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value);
  return formatter;
}

const displaySoldValue = document.getElementById('totalSoldValue');
displaySoldValue.textContent = `${totalSoldValue(inventory)}`;
displaySoldValue.style.color = "darkgreen";
console.log(`De totaalwaarde verkocht is: ${totalSoldValue(inventory)}`);

//opdracht 4
// Geef de type-namen van **twee** tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. 
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

//CODE IS DISABLED VANWEGE OPRDACHT 5e 

// const newType = document.createElement("li");
// newType.setAttribute("class", "newTelevisions");
// newType.textContent = inventory[4].type;

// const newType2 = document.createElement("li");
// newType2.setAttribute("class", "newTelevisions");
// newType2.textContent = inventory[5].type;

// const listTelevisions = document.getElementById("detailedDescription");
// listTelevisions.appendChild(newType);
// listTelevisions.appendChild(newType2);

// * **Opdracht 5a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
// Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken
function nameSpecified(televisionName) {
  return `${televisionName.brand} ${televisionName.type} - ${televisionName.name}`
}
console.log(nameSpecified(inventory[0]));

// Opdracht 5b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt.
function returnPrice(television) {
  value = television.price;
  let formatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value);
  return formatter;
}
console.log(returnPrice(inventory[1]));

// Opdracht 5c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm
// Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
// Dus een input van `[32]` geeft `32 inch (81 cm)` en een input van `[43, 50, 55, 58]` geeft `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, 
// zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
function returnSize(televisionSize) {
  const size = televisionSize.availableSizes;
  let inchToCm = 2.54;
  let sizesString = "";

  for (let index = 0; index < size.length; index++) {
    const cmSize = Math.round(size[index] * inchToCm);
    if (index > 0) {
      sizesString += " | ";
    }
    sizesString += `${size[index]} inch (${cmSize} cm)`;
  }
  return sizesString;
}
console.log(returnSize(inventory[1]));

// Opdracht 5d:** Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.`
function makeFullDescription(databaseItem) {
  const string = `${nameSpecified(databaseItem)}<br/>&emsp;&ensp;${returnPrice(databaseItem)}<br/>&emsp;&ensp;${returnSize(databaseItem)}<br></br>`;
  const newType = document.createElement("li");
  newType.setAttribute("class", "fullDescription");
  newType.innerHTML = string;

  const detailedDescription = document.getElementById("detailedDescription");
  toDisplay = detailedDescription.appendChild(newType);

  return string;
}
makeFullDescription(inventory[0])

// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. 
//Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! 
//Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
//Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

function makeFullList(database) {
  for (const item of database) {
    makeFullDescription(item);
  }
} 
makeFullList(inventory);

//Bonusopdrachten 
document.getElementById("sortPrice").addEventListener("click", function() {
    console.log('sortPrice button');
    console.log(televisionPrices);
});

document.getElementById("showAmbilight").addEventListener("click", function() {
  console.log('showAmbilight button');
  console.log(JSON.stringify(ambilightTelevisions));
});

document.getElementById("soldOutTelevisions").addEventListener("click", function() {
  console.log('soldOutTelevisions button');
  console.log(televisionsSoldOut);
});