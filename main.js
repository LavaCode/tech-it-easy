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
  displayTotalInventory.textContent = `Het totale aantal schermen dat nog op voorraad is: ${countInventory(inventory)}`;

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
  const ambilightTelevisions = inventory.filter((backlight) => {
      if(backlight.ambilight){    
        return backlight;
      }
  });
  console.log(ambilightTelevisions);

  //Opdracht 2d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
  const televisionPrices = inventory.map((type) => {
    return type.price;
  })
  
  televisionPrices.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a <  b) {
        return -1;
    }
    return 0;
 })
 
 console.log(televisionPrices); 













  // const tele = students.filter((student) => {
  //   return student.course === 'FSD Bootcamp';
  //   // je kunt dit ook uitschrijven als:
  //   // if (student.course === 'FSD Bootcamp') {
  //   //    return true
  //   // }