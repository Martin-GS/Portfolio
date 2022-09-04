import data from "../data/data.js";

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
    // text
    const thisYear = new Date().getFullYear();
    const textSpan = document.createElement('span');
    textSpan.textContent = `Martin GS • 2020-${thisYear} • Tous droits réservés`;
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
    // phantom left div for large screens
    const phantomLeft = document.createElement('div');
    phantomLeft.classList = 'about-phantom';
    aboutContainer.appendChild(phantomLeft);
    // content
    const aboutContent = document.createElement('div');
    aboutContent.classList = 'about-content';
    aboutContainer.appendChild(aboutContent);
    // phantom right div for large screens
    const phantomRight = document.createElement('div');
    phantomRight.classList = 'about-phantom';
    aboutContainer.appendChild(phantomRight);
    // about-labels : titles AND portrait
    const labelsDiv = document.createElement('div');
    labelsDiv.classList = "about-labels";
    aboutContent.appendChild(labelsDiv);
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
    aboutContent.appendChild(resumeDiv);
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

    
    // phantom left div for large screens
    const phantomLeft = document.createElement('div');
    phantomLeft.classList = 'projects-phantom';
    projectsContainer.appendChild(phantomLeft);

    // content
    const projectsContent = document.createElement('div');
    projectsContent.classList = 'projects-content';
    projectsContainer.appendChild(projectsContent);

    // phantom right div for large screens
    const phantomRight = document.createElement('div');
    phantomRight.classList = 'projects-phantom';
    projectsContainer.appendChild(phantomRight);

    // title
    const projectsTitle = document.createElement('h5');
    projectsTitle.textContent = "Projets personnels";
    projectsContent.appendChild(projectsTitle);
    // description
    const description = document.createElement('p');
    description.classList = 'projects-description';
    description.textContent = "Voici une liste (non exhaustive) de mes projets personnels.";
    projectsContent.appendChild(description);
    // cards container = "slideshow-container"
    const cardsContainer = document.createElement('div');
    cardsContainer.classList = 'projects-cards';
    projectsContent.appendChild(cardsContainer);
    // previous and next buttons
    // previous button
    const previousButton = document.createElement('div');
    previousButton.id = 'previousSlide';
    previousButton.textContent = '❮';
    previousButton.addEventListener('click', event => { slidesTotal(-1); });
    cardsContainer.appendChild(previousButton);
    // next button
    const nextButton = document.createElement('div');
    nextButton.id = 'nextSlide';
    nextButton.textContent = '❯';
    nextButton.addEventListener('click', event => { slidesTotal(1); });
    cardsContainer.appendChild(nextButton);
    // loop : projects-cards--card = slide
    const projectsData = data.projects;
    projectsData.forEach(item => {
      // card container "display"
      const cardDisplay = document.createElement('div');
      cardDisplay.classList = 'projects-cards--carddisplay';
      cardsContainer.appendChild(cardDisplay);
      // card container
      const card = document.createElement('div');
      card.classList = 'projects-cards--card';
      cardDisplay.appendChild(card);
      // preview : container
      const previewContainer = document.createElement('div');
      previewContainer.classList = 'projects-cards--card-preview';
      card.appendChild(previewContainer);
      // logo
      const logo = document.createElement('img');
      logo.classList = 'projects-cards--card-preview-logo';
      logo.src = item.logo;
      logo.alt = `Logo ${item.title}`;
      logo.title = item.title;
      previewContainer.appendChild(logo);
      // project title
      const previewProjectTitle = document.createElement('p');
      previewProjectTitle.innerHTML = "<strong>Projet :</strong>";
      previewContainer.appendChild(previewProjectTitle);
      // title link
      const linkTitle = document.createElement('a');
      linkTitle.href = item.url_website;
      linkTitle.target = "_blank";
      linkTitle.rel = "noopener noreferrer";
      previewContainer.appendChild(linkTitle);
      // title text
      const title = document.createElement('h6');
      title.classList = 'projects-cards--card-preview-title';
      title.textContent = item.title;
      linkTitle.appendChild(title);
      // preview screen
      const previewScreenTitle = document.createElement('p');
      previewScreenTitle.classList = 'projects-cards--card-preview-imageTitle';
      previewScreenTitle.innerHTML = "<strong>Capture d'écran :</strong>";
      previewContainer.appendChild(previewScreenTitle);
      const previewImage = document.createElement('img');
      previewImage.classList = 'projects-cards--card-preview-image';
      previewImage.src = item.preview;
      previewImage.alt = `Capture d'écran ${item.title}`;
      previewImage.title = `Capture d'écran ${item.title}`;
      previewContainer.appendChild(previewImage);
      // card content
      const contentContainer = document.createElement('div');
      contentContainer.classList = 'projects-cards--card-content';
      card.appendChild(contentContainer);
      // description
      const description = document.createElement('p');
      description.innerHTML = item.description;
      contentContainer.appendChild(description);
      // technos
      const technos = document.createElement('p');
      technos.innerHTML = item.technos;
      contentContainer.appendChild(technos);
      // status
      const status = document.createElement('p');
      status.innerHTML = item.status;
      contentContainer.appendChild(status);
      // liens (title)
      const linksTitle = document.createElement('p');
      linksTitle.innerHTML = "<strong>Liens :</strong>";
      contentContainer.appendChild(linksTitle);
      // links container
      const linksContainer = document.createElement('div');
      linksContainer.classList = 'projects-cards--card-content-links';
      contentContainer.appendChild(linksContainer);
      // link to website
      // link to website : anchor
      const linkWebsite = document.createElement('a');
      linkWebsite.href = item.url_website;
      linkWebsite.target = "_blank";
      linkWebsite.rel = "noopener noreferrer";
      linksContainer.appendChild(linkWebsite);
      // link to website : image
      const linkWebsiteImage = document.createElement('img');
      linkWebsiteImage.classList = 'projects-cards--card-content-links--linkwebsite--image';
      linkWebsiteImage.src = data.icons.clean;
      linkWebsiteImage.alt = `Lien vers le site ${item.title}`;
      linkWebsite.appendChild(linkWebsiteImage);
      // link to repository : anchor
      const linkRepository = document.createElement('a');
      linkRepository.href = item.url_repository;
      linkRepository.target = "_blank";
      linkRepository.rel = "noopener noreferrer";
      linksContainer.appendChild(linkRepository);
      // link to repository : image
      const linkRepositoryImage = document.createElement('img');
      linkRepositoryImage.classList = 'projects-cards--card-content-links--linkrepository--image';
      linkRepositoryImage.src = data.icons.clean;
      linkRepositoryImage.alt = `Icône et lien vers le répertoire GitHub du projet ${item.title} `;
      linkRepository.appendChild(linkRepositoryImage);
    });

    // Slideshow projects (carrousel)

    // get cards array
    let slides = document.getElementsByClassName("projects-cards--carddisplay");

    // display first project
    slides[0].style.display = "block";

    let slideIndex = 1;

    function slidesTotal(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      let index;

      // infinite slideshow
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      // hide all projects
      for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
      }

      // display a project
      slides[slideIndex - 1].style.display = "block";
    }

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