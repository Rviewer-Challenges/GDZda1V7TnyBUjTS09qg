const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7);

const moureDevUser = {
  avatarUri:
    "https://pbs.twimg.com/profile_images/1537498619879768064/WvS78gLg_normal.jpg",
  fullName: "Brais Moure",
  username: "MoureDev",
  isVerified: true
};

const myUser = {
  avatarUri: "https://avatars.githubusercontent.com/u/43476781?v=4",
  fullName: "German Solano",
  username: "GermanSolano12",
  isVerified: false
};
export default [
  {
    id: "programador",
    likes: 789,
    retweets: 524,
    comments: 40,
    text: `FELIZ DÍA DEL PROGRAMADOR Y LA PROGRAMADORA
    
¿Por qué el 13 de Septiembre?
    
👉🏼 Día 256 de este año (2^8)
👉🏼 Mayor potencia de 2 < 365
👉🏼 Valores que se pueden representar con un byte
    
Siéntete orgulloso, ayuda y comparte. Somos una gran comunidad 🙌🏼
    
Feliz #diadelprogramador!`,
    medias: [
      {
        type: "image",
        url: "https://pbs.twimg.com/media/E_JLNkGXIAQqeeF?format=jpg&name=360x360"
      }
    ],
    createdAt: new Date("09/13/2021"),
    deletedAt: null,
    updateAt: null,
    user: moureDevUser
  },
  {
    id: "banda",
    likes: 30,
    retweets: 0,
    comments: 3,
    text: "Ya huele a @ResurrectionESP 🤘🤘🤘",
    medias: [
      {
        type: "image",
        url: "https://pbs.twimg.com/media/FViyDkOWQAA1_Wh?format=jpg&name=small"
      }
    ],
    createdAt: new Date("06/18/2022"),
    deletedAt: null,
    updateAt: null,
    user: moureDevUser
  },
  {
    id: "proyectos",
    likes: 3,
    retweets: 1,
    comments: 2,
    text: "Algunos de los proyectos de mi portfolio 😁 https://germansdev.vercel.app/",
    medias: [
      {
        type: "image",
        url: "https://germansdev.vercel.app/assets/images/space-tourism-website-preview.jpg"
      },
      {
        type: "image",
        url: "https://germansdev.vercel.app/assets/images/facebook-clone-preview.jpg"
      },
      {
        type: "image",
        url: "https://germansdev.vercel.app/assets/images/marvel-searcher-preview.jpg"
      },
      {
        type: "image",
        url: "https://germansdev.vercel.app/assets/images/card-game-preview.jpg"
      }
    ],
    createdAt: new Date("06/16/2022"),
    deletedAt: null,
    updateAt: null,
    user: myUser
  },
  {
    id: "solo gif",
    likes: 2,
    retweets: 3,
    comments: 5,
    text: "",
    medias: [
      {
        type: "gif",
        url: "https://go.rviewer.io/wp-content/uploads/2022/05/elon.gif"
      }
    ],
    createdAt: pastDate,
    deletedAt: null,
    updateAt: null,
    user: myUser
  },
  {
    id: "solo texto",
    likes: 2,
    retweets: 3,
    comments: 5,
    text: `Esto funciona con todo tipo de enlaces. Aquí unos ejemplos:
  
- URLs con protocolos: https://facebook.com
- URLs sin protocolos: www.twitter.com
- Direcciones de correo (hello@example.com)
- Menciones como @tc39 o @rust-lang
- Hashtags #PhotoOfTheDay o #일상`,
    medias: [],
    createdAt: pastDate,
    deletedAt: null,
    updateAt: null,
    user: myUser
  }
];
