let data = [
  {
    intro: [
      resume = "<p>Issu d'une école des Beaux-Arts et d'une formation en Développement Web et Web Mobile FullStack JavaScript, je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies, et tout particulièrement la conception de sites et d'applications, qui allie technicité, conception et intégration.",
      portrait = "./assets/images/martings-portrait.png"
    ]
  },
  {
    social: [
      text = "#Code #Développement #Web #FrontEnd #BackEnd #FullStack #JavaScript #React #Node #Tech #Travel #Sport",
      socialnetworks = [
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
        },
      ]
    ]
  },
  {
    repositories: [
      url = "https://github.com/Martin-GS",
      image = "./assets/images/repositories-github.svg"
    ]
  },
  {
    projects: [
      martings = [
        title = "Portfolio",
        url_website = "https://martin.gs/",
        url_repository = "https://github.com/Martin-GS/Portfolio",
        text = "Mon portfolio, développeur web spécialisé Front-End",
        image = "./assets/images/projects-portfolio.svg"
      ],
      todojs = [
        title = "ToDo.js",
        url_website = "https://todo.martin.gs",
        url_repository = "https://github.com/Martin-GS/ToDo.js",
        text = "ToDo-list codée en vanilla JavaScript.",
        image = "./assets/images/projects-todojs.svg"
      ],
      wishlist = [
        title = "WishList",
        url_website = "https://wishlist.martin.gs",
        url_repository = "https://github.com/Martin-GS/WishList",
        text = "Application web permettant de créer des listes d’articles en important les images depuis les sites marchands.",
        image = "./assets/images/projects-wishlist.svg"
      ],
      inicio = [
        title = "inicio",
        url_website = "https://inicio.martin.gs",
        url_repository = "",
        text = "Page d'accueil personnalisable pour navigateur web.",
        image = "./assets/images/projects-inicio.svg"
      ],
      devstack = [
        title = "DevStack",
        url_website = "https://devstack.martin.gs",
        url_repository = "https://github.com/Martin-GS/DevStack",
        text = "Mon carnet de notes de développement web et mobile.",
        image = "./assets/images/projects-devstack.svg"
      ]
    ]
  },
]

var app = {

  /**
   * "structure" sets up the architecture of the page (its skeleton) : header + main + footer 
  */
  structure: function () {
    // container
    app.containerElement = document.createElement('div');
    app.containerElement.id = 'container';
    // header
    app.headerElement = document.createElement('header');
    // main
    app.mainElement = document.createElement('main');
    // footer
    app.footerElement = document.createElement('footer');
    app.footerElement.textContent = "footer";
    // append-childs
    document.body.appendChild(app.containerElement);
    app.containerElement.appendChild(app.headerElement);
    app.containerElement.appendChild(app.mainElement);
    app.containerElement.appendChild(app.footerElement);
  },

  header: function () {
    // container
    app.headerElement.textContent = "header";
  },

  /**
   * "intro" sets up the résumé and a portrait 
  */
  intro: function () {
    // container
    const div = document.createElement('div');
    div.classList.add('intro');
    div.id = 'intro';
    // résumé
    const resume = document.createElement('p');
    const data_resume = data[0].intro[0];
    resume.innerHTML = data_resume;
    // portrait
    const portrait_image = document.createElement('img');
    portrait_image.id = 'portrait';
    portrait_image.src = './assets/images/martings-portrait.jpg';
    portrait_image.alt = data[0].intro[1];
    // append-childs
    div.appendChild(resume);
    div.appendChild(portrait_image);
    app.mainElement.appendChild(div);
  },

  /**
   * "social" sets up the social network links
  */
  social: function () {
    // container
    const div_social = document.createElement('div');
    div_social.classList.add('social');
    div_social.id = 'social';
    div_social.textContent = "Réseaux sociaux";
    // hashtags
    const hashtags = document.createElement('p');
    hashtags.id = 'social-hashtags';
    hashtags.textContent = data[1].social[0];
    div_social.appendChild(hashtags);
    // Image-links
    const social_links = document.createElement('div');
    social_links.id = 'social-links';
    const social_elements = data[1].social[1];
    social_elements.forEach(item => {
      // container
      const div_social_logo = document.createElement('div');
      div_social_logo.classList = 'social-logo';
      // link
      const link_element = document.createElement('a');
      link_element.href = item.url;
      link_element.target = "_blank";
      link_element.rel = "noopener noreferrer";
      // image
      const image_element = document.createElement('img');
      image_element.id = `social-logo-${item.title}`;
      image_element.classList = 'social-logo-image';
      image_element.src = item.image;
      image_element.alt = `Lien ${item.title}`;
      // append-childs
      link_element.appendChild(image_element);
      div_social_logo.appendChild(link_element);
      div_social.appendChild(div_social_logo);
    });
    // append-childs
    app.mainElement.appendChild(div_social);
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
    // append-childs
    app.mainElement.appendChild(div);
  },

  init: function () {
    app.structure();
    app.header();
    app.intro();
    app.social();
    app.projects();
  }

};

document.addEventListener('DOMContentLoaded', app.init);