// ----------  Datas ---------- 

const data = {
  intro: {
    title: "Martin GS",
    subtitle: "Développeur FullStack JavaScript spécialisé Front-End (React)",
    resume: "<p>Issu d'une école des <strong>Beaux-Arts</strong> et d'une formation en développement web et mobile (<strong>FullStack JavaScript</strong>), je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies.</p><p>Alliant conception et technicité, j'ai découvert dans le développement <strong>Front-End</strong> une forme d'<i>artisanat</i> où, à partir d'une feuille blanche (ou plutôt un fichier vide), on peut créer une application <i>from scratch</i>.</p><p>J'ai suivi une spécialisation React qui m'a permis de découvrir également des frameworks comme Bootstrap, Bulma et Semantic-UI, le préprocesseur Sass et la syntaxe SCSS, etc.</p><p>En outre, ayant suivi une formation en développement web FullStack, et ayant participé à un projet en tant que Product Owner, j'ai la chance de connaître (et donc de comprendre) le développement <strong>Back-End</strong> (Node, Express, PostgreSQL, SQL, API, bases de données, etc).</p><p>Aujourd'hui je continue à apprendre, chaque jour, et cela me passionne. J'essaie de me tenir informé des nouvelles technologies, mais aussi acquérir de nouvelles compétences.</p>",
    portrait: "./assets/images/martings-portrait.png"
  },
  social: {
    text: "#Code #Développement #Web #FrontEnd #BackEnd #FullStack #JavaScript #React #Node #Tech #Travel #Sport",
    socialnetworks: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/martings",
        image: "./assets/images/social-linkedin.png"
      },
      {
        title: "Twitter",
        url: "https://twitter.com/__martin_gs__",
        image: "./assets/images/social-twitter.png"
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/__martin.gs__",
        image: "./assets/images/social-instagram.png"
      }
    ]
  },
  repositories: {
    url: "https://github.com/Martin-GS",
    image: "./assets/images/repositories-github.svg"
  },
  projects: [
    {
      title: "Portfolio",
      url_website: "https://martin.gs/",
      url_repository: "https://github.com/Martin-GS/Portfolio",
      text: "Mon portfolio, développeur web spécialisé Front-End",
      image: "./assets/images/projects-portfolio.svg"
    },
    {
      title: "ToDo.js",
      url_website: "https://todo.martin.gs",
      url_repository: "https://github.com/Martin-GS/ToDo.js",
      text: "ToDo-list codée en vanilla JavaScript.",
      image: "./assets/images/projects-todojs.svg"
    },
    {
      title: "WishList",
      url_website: "https://wishlist.martin.gs",
      url_repository: "https://github.com/Martin-GS/WishList",
      text: "Application web permettant de créer des listes d’articles en important les images depuis les sites marchands.",
      image: "./assets/images/projects-wishlist.svg"
    },
    {
      title: "inicio",
      url_website: "https://inicio.martin.gs",
      url_repository: "",
      text: "Page d'accueil personnalisable pour navigateur web.",
      image: "./assets/images/projects-inicio.svg"
    },
    {
      title: "DevStack",
      url_website: "https://devstack.martin.gs",
      url_repository: "https://github.com/Martin-GS/DevStack",
      text: "Mon carnet de notes de développement web et mobile.",
      image: "./assets/images/projects-devstack.svg"
    }
  ]
};

// ---------- App ---------- 

const app = {

  /**
   * Container of the page 
  */
  container: function () {
    // container
    app.containerElement = document.createElement('div');
    app.containerElement.id = 'container';
    app.containerElement.classList = 'container';
    document.body.appendChild(app.containerElement);
  },

  /**
   * Header of the page 
  */
  header: function () {
    // container
    const headerElement = document.createElement('header');
    headerElement.id = "header";
    headerElement.classList = "header";
    headerElement.textContent = "headerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    app.containerElement.appendChild(headerElement);
  },

  /**
   * Main section of the page 
  */
  main: function () {
    // container
    app.mainElement = document.createElement('main');
    app.mainElement.id = "main";
    app.mainElement.classList = "main";
    app.containerElement.appendChild(app.mainElement);
  },

  /**
   * Footer of the page 
  */
  footer: function () {
    // container
    const footerElement = document.createElement('footer');
    footerElement.id = "footer";
    footerElement.classList = "footer";
    footerElement.textContent = "footerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr";
    app.containerElement.appendChild(footerElement);
  },

  init: function () {
    app.container();
    app.header();
    app.main();
    app.footer();
  }

};

document.addEventListener('DOMContentLoaded', app.init);