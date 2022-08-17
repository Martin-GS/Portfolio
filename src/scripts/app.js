import data from "./data.js";

const app = {

  container: function () {
    app.containerDiv = document.createElement('div');
    app.containerDiv.id = 'container';
    app.containerDiv.classList = 'container';
    document.body.appendChild(app.containerDiv);
  },

  phantom: function () {
    const div = document.createElement('div');
    div.id = 'phantom';
    app.containerDiv.appendChild(div);
  },

  header: function () {

    // container
    const headerElement = document.createElement('header');
    app.containerDiv.appendChild(headerElement);

    // brand
    const brandContainer = document.createElement('div');
    brandContainer.id = 'header-brand-container';
    headerElement.appendChild(brandContainer);
    const brand = document.createElement('h1');
    brand.textContent = 'Martin GS';
    brandContainer.appendChild(brand);

    // navbar
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'header-navbar-container';
    headerElement.appendChild(navbarContainer);

    // item : résumé
    const resumeDiv = document.createElement('div');
    resumeDiv.classList = 'header-navbar-item-div';
    navbarContainer.appendChild(resumeDiv);
    // item : résumé ---> add icon transparent
    const resumeIcon = document.createElement('img');
    resumeIcon.id = 'header-navbar-resume-icon';
    resumeIcon.alt = 'Résumé (intro)';
    resumeIcon.src = data.icons.clean;
    // item : résumé ---> add link
    const resumeLink = document.createElement('a');
    resumeLink.href = '#intro';
    resumeLink.appendChild(resumeIcon);
    resumeDiv.appendChild(resumeLink);

    // item : social
    const socialDiv = document.createElement('div');
    socialDiv.classList = 'header-navbar-item-div';
    navbarContainer.appendChild(socialDiv);
    // item : social ---> add icon transparent
    const socialIcon = document.createElement('img');
    socialIcon.id = 'header-navbar-social-icon';
    socialIcon.alt = 'Contactez-moi (réseaux sociaux)';
    socialIcon.src = data.icons.clean;
    // item : social ---> add link
    const socialLink = document.createElement('a');
    socialLink.href = '#social';
    socialLink.appendChild(socialIcon);
    socialDiv.appendChild(socialLink);

    // item : projects
    const projectsDiv = document.createElement('div');
    projectsDiv.classList = 'header-navbar-item-div';
    navbarContainer.appendChild(projectsDiv);
    // item : projects ---> add icon transparent
    const projectsIcon = document.createElement('img');
    projectsIcon.id = 'header-navbar-projects-icon';
    projectsIcon.alt = 'Mes projets personnels (et leurs liens)';
    projectsIcon.src = data.icons.clean;
    // item : projects ---> add link
    const projectsLink = document.createElement('a');
    projectsLink.href = '#projects';
    projectsLink.appendChild(projectsIcon);
    projectsDiv.appendChild(projectsLink);

  },

  main: function () {
    app.mainElement = document.createElement('main');
    app.containerDiv.appendChild(app.mainElement);
  },

  footer: function () {
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

    // h2 : name: "Martin GS",
    const nameH2 = document.createElement('h2');
    nameH2.id = "intro-name";
    nameH2.classList = "intro-name";
    const nameData = data.intro.name;
    nameH2.innerHTML = nameData;
    introDiv.appendChild(nameH2);

    // span : position
    const positionSpan = document.createElement('h3');
    positionSpan.id = "intro-position";
    positionSpan.classList = "intro-position";
    const positionData = data.intro.position;
    positionSpan.innerHTML = positionData;
    introDiv.appendChild(positionSpan);

    // span : specialization
    const speSpan = document.createElement('h4');
    speSpan.id = "intro-spe";
    speSpan.classList = "intro-spe";
    const speData = data.intro.specialization;
    speSpan.innerHTML = speData;
    introDiv.appendChild(speSpan);

    // location icon
    const locationIcon = document.createElement('img');
    locationIcon.id = "intro-location-icon";
    locationIcon.src = data.icons.location;
    introDiv.appendChild(locationIcon);

    // location span
    const locationSpan = document.createElement('span');
    locationSpan.id = "intro-location-span";
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
    const socialTitle = document.createElement('h4');
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
      socialDiv.classList = 'social-links-card';
      // image
      const socialLogo = document.createElement('img');
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
   *  "projects" : cards-presentation of projects and links
  */
  projects: function () {

    // container
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    projectsDiv.id = 'projects';
    app.mainElement.appendChild(projectsDiv);

    // title
    const projectsTitle = document.createElement('h4');
    projectsTitle.textContent = "Projets personnels";
    projectsDiv.appendChild(projectsTitle);

    // description
    const projectsDescription = document.createElement('p');
    projectsDescription.textContent = "Voici une liste (non exhaustive) de mes projets personnels, leurs descriptions et leurs liens respectifs";
    projectsDiv.appendChild(projectsDescription);

    // cards
    const projectsData = data.projects;
    projectsData.forEach(item => {
      // card-div
      const cardDiv = document.createElement('div');
      cardDiv.classList = 'projects-card';
      projectsDiv.appendChild(cardDiv);
      // logo
      const cardLogo = document.createElement('img');
      cardLogo.classList = 'projects-card-logo';
      cardLogo.src = item.image;
      cardLogo.alt = `Logo ${item.title}`;
      cardDiv.appendChild(cardLogo);
      // title
      const cardTitle = document.createElement('h5');
      cardTitle.classList = 'projects-card-title';
      cardTitle.textContent = item.title;
      cardDiv.appendChild(cardTitle);
      // description
      const cardDescription = document.createElement('p');
      cardDescription.classList = 'projects-card-description';
      cardDescription.innerHTML = `<strong>Description</strong> :<br /> <q> ${item.description} </q>`;
      cardDiv.appendChild(cardDescription);
      // technos
      const cardTechnos = document.createElement('p');
      cardTechnos.classList = 'projects-card-description';
      cardTechnos.innerHTML = `<strong>Technos</strong> :<br /> ${item.technos}`;
      cardDiv.appendChild(cardTechnos);
      // link to website
      const linkWebsite = document.createElement('a');
      linkWebsite.classList = 'projects-card-linkwebsite--anchor';
      linkWebsite.href = item.url_website;
      linkWebsite.target = "_blank";
      linkWebsite.rel = "noopener noreferrer";
      const linkWebsiteImage = document.createElement('img');
      linkWebsiteImage.classList = 'projects-card-linkwebsite--image';
      linkWebsiteImage.src = item.externallink_icon;
      linkWebsiteImage.alt = `Icône et lien vers le site ${item.title}`;
      linkWebsite.appendChild(linkWebsiteImage);
      cardDiv.appendChild(linkWebsite);
      // link to repository
      const linkRepository = document.createElement('a');
      linkRepository.classList = 'projects-card-linkrepository--anchor';
      linkRepository.href = item.url_repository;
      linkRepository.target = "_blank";
      linkRepository.rel = "noopener noreferrer";
      const linkRepositoryImage = document.createElement('img');
      linkRepositoryImage.classList = 'projects-card-linkrepository--image';
      linkRepositoryImage.src = item.github_icon;
      linkRepositoryImage.alt = `Icône et lien vers le répertoire GitHub du projet ${item.title}`;
      linkRepository.appendChild(linkRepositoryImage);
      cardDiv.appendChild(linkRepository);
    });

  },

  /**
   *  Back-to-top button
  */
  backtotop: function () {

    const backtotopContainer = document.createElement('div');
    backtotopContainer.id = 'backtotopContainer';
    const button = document.createElement('button');
    button.id = 'backtotop-link';
    // Option 1 : "add event linstener"
    button.addEventListener("click", backToTop);
    // Option 2 : "on click fonction"
    // button.onclick = function () {
    //   document.body.scrollTop = 0;
    //   document.documentElement.scrollTop = 0;
    // };
    const image = document.createElement('img');
    image.id = 'backtotop-image';
    image.src = data.icons.clean;
    image.alt = 'Revenir en haut de la page';
    button.appendChild(image);
    backtotopContainer.appendChild(button);
    app.containerDiv.appendChild(backtotopContainer);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    // window.onscroll = function () {
    //   showButton();
    // };

    // function showButton() {
    //   if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    //     backtotopContainer.style.display = "block";
    //   } else {
    //     backtotopContainer.style.display = "none";
    //   }
    // }

  },

  init: function () {
    app.container();
    app.phantom();
    app.header();
    app.main();
    app.footer();
    app.intro();
    app.social();
    app.projects();
    app.backtotop();
  }

};

document.addEventListener('DOMContentLoaded', app.init);