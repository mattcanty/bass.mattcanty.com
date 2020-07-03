const whoLinks = {
  'DG Solaris': 'https://dgsolaris.bandcamp.com/',
  'Hows My Pop?':
    'https://open.spotify.com/artist/6u80mPeDoYPHNrpfodi7Oj?si=w1chkmSPSqCgjqw8FIDSrg',
  'Dan Haywood': 'http://danhaywood.net/',
}

const whereLinks = {
  'Paperdress Vintage': 'https://paperdressvintage.co.uk/',
  'Glastonbury Festival': 'https://glastonburyfestivals.co.uk/',
  'Brundell Social Club': 'http://www.brudenellsocialclub.co.uk/',
}

const gigs = [
  {
    notable: true,
    when: new Date('2007-06-22'),
    who: 'Hows My Pop',
    where: 'Glastonbury Festival',
    gigLink: 'https://www.bbc.co.uk/programmes/p00fkvms',
  },
  {
    notable: true,
    when: new Date('2014-12-10'),
    who: 'Dan Haywood',
    where: 'Brundell Social Club',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2014-12-11'),
    who: 'Dan Haywood',
    where: 'Bethnal Green Working Mens Club',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2014-12-12'),
    who: 'Dan Haywood',
    where: 'The Cube, Bristol',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2014-12-13'),
    who: 'Dan Haywood',
    where: 'Kitchen Garden Cafe, Birmingham',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2014-12-14'),
    who: 'Dan Haywood',
    where: 'Ramsgate Music Hall',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-09'),
    who: 'Laish',
    where: 'Fuori Luogo, Asti, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-10'),
    who: 'Laish',
    where: 'Arci Chinaski, Sermide, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-11'),
    who: 'Laish',
    where: 'Groove, Lugo Di Vicenza, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-13'),
    who: 'Laish',
    where: 'Circolo Spaziorosso, Chiaravalle, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-14'),
    who: 'Laish',
    where: 'Provo Cult, San Giovanni, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-15'),
    who: 'Laish',
    where: 'Viniles, San Benedetto Del Tronto, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-16'),
    who: 'Laish',
    where: 'Deliri Cafe, Sora, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-17'),
    who: 'Laish',
    where: 'Mishima, Terni, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-18'),
    who: 'Laish',
    where: 'Sottoscala, Latina, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-19'),
    who: 'Laish',
    where: 'Yellow Bar, Rome, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-20'),
    who: 'Laish',
    where: 'Marla, Perugia, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-11-23'),
    who: 'Laish',
    where: 'Ex Aurora, Livorno, Italy',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-13'),
    who: 'Laish',
    where: 'The Lighthouse, Deal, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-16'),
    who: 'Laish',
    where: 'The Greys, Brighton, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-17'),
    who: 'Laish',
    where: 'Borderline, London, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-18'),
    who: 'Laish',
    where: 'Yorkshire House, Lancaster, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-19'),
    who: 'Laish',
    where: 'Cumberland Arms, Newcastle, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-20'),
    who: 'Laish',
    where: 'SVA, Stroud, UK',
    gigLink: '',
  },
  {
    notable: true,
    when: new Date('2018-04-21'),
    who: 'Laish',
    where: 'Cafe Kino, Bristol, UK',
    gigLink: '',
  },
]

export default gigs.map((g) => {
  return {
    notable: g.notable,
    when: g.when,
    who: g.who,
    where: g.where,
    gigLink: g.gigLink,

    whoLink: whoLinks[g.who],
    whereLink: whereLinks[g.where],
  }
})
