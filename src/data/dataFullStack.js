import imgGoogle from '../assets/img/portfolio/fullstack/google-clone.png'
import imgWalmartApct from '../assets/img/portfolio/fullstack/walmart-apct-aphub.png'
import imgMarvel from '../assets/img/portfolio/fullstack/marvel-world.jpg'
import imgWalmartCill from '../assets/img/portfolio/fullstack/walmart-cill.jpg'
import imgMokepon from '../assets/img/portfolio/fullstack/mokepon.png'
import imgPlaziPunks from '../assets/img/portfolio/fullstack/platzi-punks.jpg'
import imgPolicies from '../assets/img/portfolio/fullstack/policies.jpg'
import imgBison from '../assets/img/portfolio/fullstack/bison-gym.jpg'
import imgNativApps from '../assets/img/portfolio/fullstack/nativapps-tutorials.jpg'
import imgWayuMx from '../assets/img/portfolio/fullstack/wayu-mx.jpg'
import imgSloncare from '../assets/img/portfolio/fullstack/sloncare.jpg'
import imgWayu from '../assets/img/portfolio/fullstack/wayu.jpg'
import imgPavimenti from '../assets/img/portfolio/fullstack/pavimenti.jpg'
import imgEvencorp from '../assets/img/portfolio/fullstack/evencorp.jpg'
import imgGiffy from '../assets/img/portfolio/fullstack/giffy.jpg'
import imgAvocadoEcommerce from '../assets/img/portfolio/fullstack/avocado-ecommerce.jpg'
import imgCeptinel from '../assets/img/portfolio/fullstack/ceptinel-events.jpg'

export const dataFullStack = {
  'FS-google-clone': {
    id: 'FS-google-clone',
    title: 'Google Clone',
    subtitle: 'Website',
    imgUrl: imgGoogle,
    area: { name: 'Front-End', color: 'blue' },
    date: '2023',
    features: {
      classification: 'Website',
      description: `Replica of the google home page for practicing HTML and CSS.`,
      technologies: ['HTML', 'Javascript', 'CSS'],
      links: [
        ['Github', 'https://github.com/andresnavag93/google-clone'],
        ['Demo', 'https://andresnavag93.github.io/google-clone/'],
      ],
    },
  },
  'FS-walmart-apct-aphub': {
    id: 'FS-walmart-apct-aphub',
    title: 'Walmart (APCT - APIHUB)',
    subtitle: 'Websystem',
    imgUrl: imgWalmartApct,
    area: { name: 'Front-End', color: 'blue' },
    date: '2022',
    features: {
      client: 'Walmart',
      classification: 'APCT - APHUB System',
      'developed in': 'Applaudo Studios',
      description: `Web system for the listing of orders for APCT. The overall project was divided into two phases. The first one was the construction of the UI for the search by id in which the information is displayed and imported into excel. The second phase was the construction of an APHUB that will serve as a gateway to APCT and other applications in the walmart ecosystem. `,
      technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      links: [],
    },
  },
  'FS-marvel-world': {
    id: 'FS-marvel-world',
    title: 'Marvel World',
    subtitle: 'Website',
    imgUrl: imgMarvel,
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Comics',
      description: `Marvel concept web page where you can see existing characters, comics, and stories, as well as bookmark and uncheck favorites. The best practices in development are used for a good score in Performance, web accessibility, PWA, and best practices in the lighthouse.`,
      technologies: [
        'React.js',
        'Webpack',
        'Heroku',
        'Redux',
        'Styled Components',
      ],
      links: [['Github', 'https://github.com/andresnavag93/marvel-world']],
    },
  },
  'FS-walmart-cill': {
    id: 'FS-walmart-cill',
    title: 'Walmart (Cill)',
    subtitle: 'Websystem',
    imgUrl: imgWalmartCill,
    area: { name: 'Front-End', color: 'blue' },
    date: '2021',
    features: {
      client: 'Walmart',
      classification: 'Error Processing System',
      'developed in': 'Applaudo Studios',
      description: `A system dedicated to internal error handling at Walmart. The system includes an advanced search, a complete list of errors, a detailed error view, error filters or attributes, and a help page.`,
      technologies: ['Electrode.js', 'Redux'],
      links: [],
    },
  },
  'FS-mokepon': {
    id: 'FS-mokepon',
    title: 'Mokepon',
    subtitle: 'Website',
    imgUrl: imgMokepon,
    area: { name: 'Front-End', color: 'blue' },
    date: '2023',
    features: {
      classification: 'Website - Videogame',
      description: `Fun simulation of the classic game of rock, paper and scissors disguised as animals. You can select an animal, move on the board and choose the powers to fight.`,
      technologies: ['HTML', 'Javascript', 'CSS'],
      links: [
        ['Github', 'https://github.com/andresnavag93/mokepon'],
        ['Demo', 'https://andresnavag93.github.io/mokepon/'],
      ],
    },
  },
  'FS-platzi-punks': {
    id: 'FS-platzi-punks',
    title: 'NFTs Marketplace',
    subtitle: 'Decentralized app',
    imgUrl: imgPlaziPunks,
    area: { name: 'Dapp', color: 'black' },
    date: '2021',
    features: {
      classification: 'Smart Contracts / NFT Marketplace',
      description: `Decentralized Nft Marketplace with a maximum collection of 10,000 Nfts with ERC721 standards. The Dapp is deployed in the Rinkeby testnet. The Platzi Punks can be mint and also be listed on rinkbeky's testnet on Opensea.`,
      technologies: ['React.js', 'Solidity', 'Rinkeby', 'Web3.js'],
      links: [
        // [
        //   'Smart Contract',
        //   'https://rinkeby.etherscan.io/address/0x8be14c046a9b858317ee36f7c20f3c0e5d52fc15#code',
        // ],
        ['Demo', 'https://platzi-punks-interface.vercel.app/#/'],
        [
          'Smart Contract Github',
          'https://github.com/andresnavag93/platzi-punks',
        ],
        [
          'MarketPlace Github',
          'https://github.com/andresnavag93/platzi-punks-interface',
        ],
      ],
    },
  },
  'FS-policies': {
    id: 'FS-policies',
    title: 'Microservices Policy System',
    subtitle: 'Web System ',
    imgUrl: imgPolicies,
    area: { name: 'Full Stack', color: 'brown' },
    date: '2021',
    features: {
      classification: 'Policies / Insurance',
      description: `Vehicle policy system with microservices architecture. It has login, registration and views of clients, vehicles and policies.`,
      technologies: ['Next.js', 'Node.js'],
      links: [],
    },
  },
  'FS-bison-gym': {
    id: 'FS-bison-gym',
    title: 'Bison Reserve',
    subtitle: 'Booking System API',
    imgUrl: imgBison,
    area: { name: 'Back-End', color: 'red' },
    date: '2020',
    features: {
      client: 'Wayu Inc.',
      classification: 'Gym, Health & Wellness',
      'developed in': 'Wayu Inc.',
      description: `Users belonging to a sports center or gym will be able to observe: disciplines taught, calendar of classes together with their schedule and coach, reservation of classes to be attended, the score of classes in which a User participated, payment through the platform, registration of the latest payments made and news and relevant information from the sports center/gym.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [['Demo', 'http://test-bison.s3-website-us-east-1.amazonaws.com']],
    },
  },
  'FS-nativapps-tutorials': {
    id: 'FS-nativapps-tutorials',
    title: 'NativApps Tutorials',
    subtitle: 'Landing Web',
    imgUrl: imgNativApps,
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Education & Tutorials',
      description: `Landing web of services dedicated to the exhibition of online tutorials.
        Informative banners, client logos, plans and promotions are displayed.`,
      technologies: ['React.js', 'Webpack', 'AWS'],
      links: [
        ['Github', 'https://github.com/andresnavag93/nativapps-tutorials'],
        ['Demo', 'https://andresnavag93.github.io/nativapps-tutorials/'],
      ],
    },
  },
  'FS-wayu-mx': {
    id: 'FS-wayu-mx',
    title: 'Wayu Inc (Mexico)',
    subtitle: 'Landing Web',
    imgUrl: imgWayuMx,
    area: { name: 'Front-End', color: 'blue' },
    date: '2019',
    features: {
      client: 'Wayu Inc.',
      classification: 'Marketing',
      'developed in': 'Wayu Inc.',
      description: `Corporate website with landing web structure dedicated to digital marketing. You can view the different sections of who we are, descriptions of products or plans, and testimonials from companies that have enjoyed the digital marketing service.`,
      technologies: ['Javascript', 'React.Js'],
      links: [
        ['Github', 'https://github.com/andresnavag93/mexico-wayuinc'],
        ['Demo', 'http://andresnavag93.github.io/mexico-wayuinc'],
      ],
    },
  },
  'FS-sloncare': {
    id: 'FS-sloncare',
    title: 'Sloncare',
    subtitle: 'Health & Care System API',
    imgUrl: imgSloncare,
    area: { name: 'Back-End', color: 'red' },
    date: '2018',
    features: {
      client: 'Sloncare',
      classification: 'Medical Care',
      'developed in': 'Wayu Inc.',
      description: `Health savings system with a payment gateway, where different users can obtain services from doctors and/or clinics such as medical appointments, surgical operations, emergency tickets, among others.`,
      technologies: ['Ruby on Rails', 'PostgreSQL', 'AWS'],
      links: [
        ['Demo', 'http://test-slon-care.s3-website.us-east-2.amazonaws.com/'],
      ],
    },
  },
  'FS-wayu': {
    id: 'FS-wayu',
    title: 'Wayu Inc',
    subtitle: 'Website',
    imgUrl: imgWayu,
    area: { name: 'FrontEnd', color: 'blue' },
    date: '2018',
    features: {
      client: 'Wayu Inc.',
      classification: 'Software & Marketing',
      'developed in': 'Wayu Inc.',
      description: `Corporate website to offer different development services in
        technology, digital marketing and design. It also has a contact form, about us, and
        the different technologies with which they have worked.`,
      technologies: ['Javascript', 'Angular'],
      links: [
        [
          'Demo',
          'http://test.wayuinc-webpage.s3-website-us-east-1.amazonaws.com',
        ],
      ],
    },
  },
  'FS-pavimenti': {
    id: 'FS-pavimenti',
    title: 'Pavimenti',
    subtitle: 'Ecommerce System API',
    imgUrl: imgPavimenti,
    area: { name: 'Back-End', color: 'red' },
    date: '2018',
    features: {
      client: 'Pavimenti Store',
      classification: 'Construction Material',
      'developed in': 'Wayu Inc.',
      description: `Electronic commerce to sell construction materials. It has: user
        registration and login, store location, promotions, payment record, physical
        delivery or address of the products, and store contact.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [],
    },
  },
  'FS-evencorp': {
    id: 'FS-evencorp',
    title: 'Evencorp',
    subtitle: 'Corporate Website',
    imgUrl: imgEvencorp,
    area: { name: 'Front-End', color: 'blue' },
    date: '2021',
    features: {
      client: 'Evencorp',
      classification: 'Corporate Events',
      description: `Corporate page to show the products and services, photo gallery and evencorp company information.`,
      technologies: ['Gatsby.js'],
      links: [['Demo', 'https://evencorp.vercel.app/']],
    },
  },
  'FS-giffy': {
    id: 'FS-giffy',
    title: 'Giffy',
    subtitle: 'Website',
    imgUrl: imgGiffy,
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Gifs',
      description: `Training React skills building with a website that lists and searches gifs by name (Educational Purposes).`,
      technologies: ['React.js'],
      links: [
        ['Github', 'https://github.com/andresnavag93/giffy'],
        ['Demo', 'https://giffy-pi.vercel.app/'],
      ],
    },
  },
  'FS-avocado-ecommerce': {
    id: 'FS-avocado-ecommerce',
    title: 'Avocado Ecommerce',
    subtitle: 'Website',
    imgUrl: imgAvocadoEcommerce,
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Ecommerce',
      description: `Web Ecommerce to list avocado products, see product details, add them to the basket, and see surprising facts about avocados (Educational Purposes).`,
      technologies: ['Next.js', 'Semantic-UI'],
      links: [
        ['Github', 'https://github.com/andresnavag93/avocado-ecommerce'],
        ['Demo', 'https://avocado-ecommerce.vercel.app/'],
      ],
    },
  },
  'FS-ceptinel-events': {
    id: 'FS-ceptinel-events',
    title: 'Ceptinel Events',
    subtitle: 'Landing Web',
    imgUrl: imgCeptinel,
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Events List',
      description: `A simple Landing Web to list, search and filter company events (Testing Purposes).`,
      technologies: ['React.js', 'Webpack', 'Redux', 'Material-Table'],
      links: [
        ['Github', 'https://github.com/andresnavag93/ceptinel-events'],
        ['Demo', 'https://andresnavag93.github.io/ceptinel-events/index.html'],
      ],
    },
  },
}
