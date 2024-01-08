// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
  {
    disclaimer: 'Tickets for Belot',
    visible: true,
    subEvent: {
      description: 'You can either play Belot or Uno (both run simultaneously) - Link for the Uno game below',
      link: '/event-details/Game Night (Uno)'
    },
    title: "Game Night (Belot)",
    description: "🌟 Kickstart the new year with a bang! 🌟 ",
    bgImage: "23",
    date: "20th January",
    time: "19:30",
    ticketTimer: '2024-01-20T19:00:00',
    ticketLimit: 64,
    //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `Grote Keizer Bowling`,
    entry: 6,
    // memberEntry: 5,
    including: ['+ drink by choice', '+ drink by choice'],
    price_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    memberPrice_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    activeMemberPrice_id: 'price_1OWBaCIOw5UGbAo1fi6OwKrL',
    discountPass: [
      'simonatodorova2216@gmail.com',
      'ivandikliev1@abv.bg',
      'nikoltoneva88@gmail.com',
      'dfawal@gmail.bg',
      'deamira.st23@gmail.com',
      'dimitrova04v@abv.bg',
      'melisa_hristova@abv.bg',
      'tonovivailo@gmail.com',
      'alistaneva@gmail.com',
      'danailova97@gmail.com',
      'miryana.b.ivanova@gmail.com',
      'vesi_it@abv.bg',
      'alex_ivanov2002@gmail.com',
      'bulgariansociety.lwd@gmail.com'
    ],
    freePass: ["vlady1002@abv.bg"],
    extraInputs: true,
    text: [
      `Hope you get a good rest during the holidays because BGSL starts strong with the first event for the year.  
      `,
      `👫 Belot Tournament:
      `,
      '- Limited Spaces: 32 people (16 teams of 2)',
      `- Sign up alone? No worries! We'll find you a teammate.
      `,
      `- Cash Prize: €30 for the winning team!
      `,
      ` Don't miss the chance to kick off the year with some friendly competition, exciting games, and awesome prizes!
      `,
      `Let the games begin! 🏆🃏
      `,

      `* Sign up period: 08.01.2024 until  spots are full 
      `,
    ],
    ticket_img: '/assets/images/tickets/ticket-3.jpg',
    images: ["/assets/images/portfolio/portfolio-2"],
    thumbnail: "/assets/images/portfolio/portfolio-2",
  },
  {
    disclaimer: 'Tickets For Uno',
    visible: true,
    subEvent: {
      description: 'You can either play Uno or Belot (both run simultaneously) - Link for the Belot game below',
      link: '/event-details/Game Night (Belot)'
    },
    title: "Game Night (Uno)",
    description: "🌟 Kickstart the new year with a bang! 🌟 ",
    bgImage: "23",
    date: "20th January",
    time: "19:30",
    ticketTimer: '2024-01-20T21:00:00',
    ticketLimit: 100,
    //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `Grote Keizer Bowling`,
    entry: 6,
    // memberEntry: 5,
    including: ['+ drink by choice', '+ drink by choice'],
    price_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    memberPrice_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    activeMemberPrice_id: 'price_1OWBaCIOw5UGbAo1fi6OwKrL',
    discountPass: [
      'simonatodorova2216@gmail.com',
      'ivandikliev1@abv.bg',
      'nikoltoneva88@gmail.com',
      'dfawal@gmail.bg',
      'deamira.st23@gmail.com',
      'dimitrova04v@abv.bg',
      'melisa_hristova@abv.bg',
      'tonovivailo@gmail.com',
      'alistaneva@gmail.com',
      'danailova97@gmail.com',
      'miryana.b.ivanova@gmail.com',
      'vesi_it@abv.bg',
      'alex_ivanov2002@gmail.com',
      'bulgariansociety.lwd@gmail.com'
    ],
    freePass: ["vlady1002@abv.bg"],
    extraInputs: true,
    text: [
      `Hope you get a good rest during the holidays because BGSL starts strong with the first event for the year.  
      `,
      `👫 Uno Tournament:
      `,
      '- Unlimited Spaces!',
      `- Cash Prize: €15 for the ultimate Uno champion!
      `,
      ` Don't miss the chance to kick off the year with some friendly competition, exciting games, and awesome prizes!
      `,
      `Let the games begin! 🏆🃏
      `,

      `* Sign up period: 08.01.2024 until game begins 
      `,
    ],
    ticket_img: '/assets/images/tickets/ticket-4.jpg',
    images: ["/assets/images/portfolio/portfolio-2"],
    thumbnail: "/assets/images/portfolio/portfolio-2",
  },
];

export const OPEN_NON_SOCIETY_EVENTS = [
  // {
  //   title: "Barista Course",
  //   description: "Master the profession of a barista",
  //   bgImage: "2",
  //   when: "TBD",
  //   //Use the corrected when for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedWhen: "",
  //   where: "TBD",
  //   entry: 30,
  //   memberEntry: 5,
  //   text: [
  //     "Join our Barista Course led by Henry Daniels, owner of Revista Coffee and become a pro barista in no time!",
  //     "As a member of the Bulgarian Society Leeuwarden, you'll get a special discount. The original price of 30 euros is now only 20 euros for members. You will be contacted by Henry to find a suitable date for the course. The course is usually held Tuesday and Wednesday mornings from 10-12. After finishing the course you will be able to receive a reference letter for a future employer. You will pay for the course in person!",
  //   ],
  //   images: ["/assets/images/portfolio/portfolio-7"],
  //   thumbnail: "/assets/images/portfolio/portfolio-7",
  // },
];

export const EVENT_REFLECTION_DETAILS = [
  {
    title: "Bulgarian Dinner",
    bgImage: "12",
    date: "13th January",
    attendance: "60",
    comments: "20",
    text: [
      `Our first event - a traditional Bulgarian Dinner consisting of 3 courses. The starter was tarator - a "cold soup" made with yogurt and cucumber, the main course was musaka and we finished with chocolate cake for dessert.`,
    ],
    images: [
      { id: "1", image: "bulgarian-dinner/06", text: "" },
      { id: "2", image: "bulgarian-dinner/09", text: "" },
      { id: "3", image: "bulgarian-dinner/10", text: "" },
    ],
  },


];
