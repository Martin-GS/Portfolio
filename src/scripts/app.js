// ----------  Datas ---------- 

const data = {
  intro: {
    name: "Martin GS",
    position: "Développeur FullStack JavaScript",
    specialization: "Passionné par le Front-End et spécialisé React.js",
    location: "Hyères, Côte d'Azur, France",
    resume: "<p>Issu d'une école des <strong>Beaux-Arts</strong> et d'une formation en développement web et mobile (<strong>FullStack JavaScript</strong>), je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies.</p><p>Alliant conception et technicité, j'ai découvert dans le développement <strong>Front-End</strong> une forme d'<i>artisanat</i> où, à partir d'une feuille blanche (ou plutôt un fichier vide), on peut créer une application <i>from scratch</i>.</p><p>La spécialisation Front-End m'a permis de découvrir, en plus de React et son écosystème, des frameworks comme Bootstrap, Bulma et Semantic-UI, le préprocesseur Sass et la syntaxe SCSS, etc.</p><p>En outre, ayant suivi une formation en développement web FullStack, et ayant participé à un projet en tant que Product Owner, j'ai la chance de connaître (et donc de comprendre) le développement <strong>Back-End</strong> (Node, Express, PostgreSQL, SQL, API, bases de données, etc).</p><p>Aujourd'hui je continue à apprendre, chaque jour, et cela me passionne. J'essaie de me tenir informé des nouvelles technologies, mais aussi acquérir de nouvelles compétences.</p>",
    portrait: "./assets/images/martings-portrait.jpg"
  },
  social: {
    text: "#Code #Développement #Web #FrontEnd #BackEnd #FullStack #JavaScript #React #Node #Tech #Travel #Sport",
    socialnetworks: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/martings",
        image: "./assets/images/social-linkedin.png",
        hashtag: "#pro"
      },
      {
        title: "Twitter",
        url: "https://twitter.com/__martin_gs__",
        image: "./assets/images/social-twitter.png",
        hashtag: "#tech"
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/__martin.gs__",
        image: "./assets/images/social-instagram.png",
        hashtag: "#perso"
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
    app.containerDiv = document.createElement('div');
    app.containerDiv.id = 'container';
    app.containerDiv.classList = 'container';
    document.body.appendChild(app.containerDiv);
  },

  /**
   * Header of the page 
  */
  header: function () {
    // container
    const headerElement = document.createElement('header');
    app.containerDiv.appendChild(headerElement);
  },

  /**
   * Main section of the page 
  */
  main: function () {
    // container
    app.mainElement = document.createElement('main');
    app.containerDiv.appendChild(app.mainElement);
  },

  /**
   * Footer of the page 
  */
  footer: function () {
    // container
    const footerElement = document.createElement('footer');
    const thisYear = new Date().getFullYear();
    footerElement.textContent = `Martin GS • ${thisYear} • Tous droits réservés`;
    app.containerDiv.appendChild(footerElement);
  },

  /**
   * "résumé" : resume and portrait 
  */
  intro: function () {
    // container
    const introDiv = document.createElement('div');
    introDiv.id = 'intro';
    introDiv.classList = 'intro';
    app.mainElement.appendChild(introDiv);

    // h1 : name: "Martin GS",
    const nameH1 = document.createElement('h1');
    nameH1.id = "intro-name";
    nameH1.classList = "intro-name";
    const nameData = data.intro.name;
    nameH1.innerHTML = nameData;
    introDiv.appendChild(nameH1);
    // span : position
    const positionSpan = document.createElement('span');
    positionSpan.id = "intro-position";
    positionSpan.classList = "intro-position";
    const positionData = data.intro.position;
    positionSpan.innerHTML = positionData;
    introDiv.appendChild(positionSpan);
    // span : specialization
    const speSpan = document.createElement('span');
    speSpan.id = "intro-spe";
    speSpan.classList = "intro-spe";
    const speData = data.intro.specialization;
    speSpan.innerHTML = speData;
    introDiv.appendChild(speSpan);
    // span : location
    const locationSpan = document.createElement('span');
    locationSpan.id = "intro-location";
    locationSpan.classList = "intro-location";
    const locationData = data.intro.location;
    locationSpan.innerHTML = locationData;
    introDiv.appendChild(locationSpan);
    // résumé
    const resumeDiv = document.createElement('div');
    resumeDiv.id = "intro-resume";
    resumeDiv.classList = "intro-resume";
    const resumeData = data.intro.resume;
    resumeDiv.innerHTML = resumeData;
    introDiv.appendChild(resumeDiv);
    // portrait
    const portraitImage = document.createElement('img');
    portraitImage.id = 'intro-portrait';
    portraitImage.classList = 'intro-portrait';
    portraitImage.src = data.intro.portrait;
    portraitImage.alt = 'portrait Martin GS';
    introDiv.appendChild(portraitImage);
  },

  /**
   * "social": social network links
  */
  social: function () {
    // container
    const socialDiv = document.createElement('div');
    socialDiv.id = 'social';
    socialDiv.classList = 'social';
    // title
    const socialTitle = document.createElement('h3');
    socialTitle.textContent = "Réseaux sociaux";
    socialDiv.appendChild(socialTitle);
    // hashtags
    const hashtagsParagraph = document.createElement('p');
    hashtagsParagraph.id = 'social-hashtags';
    hashtagsParagraph.textContent = data.social.text;
    socialDiv.appendChild(hashtagsParagraph);
    // Image-links
    const linksDiv = document.createElement('div');
    linksDiv.id = 'social-links';
    linksDiv.classList = 'social-links';
    const socialData = data.social.socialnetworks;
    socialData.forEach(item => {
      // container
      const socialDiv = document.createElement('div');
      socialDiv.id = `social-links-card-${item.title}`;
      socialDiv.classList = 'social-links-card';
      // image
      const socialLogo = document.createElement('img');
      socialLogo.id = `social-links-card-logo-${item.title}`;
      socialLogo.classList = 'social-links-card-logo';
      socialLogo.src = item.image;
      socialLogo.alt = `Lien ${item.title}`;
      // link
      const socialButton = document.createElement('a');
      socialButton.href = item.url;
      socialButton.target = "_blank";
      socialButton.rel = "noopener noreferrer";
      // hashtag
      const hashtagSpan = document.createElement('span');
      hashtagSpan.id = item.title;
      hashtagSpan.className = `social-links-card-hashtag-${item.title}`;
      hashtagSpan.textContent = item.hashtag;
      // append childs
      socialDiv.appendChild(socialButton);
      socialButton.appendChild(socialLogo);
      socialDiv.appendChild(hashtagSpan);
      linksDiv.appendChild(socialDiv);
    });
    // append childs
    socialDiv.appendChild(linksDiv);
    app.mainElement.appendChild(socialDiv);
  },

  /**
   *  "projects" sets up the presentation of the projects and their links
  */
  projects: function () {
    // container
    const div = document.createElement('div');
    div.classList.add('projects');
    div.id = 'projects';
    div.textContent = "Projets";
    // append childs
    app.mainElement.appendChild(div);
  },

  init: function () {
    app.container();
    app.header();
    app.main();
    app.footer();
    app.intro();
    app.social();
    // app.projects();
  }

};

document.addEventListener('DOMContentLoaded', app.init);