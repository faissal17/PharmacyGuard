const PharmacyData = [
  {
    id: 1,
    name: 'Pharmacie Du Souk',
    address: '6FR6+2Q3, Youssoufia',
    latitude: 32.24000969999999,
    longitude: -8.5380824,
    distance: 210,
    images: [
      'https://www.uiass.ma/wp-content/uploads/2018/01/PHARMACIE2-2.jpg',
    ],
    openingHours: '8:00 AM',
    closingHours: '8:00 PM',
    phone: '+212 522 22 22 22',
    email: 'contact.Souk@pharmacy.ma',
    services: ['Vaccination', 'Delivery', 'Home Visit', 'Prescription'],
    onGuard: true,
    onGuardDays: [new Date('2020-12-01'), new Date('2020-12-31')],
    reviews: [
      {
        id: 1,
        pharmacyId: 1,
        username: 'Some username',
        rating: 4.5,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
    ],
  },
  {
    id: 2,
    name: 'Pharmacie moderne',
    address: '6FR7+J4H, Youssoufia',
    latitude: 32.2415572,
    longitude: -8.5371446,
    distance: 0.3,
    images: [
      'https://www.pod.fr/wp-content/uploads/2020/05/dans-quelle-ville-acheter-sa-pharmacie-1.jpg',
    ],

    openingHours: '8:00 AM',
    closingHours: '8:00 PM',
    phone: '+212 522 22 22 22',
    email: 'contact.solidarité@pharmacy.ma',
    services: ['Vaccination', 'Delivery', 'Home Visit', 'Prescription'],
    onGuard: true,
    onGuardDays: [new Date('2020-12-01'), new Date('2020-12-31')],
    reviews: [
      {
        id: 1,
        pharmacyId: 1,
        username: 'User name',
        rating: 2,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
    ],
  },
  {
    id: 3,
    name: 'Pharmacy Ibn Sina',
    address: '6FQ5+X4W, Youssoufia',
    latitude: 32.23999469999999,
    longitude: -8.542164399999997,
    distance: 300,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C3%89griselles-le-Bocage-FR-89-commerce-pharmacie-1.jpg/1200px-%C3%89griselles-le-Bocage-FR-89-commerce-pharmacie-1.jpg',
    ],
    openingHours: '8:00 AM',
    closingHours: '8:00 PM',
    phone: '+212 522 22 22 22',
    email: 'contact.sourzac@pharmacy.ma',
    services: ['Vaccination', 'Delivery', 'Home Visit', 'Prescription'],
    onGuard: false,
    onGuardDays: null,
    reviews: [
      {
        id: 1,
        pharmacyId: 1,
        username: 'Another username',
        rating: 3,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
    ],
  },

  {
    id: 4,
    name: 'Pharmacie INAS',
    address: '6FV5+3VP, Youssoufia',
    latitude: 32.2427022,
    longitude: -8.5402997,
    distance: 100,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWWtvH5hHuN7jsJMs8g2OtOdoPAmn5sqwkA&usqp=CAU',
    ],
    openingHours: '8:00 AM',
    closingHours: '8:00 PM',
    phone: '+212 522 22 22 22',
    email: 'contact.solidarité@pharmacy.ma',
    services: ['Vaccination', 'Delivery', 'Home Visit', 'Prescription'],
    onGuard: true,
    onGuardDays: [new Date('2020-12-01'), new Date('2020-12-31')],
    reviews: [
      {
        id: 1,
        pharmacyId: 1,
        username: 'Just a username',
        rating: 1,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
    ],
  },
  {
    id: 5,
    name: ' Pharmacy Ahmar',
    address: '6FR7+RP2, Youssoufia',
    latitude: 32.2420163,
    longitude: -8.535741800000002,
    distance: 150,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Paris_75009_Place_Blanche_no_05_Grande_Pharmacie_de_la_Place_Blanche.jpg/1200px-Paris_75009_Place_Blanche_no_05_Grande_Pharmacie_de_la_Place_Blanche.jpg',
    ],
    openingHours: '8:00 AM',
    closingHours: '8:00 PM',
    phone: '+212 522 22 22 22',
    email: 'contact.belous@pharmacy.ma',
    services: ['Vaccination', 'Delivery', 'Home Visit', 'Prescription'],
    onGuard: false,
    onGuardDays: null,
    reviews: [
      {
        id: 1,
        pharmacyId: 1,
        username: 'Username Again',
        rating: 2.2,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
      {
        id: 1,
        pharmacyId: 1,
        username: 'Username Again',
        rating: 2.2,
        comment: 'Great pharmacy, I recommend it',
        date: '2020-12-01',
      },
    ],
  },
];

export default PharmacyData;
