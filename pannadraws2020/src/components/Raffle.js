const raffle = [
  'https://www.instagram.com/sallyovenden__ceramics/',
  'https://www.instagram.com/merry1traveling/',
  'https://www.instagram.com/v.bulo/',
  'https://www.instagram.com/motherofraccoons/',
  'https://www.instagram.com/drago947/',
  'https://www.instagram.com/asespenandpaper/',
  'https://www.instagram.com/uponthewildwall/',
  'https://www.instagram.com/infinite_sphera_creator/',
  'https://www.instagram.com/natura13028/',
  'https://www.instagram.com/shanganagh/',
  'https://www.instagram.com/dee.ralley/',
  'https://www.instagram.com/rnicholson88/',
  'https://www.instagram.com/dawneyestone/',
  'https://www.instagram.com/bridb81/',
  'https://www.instagram.com/ottoandelke/',
  'https://www.instagram.com/intothewoods_craftily/',
  'https://www.instagram.com/dunleamargaret/',
  'https://www.instagram.com/muireann_byrne/',
  'https://www.instagram.com/patriciakeane8/',
  'https://www.instagram.com/irish_heather1/'
];

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

shuffle(raffle);
const item = raffle[Math.floor(Math.random() * raffle.length)];
