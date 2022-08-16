import data from "./data.js";

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

    // résumé link text
    const resumeLink = document.createElement('a');
    resumeLink.classList = 'header-navbar-link';
    resumeLink.href = '#intro';
    resumeLink.textContent = 'Résumé';
    navbarContainer.appendChild(resumeLink);
    // résumé link icon
    const resumeIcon = document.createElement('img');
    resumeIcon.classList = 'header-navbar-icon';
    const resumeIconData = data.header.resumeicon;
    resumeIcon.src = resumeIconData;
    navbarContainer.appendChild(resumeIcon);

    // social link text
    const socialLink = document.createElement('a');
    socialLink.classList = 'header-navbar-link';
    socialLink.href = '#social';
    socialLink.textContent = 'Réseaux Sociaux';
    navbarContainer.appendChild(socialLink);
    // social link icon
    const socialIcon = document.createElement('img');
    socialIcon.classList = 'header-navbar-icon';
    const socialIconData = data.header.socialicon;
    socialIcon.src = socialIconData;
    navbarContainer.appendChild(socialIcon);

    // project link text
    const projectLink = document.createElement('a');
    projectLink.classList = 'header-navbar-link';
    projectLink.href = '#project';
    projectLink.textContent = 'project';
    navbarContainer.appendChild(projectLink);
    // project link icon
    const projectIcon = document.createElement('img');
    projectIcon.classList = 'header-navbar-icon';
    const projectIconData = data.header.projecticon;
    projectIcon.src = projectIconData;
    navbarContainer.appendChild(projectIcon);

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
    const locationIconData = data.intro.locationicon;
    locationIcon.src = locationIconData;
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

  init: function () {
    app.container();
    app.header();
    app.main();
    app.footer();
    app.intro();
    app.social();
    app.projects();
  }

};

document.addEventListener('DOMContentLoaded', app.init);