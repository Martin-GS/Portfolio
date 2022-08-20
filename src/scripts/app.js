import data from "./data.js";

const app = {

  container: function () {
    app.containerDiv = document.createElement('div');
    app.containerDiv.id = 'container';
    document.body.appendChild(app.containerDiv);
  },

  phantom: function () {
    const div = document.createElement('div');
    div.id = 'top';
    app.containerDiv.appendChild(div);
  },

  header: function () {
    // container
    const headerElement = document.createElement('header');
    app.containerDiv.appendChild(headerElement);
    // brand
    const brandContainer = document.createElement('div');
    headerElement.appendChild(brandContainer);
    const brand = document.createElement('h1');
    brand.textContent = 'Martin GS';
    brandContainer.appendChild(brand);
    // navbar
    const navbarContainer = document.createElement('div');
    navbarContainer.classList = 'header-navbar-container';
    headerElement.appendChild(navbarContainer);
    // item : résumé
    const resumeDiv = document.createElement('div');
    resumeDiv.classList = 'header-navbar-item-div';
    navbarContainer.appendChild(resumeDiv);
    // item : résumé ---> add icon transparent
    const resumeIcon = document.createElement('img');
    resumeIcon.classList = 'header-navbar-resume-icon';
    resumeIcon.alt = 'Résumé (à propos)';
    resumeIcon.title = 'À propos';
    resumeIcon.src = data.icons.clean;
    // item : résumé ---> add link
    const resumeLink = document.createElement('a');
    resumeLink.href = '#top';
    resumeLink.appendChild(resumeIcon);
    resumeDiv.appendChild(resumeLink);
    // item : social
    const socialDiv = document.createElement('div');
    socialDiv.classList = 'header-navbar-item-div';
    navbarContainer.appendChild(socialDiv);
    // item : social ---> add icon transparent
    const socialIcon = document.createElement('img');
    socialIcon.classList = 'header-navbar-social-icon';
    socialIcon.alt = 'Contactez-moi (réseaux sociaux)';
    socialIcon.title = 'Réseaux sociaux';
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
    projectsIcon.classList = 'header-navbar-projects-icon';
    projectsIcon.alt = 'Mes projets personnels (et leurs liens)';
    projectsIcon.title = 'Projets';
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
    // container
    const footerElement = document.createElement('footer');
    // image
    const vanillaJsImage = document.createElement('img');
    vanillaJsImage.classList = 'footer-image';
    vanillaJsImage.src = data.icons.vanillajs;
    footerElement.appendChild(vanillaJsImage);
    // text
    const thisYear = new Date().getFullYear();
    const textSpan = document.createElement('span');
    textSpan.textContent = ` • Martin GS • 2020-${thisYear}`;
    footerElement.appendChild(textSpan);
    app.containerDiv.appendChild(footerElement);
  },

  /**
   * "résumé" : resume and portrait 
  */
  about: function () {
    // container
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about';
    aboutContainer.classList = 'about';
    app.mainElement.appendChild(aboutContainer);
    // about-labels : titles AND portrait
    const labelsDiv = document.createElement('div');
    labelsDiv.classList = "about-labels";
    aboutContainer.appendChild(labelsDiv);
    // portrait
    const portraitDiv = document.createElement('div');
    portraitDiv.classList = 'about-labels-portrait';
    labelsDiv.appendChild(portraitDiv)
    const portraitImage = document.createElement('img');
    portraitImage.src = data.about.portrait;
    portraitImage.alt = 'Portrait Martin GS';
    portraitDiv.appendChild(portraitImage);
    labelsDiv.appendChild(portraitDiv);
    // (sub)titles
    const titlesDiv = document.createElement('div');
    titlesDiv.classList = "about-labels-titles";
    labelsDiv.appendChild(titlesDiv);
    // name
    const name = document.createElement('h2');
    const nameData = data.about.name;
    name.innerHTML = nameData;
    titlesDiv.appendChild(name);
    // position
    const positionSpan = document.createElement('h3');
    const positionData = data.about.position;
    positionSpan.innerHTML = positionData;
    titlesDiv.appendChild(positionSpan);
    // specialization
    const speSpan = document.createElement('h4');
    const speData = data.about.specialization;
    speSpan.innerHTML = speData;
    titlesDiv.appendChild(speSpan);
    // location container
    const locationContainer = document.createElement('div');
    locationContainer.id = "about-location";
    // location icon
    const locationIcon = document.createElement('img');
    locationIcon.id = "about-location-icon";
    locationIcon.src = data.icons.location;
    // location span
    const locationSpan = document.createElement('span');
    const locationData = data.about.location;
    locationSpan.innerHTML = locationData;
    // location link
    const locationLink = document.createElement('a');
    locationLink.href = 'https://www.qwant.com/maps/place/admin:fr:83069@Hy%C3%A8res_83400#map=10.22/43.0946198/6.2955735';
    locationLink.target = "_blank";
    locationLink.rel = "noopener noreferrer";
    locationLink.appendChild(locationIcon);
    locationLink.appendChild(locationSpan);
    locationContainer.appendChild(locationLink);
    titlesDiv.appendChild(locationContainer);
    // about-resume
    const resumeDiv = document.createElement('div');
    resumeDiv.classList = "about-resume";
    resumeDiv.innerHTML = data.about.resume;
    aboutContainer.appendChild(resumeDiv);
  },

  /**
   * "social": social network links
  */
  social: function () {

    // container
    const socialContainer = document.createElement('div');
    socialContainer.id = 'social';
    socialContainer.classList = 'social';
    app.mainElement.appendChild(socialContainer);
    // description
    const description = document.createElement('p');
    description.classList = 'social-description';
    description.textContent = data.social.text;
    socialContainer.appendChild(description);
    // title
    const socialTitle = document.createElement('h5');
    socialTitle.textContent = "Parlons-en !";
    socialContainer.appendChild(socialTitle);
    // container links
    const cardsContainer = document.createElement('div');
    cardsContainer.classList = 'social-cards';
    // cards : social networks loop
    const socialData = data.social.socialnetworks;
    // loop data
    socialData.forEach(item => {
      // container
      const card = document.createElement('div');
      card.classList = 'social-cards--card';
      cardsContainer.appendChild(card);
      // image link
      const imageLink = document.createElement('a');
      imageLink.href = item.url;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      card.appendChild(imageLink);
      // image logo
      const image = document.createElement('img');
      image.classList = 'social-cards--card-image';
      image.id = `social-cards--card-image--${item.title}`;
      image.src = data.icons.clean;
      image.alt = `Bouton ${item.title}`;
      image.title = `${item.title}`;
      imageLink.appendChild(image);
      // title link
      const titleLink = document.createElement('a');
      titleLink.href = item.url;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
      card.appendChild(titleLink);
      // title hashtag
      const title = document.createElement('h6');
      title.textContent = item.hashtagtitle;
      titleLink.appendChild(title);
      // hashtags
      const hashtagsSpan = document.createElement('p');
      hashtagsSpan.classList = 'social-cards--card-hashtags';
      hashtagsSpan.innerHTML = item.hashtags;
      card.appendChild(hashtagsSpan);
    });
    // append child
    socialContainer.appendChild(cardsContainer);
  },

  /**
   *  "projects" : cards-presentation of projects and links
  */
  projects: function () {
    // container
    const projectsContainer = document.createElement('div');
    projectsContainer.id = 'projects';
    projectsContainer.classList = 'projects';
    app.mainElement.appendChild(projectsContainer);
    // title
    const projectsTitle = document.createElement('h5');
    projectsTitle.textContent = "Projets personnels";
    projectsContainer.appendChild(projectsTitle);
    // description
    const description = document.createElement('p');
    description.classList = 'projects-description';
    description.textContent = "Voici une liste (non exhaustive) de mes projets personnels, leurs description, les liens ves les sites respectifs et leurs dépôts GitHub.";
    projectsContainer.appendChild(description);
    // cards container
    const cardsContainer = document.createElement('div');
    cardsContainer.classList = 'projects-cards';
    projectsContainer.appendChild(cardsContainer);
    // loop
    const projectsData = data.projects;
    projectsData.forEach(item => {
      // card-div
      const card = document.createElement('div');
      card.classList = 'projects-cards--card';
      card.id = `projects-cards--card-${item.title}`;
      cardsContainer.appendChild(card);
      // preview
      const preview = document.createElement('img');
      preview.classList = 'projects-cards--card-preview';
      preview.src = item.preview;
      preview.alt = `Capture d'écran ${item.title}`;
      preview.title = `Capture d'écran ${item.title}`;
      card.appendChild(preview);
      // logo
      const logo = document.createElement('img');
      logo.classList = 'projects-cards--card-logo';
      logo.src = item.logo;
      logo.alt = `Logo ${item.title}`;
      logo.title = item.title;
      card.appendChild(logo);
      // title link
      const linkTitle = document.createElement('a');
      linkTitle.classList = 'projects-cards--card-anchor';
      linkTitle.href = item.url_website;
      linkTitle.target = "_blank";
      linkTitle.rel = "noopener noreferrer";
      card.appendChild(linkTitle);
      // title text
      const title = document.createElement('h6');
      title.classList = 'projects-cards--card-title';
      title.textContent = item.title;
      linkTitle.appendChild(title);
      // description
      const description = document.createElement('p');
      description.innerHTML = item.description;
      card.appendChild(description);
      // technos
      const technos = document.createElement('p');
      technos.innerHTML = item.technos;
      card.appendChild(technos);
      // status
      const status = document.createElement('p');
      status.innerHTML = item.status;
      card.appendChild(status);
      // liens (title)
      const linksTitle = document.createElement('p');
      linksTitle.innerHTML = "<strong>Liens</strong> :";
      card.appendChild(linksTitle);
      // links container
      const linksContainer = document.createElement('div');
      linksContainer.classList = 'projects-cards--card-links';
      card.appendChild(linksContainer);

      // link to website
      // link to website : anchor
      const linkWebsite = document.createElement('a');
      linkWebsite.classList = 'projects-cards--card-links--linkwebsite--anchor';
      linkWebsite.href = item.url_website;
      linkWebsite.target = "_blank";
      linkWebsite.rel = "noopener noreferrer";
      linksContainer.appendChild(linkWebsite);
      // link to website : image
      const linkWebsiteImage = document.createElement('img');
      linkWebsiteImage.classList = 'projects-cards--card-links--linkwebsite--image';
      linkWebsiteImage.src = data.icons.clean;
      linkWebsiteImage.alt = `Lien vers le site ${item.title}`;
      linkWebsite.appendChild(linkWebsiteImage);

      // link to repository : anchor
      const linkRepository = document.createElement('a');
      linkRepository.classList = 'projects-cards--card-links--linkrepository--anchor';
      linkRepository.href = item.url_repository;
      linkRepository.target = "_blank";
      linkRepository.rel = "noopener noreferrer";
      linksContainer.appendChild(linkRepository);
      // link to repository : image
      const linkRepositoryImage = document.createElement('img');
      linkRepositoryImage.classList = 'projects-cards--card-links--linkrepository--image';
      linkRepositoryImage.src = data.icons.clean;
      linkRepositoryImage.alt = `Icône et lien vers le répertoire GitHub du projet ${item.title} `;
      linkRepository.appendChild(linkRepositoryImage);
    });
  },

  /**
   *  Back-to-top button
  */
  backtotop: function () {
    const backtotopContainer = document.createElement('div');
    backtotopContainer.classList = 'backtotop-container';
    app.containerDiv.appendChild(backtotopContainer);
    const link = document.createElement('a');
    link.href = '#top';
    backtotopContainer.appendChild(link);
    const image = document.createElement('img');
    image.classList = 'backtotop-image';
    image.src = data.icons.clean;
    image.alt = 'Revenir en haut de la page';
    image.title = 'Revenir en haut de la page';
    link.appendChild(image);
  },

  init: function () {
    app.container();
    app.phantom();
    app.header();
    app.main();
    app.footer();
    app.about();
    app.social();
    app.projects();
    app.backtotop();
  }

};

document.addEventListener('DOMContentLoaded', app.init);