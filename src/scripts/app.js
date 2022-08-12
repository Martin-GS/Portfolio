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
   *  "projects" : card-presentation of projects and links
  */
  projects: function () {
    // container
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    projectsDiv.id = 'projects';
    projectsDiv.textContent = "Projets";
    app.mainElement.appendChild(projectsDiv);
    // cards
    const projectsData = data.projects;
    console.log(projectsData);
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