const whoLinks = {
  dgSolaris: 'https://dgsolaris.bandcamp.com/',
  howsMyPop:
    'https://open.spotify.com/artist/6u80mPeDoYPHNrpfodi7Oj?si=w1chkmSPSqCgjqw8FIDSrg',
}

const whereLinks = {
  paperdressVintage: 'https://paperdressvintage.co.uk/',
  glastonburyFestival: 'https://glastonburyfestivals.co.uk/',
}

export default [
  {
    notable: false,
    when: new Date('2020-06-26'),
    who: 'DG Solaris',
    whoLink: whoLinks.dgSolaris,
    where: 'Paperdress Vintage',
    whereLink: whereLinks.paperdressVintage,
    gigLink: 'https://google.com',
  },
  {
    notable: true,
    when: new Date('2007-06-22'),
    who: 'Hows My Pop?',
    whoLink: whoLinks.howsMyPop,
    where: 'Glastonbury Festival',
    whereLink: whereLinks.glastonburyFestival,
    gigLink: 'https://www.bbc.co.uk/programmes/p00fkvms',
  },
]
