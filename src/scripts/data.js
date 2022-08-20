const data = {
  icons: {
    clean: "./assets/images/icon-clean.png",
    resume: "./assets/images/icon-resume.svg",
    resume_hover: "./assets/images/icon-resume-hover.svg",
    social: "./assets/images/icon-social.svg",
    social_hover: "./assets/images/icon-social-hover.svg",
    projects: "./assets/images/icon-projects.svg",
    projects_hover: "./assets/images/icon-projects-hover.svg",
    location: "./assets/images/icon-location.svg",
    backtotop: "./assets/images/icon-backtotop.svg",
    backtotop_hover: "./assets/images/icon-backtotop-hover.svg",
    vanillajs: "./assets/images/icon-vanillajs.png"
  },
  about: {
    name: "Martin GS",
    position: "Développeur FullStack JavaScript",
    specialization: "Passionné par le Front-End et spécialisé React",
    location: "Hyères, Côte d'Azur, France",
    resume: `<p>Issu d'une école des Beaux-Arts et d'une formation en développement web et web mobile (FullStack JavaScript), je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies.</p><p>Je me suis spécialisé en développement Front-End, qui allie à la fois technicité et création. Ce qui m'a attiré dans ce métier c'est son aspect artisanal, où la maîtrise d'un savoir-faire permet de créer une application à partir d'une feuille blanche.</p><p>En outre, ayant suivi une formation en développement FullStack, j'ai eu l'occasion  de travailler sur des projets Back-End, et ainsi découvrir Node, Express, PostgreSQL, SQL, etc.</p>`,
    portrait: "./assets/images/martings-portrait.jpg"
  },
  social: {
    text: "Envie de parler dév, tech et projets ?",
    socialnetworks: [
      {
        title: "linkedin",
        url: "https://www.linkedin.com/in/martings",
        image: "./assets/images/social-linkedin.svg",
        imagehover: "./assets/images/social-linkedin-hover.svg",
        hashtagtitle: "#pro",
        hashtags: "#CV<br /> #job"
      },
      {
        title: "twitter",
        url: "https://twitter.com/__martin_gs__",
        image: "./assets/images/social-twitter.svg",
        imagehover: "./assets/images/social-twitter-hover.svg",
        hashtagtitle: "#tech",
        hashtags: "#code<br /> #dev"
      },
      {
        title: "instagram",
        url: "https://www.instagram.com/__martin.gs__",
        image: "./assets/images/social-instagram.svg",
        imagehover: "./assets/images/social-instagram-hover.svg",
        hashtagtitle: "#perso",
        hashtags: "#photo<br /> #lifeStyle"
      },
      {
        title: "github",
        url: "https://github.com/Martin-GS",
        image: "./assets/images/social-github.svg",
        imagehover: "./assets/images/social-github-hover.svg",
        hashtagtitle: "#repo",
        hashtags: "#projects<br /> #versioning"
      },
      {
        title: "mail",
        url: "mailto:portfolio@martin.gs",
        image: "./assets/images/social-mail.svg",
        imagehover: "./assets/images/social-mail-hover.svg",
        hashtagtitle: "#mail",
        hashtags: "#contact<br /> #courriel"
      }
    ]
  },
  projects: [
    {
      title: "Portfolio",
      image: "./assets/images/projects-portfolio.svg",
      description: "<strong>Description</strong> :<br /> Mon portfolio développé en <i>vanilla JavaScript</i>.",
      technos: "<strong>Technos</strong> :<br /> HTML, CSS, JavaScript",
      status: "<strong>Status</strong> :<br /> v1 finalisée et déployée",
      url_website: "https://martin.gs/",
      url_repository: "https://github.com/Martin-GS/Portfolio",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "ToDo.js",
      image: "./assets/images/projects-todojs.svg",
      description: "<strong>Description</strong> :<br /> <i>To-do-list</i> développé en <i>vanilla JavaScript</i>.",
      technos: "<strong>Technos</strong> :<br /> HTML, CSS, JavaScript",
      status: "<strong>Status</strong> :<br /> v1 finalisée et déployée",
      url_website: "https://todo.martin.gs",
      url_repository: "https://github.com/Martin-GS/ToDo.js",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "WishList",
      image: "./assets/images/projects-wishlist.svg",
      description: "<strong>Description</strong> :<br /> <i>Wish-list</i> permettant d'importer les images depuis les sites marchands.",
      technos: "<strong>Technos</strong> :<br /> HTML, CSS, JavaScript, React, Bootstrap, Sass/SCSS, etc.",
      status: "<strong>Status</strong> :<br /> v3 finalisée et déployée",
      url_website: "https://wishlist.martin.gs",
      url_repository: "https://github.com/Martin-GS/WishList",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "inicio",
      image: "./assets/images/projects-inicio.svg",
      description: "<strong>Description</strong> :<br /> Page d'accueil personnalisable pour navigateur web.",
      technos: "<strong>Technos</strong> :<br /> HTML, CSS, JavaScript, React, Redux, Sass/SCSS, Strapi, etc.",
      status: "<strong>Status</strong> :<br /> en cours de développement",
      url_website: "https://inicio.martin.gs",
      url_repository: "https://github.com/Martin-GS/inicio",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "DevStack",
      image: "./assets/images/projects-devstack.svg",
      description: "<strong>Description</strong> :<br /> Mon carnet de notes de développement web et mobile.",
      technos: "<strong>Technos</strong> :<br /> HTML, CSS, JavaScript",
      status: "<strong>Status</strong> :<br /> v1 finalisée et déployée",
      url_website: "https://devstack.martin.gs",
      url_repository: "https://github.com/Martin-GS/DevStack",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    }
  ],
  technos: {
    html: "./assets/images/logo-html.svg",
    css: "./assets/images/logo-css.svg",
    javascript: "./assets/images/logo-javascript.svg",
    json: "./assets/images/logo-json.svg",
    react: "./assets/images/logo-react.svg",
    reactrouter: "./assets/images/logo-redux.svg",
    reactrouter: "./assets/images/logo-react-router.svg",
    node: "./assets/images/logo-node.svg",
    node: "./assets/images/logo-strapi.svg",
    bootstrap: "./assets/images/logo-bootstrap.svg",
    node: "./assets/images/logo-sass.svg"
  }
};

export default data; 