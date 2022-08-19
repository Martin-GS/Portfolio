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
    // paragraph
    const textParagraph = document.createElement('p');
    textParagraph.classList = 'social-paragraph';
    textParagraph.textContent = data.social.text;
    socialContainer.appendChild(textParagraph);
    // title
    const socialTitle = document.createElement('h5');
    socialTitle.textContent = "Parlons-en !";
    socialContainer.appendChild(socialTitle);
    // container links
    const cardsContainer = document.createElement('div');
    cardsContainer.classList = 'social-links';
    // cards : social networks loop
    const socialData = data.social.socialnetworks;
    // loop data
    socialData.forEach(item => {
      // container
      const card = document.createElement('div');
      card.classList = 'social-links-card';
      cardsContainer.appendChild(card);

      // image link
      const imageLink = document.createElement('a');
      imageLink.href = item.url;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      card.appendChild(imageLink);
      // image logo
      const image = document.createElement('img');
      image.classList = 'social-links-card-image';
      image.id = `social-links-card-image--${item.title}`;
      image.src = data.icons.clean;
      image.alt = `Lien ${item.title}`;
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
      hashtagsSpan.classList = 'social-links-card-hashtags';
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
    const projectsDiv = document.createElement('div');
    projectsDiv.id = 'projects';
    projectsDiv.classList = 'projects';
    app.mainElement.appendChild(projectsDiv);
    // // title
    // const projectsTitle = document.createElement('h5');
    // projectsTitle.textContent = "Projets personnels";
    // projectsDiv.appendChild(projectsTitle);
    // // description
    // const projectsDescription = document.createElement('p');
    // projectsDescription.textContent = "Voici une liste (non exhaustive) de mes projets personnels, leurs descriptions et leurs liens respectifs";
    // projectsDiv.appendChild(projectsDescription);
    // // cards
    // const projectsData = data.projects;
    // projectsData.forEach(item => {
    //   // card-div
    //   const cardDiv = document.createElement('div');
    //   cardDiv.classList = 'projects-card';
    //   projectsDiv.appendChild(cardDiv);
    //   // logo
    //   const cardLogo = document.createElement('img');
    //   cardLogo.classList = 'projects-card-logo';
    //   cardLogo.src = item.image;
    //   cardLogo.alt = `Logo ${item.title}`;
    //   cardDiv.appendChild(cardLogo);
    //   // title
    //   const cardTitle = document.createElement('h6');
    //   cardTitle.classList = 'projects-card-title';
    //   cardTitle.textContent = item.title;
    //   cardDiv.appendChild(cardTitle);
    //   // description
    //   const cardDescription = document.createElement('p');
    //   cardDescription.classList = 'projects-card-description';
    //   cardDescription.innerHTML = `<strong>Description</strong> :<br /> <q> ${item.description} </q>`;
    //   cardDiv.appendChild(cardDescription);
    //   // technos
    //   const cardTechnos = document.createElement('p');
    //   cardTechnos.classList = 'projects-card-description';
    //   cardTechnos.innerHTML = `<strong>Technos</strong> :<br /> ${item.technos}`;
    //   cardDiv.appendChild(cardTechnos);
    //   // link to website
    //   const linkWebsite = document.createElement('a');
    //   linkWebsite.classList = 'projects-card-linkwebsite--anchor';
    //   linkWebsite.href = item.url_website;
    //   linkWebsite.target = "_blank";
    //   linkWebsite.rel = "noopener noreferrer";
    //   const linkWebsiteImage = document.createElement('img');
    //   linkWebsiteImage.classList = 'projects-card-linkwebsite--image';
    //   linkWebsiteImage.src = item.externallink_icon;
    //   linkWebsiteImage.alt = `Icône et lien vers le site ${item.title}`;
    //   linkWebsite.appendChild(linkWebsiteImage);
    //   cardDiv.appendChild(linkWebsite);
    //   // link to repository
    //   const linkRepository = document.createElement('a');
    //   linkRepository.classList = 'projects-card-linkrepository--anchor';
    //   linkRepository.href = item.url_repository;
    //   linkRepository.target = "_blank";
    //   linkRepository.rel = "noopener noreferrer";
    //   const linkRepositoryImage = document.createElement('img');
    //   linkRepositoryImage.classList = 'projects-card-linkrepository--image';
    //   linkRepositoryImage.src = item.github_icon;
    //   linkRepositoryImage.alt = `Icône et lien vers le répertoire GitHub du projet ${item.title}`;
    //   linkRepository.appendChild(linkRepositoryImage);
    //   cardDiv.appendChild(linkRepository);
    // });
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