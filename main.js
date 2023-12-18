import './style.css'
import { Navbar } from './src/components/sections/Nabvar/Navbar';
import { Herobox } from './src/components/sections/HeroBox/Herobox';
import { AboutMe } from './src/components/sections/AboutMe/AboutMe';
import { Infos } from './src/components/sections/Infos/Infos';
import { Experiece } from './src/components/sections/Experience/Experience';
import { Skills } from './src/components/sections/Skills/Skills';
import { Education } from './src/components/sections/Education/Education';
import { Projects } from './src/components/sections/Projects/Projects';
import { ContactMe } from './src/components/sections/ContactMe/ContactMe';
import { Footer } from './src/components/sections/Footer/Footer';
import { playTyping, handleDownload, handleViewPortfolio, handleChangeLinkState, createScrollHandler } from './utils';

const divApp = document.querySelector('#app');
const mainElement = document.createElement('main');

const buildApp = () => {

    divApp.innerHTML += Navbar();
    
    divApp.appendChild(mainElement);
    
    mainElement.innerHTML += Herobox();
    
    mainElement.innerHTML += AboutMe();
    
    mainElement.innerHTML += Infos();
    
    mainElement.innerHTML += Experiece();
    
    mainElement.innerHTML += Skills();
    
    mainElement.innerHTML += Education();
    
    mainElement.innerHTML += Projects();
    
    mainElement.innerHTML += ContactMe();
    
    mainElement.innerHTML += Footer();

}

buildApp();

// Typing animation
const typingElement = document.querySelector('.typing');
playTyping(typingElement);

// Download and view portfolio 
const downloadDocumentCVButton = document.querySelector('.cta .btn.outline');
const viewPorfolioButton = document.querySelector('.cta .btn.primary');

downloadDocumentCVButton.addEventListener('click', handleDownload);
viewPorfolioButton.addEventListener('click', handleViewPortfolio);

//Open and close nav bar for tablet and mobile
const burgerMenuElement = document.querySelector("#menu");

burgerMenuElement.addEventListener("click", () => {
  const smallDeviceNav = document.querySelector("#small-device-nav");
  smallDeviceNav.classList.toggle("open");
});

// Change state (color) of link while scrolling into a particular section
const linksElements = document.querySelectorAll('#desktop-nav ul li');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => handleChangeLinkState(linksElements, sections));

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {

    let links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.hash.substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offset = document.querySelector('nav').offsetHeight;
                const targetOffset = target.offsetTop - offset - 20;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Horizonatl scrolling with arrows to show all experience and education cards
const nextButtonExperience = document.querySelector('#experience #next-arrow-primary');
const prevButtonExperience = document.querySelector('#experience #prev-arrow-primary');
const nextButtonEducation = document.querySelector('#education #next-arrow-secondary');
const prevButtonEducation = document.querySelector('#education #prev-arrow-secondary');

const experienceScrollHandler = createScrollHandler('experience');
const educationScrollHandler = createScrollHandler('education');

nextButtonExperience.addEventListener('click', (event) => experienceScrollHandler(event, 'next'));
prevButtonExperience.addEventListener('click', (event) => experienceScrollHandler(event, 'prev'));
nextButtonEducation.addEventListener('click', (event) => educationScrollHandler(event, 'next'));
prevButtonEducation.addEventListener('click', (event) => educationScrollHandler(event, 'prev'));
