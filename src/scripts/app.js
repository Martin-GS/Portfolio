let data = [
  {
    intro: [
      resume = "Issu d'une école des Beaux-Arts et d'une formation en Développement Web (FullStack JavaScript, avec une spécialisation Front-End), je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies ; ce qui m'a amené à me spécialiser dans le développement web et mobile, qui allie technicité, conception et intégration.",
      portrait = "../images/martings-portrait.png"
    ]
  },
  {
    social: [
      linkedin = [
        title = "LilnkedIn",
        url = "https://www.linkedin.com/in/martings",
        image = "../images/social-linkedin.png"
      ],
      twitter = [
        title = "Twitter",
        url = "https://twitter.com/__martin_gs__",
        image = "../images/social-twitter.png"
      ],
      instagram = [
        title = "Instagram",
        url = "https://www.instagram.com/__martin.gs__",
        image = "../images/social-instagram.png"
      ]
    ]
  },
  {
    repositories: [
      url = "https://github.com/Martin-GS",
      image = "../images/repositories-github.svg"
    ]
  },
  {
    projects: [
      martings = [
        title = "Portfolio",
        url_website = "https://martin.gs/",
        url_repository = "https://github.com/Martin-GS/Portfolio",
        text = "Mon portfolio, développeur web spécialisé Front-End",
        image = "../images/projects-portfolio.svg"
      ],
      todojs = [
        title = "ToDo.js",
        url_website = "https://todo.martin.gs",
        url_repository = "https://github.com/Martin-GS/ToDo.js",
        text = "ToDo-list codée en vanilla JavaScript.",
        image = "../images/projects-todojs.svg"
      ],
      wishlist = [
        title = "WishList",
        url_website = "https://wishlist.martin.gs",
        url_repository = "https://github.com/Martin-GS/WishList",
        text = "Application web permettant de créer des listes d’articles en important les images depuis les sites marchands.",
        image = "../images/projects-wishlist.svg"
      ],
      inicio = [
        title = "inicio",
        url_website = "https://inicio.martin.gs",
        url_repository = "",
        text = "Page d'accueil personnalisable pour navigateur web.",
        image = "../images/projects-inicio.svg"
      ],
      devstack = [
        title = "DevStack",
        url_website = "https://devstack.martin.gs",
        url_repository = "https://github.com/Martin-GS/DevStack",
        text = "Mon carnet de notes de développement web et mobile.",
        image = "../images/projects-devstack.svg"
      ]
    ]
  },
]

var app = {

  /**
   * "structure" sets up the architecture of the page (its skeleton) : header + main + footer 
  */
  structure: function () {
    app.div = document.createElement('div');
    app.div.id = 'container';
    app.header = document.createElement('header');
    app.header.textContent = "header";
    app.main = document.createElement('main');
    app.main.textContent = "main";
    app.footer = document.createElement('footer');
    app.footer.textContent = "footer";
    document.body.appendChild(app.div);
    app.div.appendChild(app.header);
    app.div.appendChild(app.main);
    app.div.appendChild(app.footer);
  },

  init: function () {
    app.structure();
  }

};

document.addEventListener('DOMContentLoaded', app.init);