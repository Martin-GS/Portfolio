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
  },
  about: {
    name: "Martin GS",
    position: "Développeur FullStack JavaScript",
    specialization: "Spécialisé Front-End • React",
    location: "Hyères, Var (83), France",
    resume: `<p>Issu d'une école des Beaux-Arts et d'une formation en Développement FullStack (React/Node), je suis passionné depuis mon plus jeune âge par l'art et les nouvelles technologies.</p><p>Je me suis spécialisé dans le développement Front-End, métier qui a attiré mon attention de par son aspect artisanal, associant technicité, créativité et design.</p><p>Aujourd'hui je suis à l'écoute de nouvelles opportunités me permettant de travailler sur des projets challengeants et innovants, au sein d'une équipe dynamique et bienveillante.</p>`,
    portrait: "./assets/images/martings-portrait.png"
  },
  social: {
    text: "Envie de parler dév, tech et projets ?",
    socialnetworks: [
      {
        title: "linkedin",
        url: "https://www.linkedin.com/in/martings",
        image: "./assets/images/social-linkedin.svg",
        imagehover: "./assets/images/social-linkedin-hover.svg",
        hashtagtitle: "#social",
        hashtags: "#pro<br /> #job<br /> #CV"
      },
      {
        title: "github",
        url: "https://github.com/Martin-GS",
        image: "./assets/images/social-github.svg",
        imagehover: "./assets/images/social-github-hover.svg",
        hashtagtitle: "#repo",
        hashtags: "#code<br /> #versioning<br /> #projets"
      },
      {
        title: "mail",
        url: "mailto:mail@martin.gs",
        image: "./assets/images/social-mail.svg",
        imagehover: "./assets/images/social-mail-hover.svg",
        hashtagtitle: "#mail",
        hashtags: "#contact<br /> #email<br /> #courriel"
      }
    ]
  },
  projects: [
    {
      title: "WishList",
      logo: "./assets/images/projects-wishlist.svg",
      preview: "./assets/images/projects-wishlist-preview.png",
      description: `<strong>Description :</strong> Développement d'une application permettant de créer des listes d'articles sous forme de liens et affichant les images des sites marchands.<br />Deux mois de travail. Équipe de 2 développeurs Front et 2 Back.<br />Technos : HTML, CSS, JavaScript, React, Sass/SCSS, Bootstrap. API Rest (Node.js).`,
      status: "<strong>Status :</strong> &nbsp; 🟢 &nbsp; v3",
      url_website: "https://wishlist.martin.gs",
      url_repository: "https://github.com/Martin-GS/WishList#readme",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "inicio",
      logo: "./assets/images/projects-inicio.svg",
      preview: "./assets/images/projects-inicio-preview.png",
      description: `<strong>Description :</strong> Page d'accueil responsive et personnalisable permettant d'afficher des liens personnalisables, une barre de recherche, les infos locales et un bloc-notes.<br />Technos : HTML, CSS, Sass/SCSS, JavaScript et React.<br />Créer une API REST conçue et gérée avec Strapi.`,
      status: "<strong>Status :</strong> &nbsp; 🟠 &nbsp; v0.1",
      url_website: "https://inicio.martin.gs",
      url_repository: "https://github.com/Martin-GS/inicio",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "DevStack",
      logo: "./assets/images/projects-devstack.svg",
      preview: "./assets/images/projects-devstack-preview.png",
      description: `<strong>Description :</strong> Mon carnet de notes de développement web et web mobile FullStack.<br />Développé en principe pour un usage personnel afin de trouver mes notes dans un seul et même endroit, il donne un aperçu (non exhaustif) des technos que j'ai étudiées et avec lesquelles je travaille depuis décembre 2020.`,
      status: "<strong>Status :</strong> &nbsp; 🟢 &nbsp; v1",
      url_website: "https://devstack.martin.gs",
      url_repository: "https://github.com/Martin-GS/DevStack",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "ToDo.js",
      logo: "./assets/images/projects-todojs.svg",
      preview: "./assets/images/projects-todojs-preview.png",
      description: `<strong>Description :</strong> Liste de tâches (<i>To-do list</i>) développée en vanilla JavaScript, développée pendant ma formation en dévelopement web et web mobile.<br />Application exclusivement Front-End : les données saisies ne sont pas enregistrées en base de données, et disparaissent donc lorsque l'onglet est fermé ou rafraîchi.`,
      technos: "<strong>Technos :</strong><br /> HTML, CSS, JavaScript",
      status: "<strong>Status :</strong> &nbsp; 🟢 &nbsp; v1",
      url_website: "https://todo.martin.gs",
      url_repository: "https://github.com/Martin-GS/ToDo.js",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
    {
      title: "Portfolio",
      logo: "./assets/images/projects-portfolio.svg",
      preview: "./assets/images/projects-portfolio-preview.png",
      description: `<strong>Description :</strong> Déployé sur <a href="https://martin.gs">martin.gs</a>, ce portfolio est constitué de trois parties : "À propos" (présentation), "Social" (liens LinkedIn, GitHub et courriel), et "Projets" (carrousel exposant mes réalisations avec leurs liens respectifs).<br />C'est le site sur lequel vous vous trouvez en ce moment.`,
      technos: "<strong>Technos :</strong><br /> HTML, CSS, JavaScript",
      status: "<strong>Status :</strong> &nbsp; 🟢 &nbsp; v2",
      url_website: "https://martin.gs/",
      url_repository: "https://github.com/Martin-GS/Portfolio",
      externallink_icon: "./assets/images/projects-link-externallink.svg",
      github_icon: "./assets/images/projects-link-github.svg"
    },
  ]
};

export default data; 