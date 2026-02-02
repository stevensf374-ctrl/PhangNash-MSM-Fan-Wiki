const monsters = [
  {
    name: 'Furcorn',
    type: 'monster',
    rarity: 'common',
    elements: ['Plant','Cold'],
    sound: 'Soft vocal harmony',
    image: 'images/furcorn.png',
    summary: 'A friendly Natural Monster known for gentle singing.',
    cost: '30 diamonds','300 diamonds (Shugabush Island)','35 diamonds (Colossingum)','4,000 coins (Composer Island)'
     baseTimes: {
      'Plant Island': { breed: 8, nursery: 8 },
      'Shugabush Island': { breed: 8, nursery: 8 }
    }
    islands: {
      'Plant Island': { rule: 'Standard breeding' },
      'Shugabush Island': { rule: 'Shugabush + any monster' }
    },
    breeding: ['Potbelly + Mammott' , 'Furcorn + Rare Furcorn']
  }
];

const islands = [];
const lore = [];
