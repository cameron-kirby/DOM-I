const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update links in nav
let keys = Object.keys(siteContent.nav)
keys.pop();

document.querySelectorAll('nav a').forEach((a, idx) => {
  a.textContent = siteContent.nav[keys[idx]];
});

// Update of cta section
let ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent.cta.h1;

let ctabutton = document.querySelector('.cta-text button');
ctabutton.textContent = siteContent.cta.button;

document.getElementById("cta-img").setAttribute('src', siteContent.cta['img-src']);

// Update of main-content section
let topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].firstElementChild.textContent = siteContent['main-content']['features-h4'];
topContent[0].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['features-content'];
topContent[1].firstElementChild.textContent = siteContent['main-content']['about-h4'];
topContent[1].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['about-content'];

document.querySelector('.middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].firstElementChild.textContent = siteContent['main-content']['services-h4'];
bottomContent[0].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['services-content'];
bottomContent[1].firstElementChild.textContent = siteContent['main-content']['vision-h4'];
bottomContent[1].firstElementChild.nextElementSibling.textContent = siteContent['main-content']['vision-content'];

// Update of contact section
let contact = document.querySelector('.contact');

contact.firstElementChild.textContent = siteContent['contact']['contact-h4'];
contact.firstElementChild.nextElementSibling.textContent = siteContent['contact']['address'];
contact.firstElementChild.nextElementSibling.nextElementSibling.textContent = siteContent['contact']['phone'];
contact.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent['contact']['email'];

// Update of footer section
document.querySelector('footer').firstElementChild.textContent = siteContent['footer']['copyright'];

// create link out of thin air, put it in a variable
const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

// add all the attrs and content it needs
newLink1.href = '#';
newLink1.textContent = 'NewLink1';
newLink2.href = '#';
newLink2.textContent = 'NewLink2';

// append it to the nav

document.querySelector('nav').appendChild(newLink1);
document.querySelector('nav').prepend(newLink2)