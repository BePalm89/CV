const textToDisplay = "Frontend Engineer";
let index = 0;
let isAdding = true;

export const playTyping = (typingElement) => {
    setTimeout(
      () => {
        typingElement.innerText = textToDisplay.slice(0, index);
  
        if (isAdding) {
          index++;
          if (index > textToDisplay.length) {
            isAdding = false;
            setTimeout(() => playTyping(typingElement), 1000);
            return;
          }
        } else {
          index--;
          if (index === 0) {
            isAdding = true;
          }
        }
  
        playTyping(typingElement);
      },
      isAdding ? 120 : 80
    );
};


// Download CV
export const handleDownload = () => {
  window.open("/cv/CV_2023_EN.pdf");
}

// View portfolio 
export const handleViewPortfolio = () => {
  window.open("https://bepalm-portfolio.netlify.app/");
}

// Smooth scrolling for anchor links
export const handleChangeLinkState = (linksElements, sections) => {

  const currentScrollPosition = window.scrollY + 450;

  const activeSectionIndex = Array.from(sections)
    .findIndex(section => currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetTop + section.offsetHeight);

  linksElements.forEach(link => link.classList.toggle('active', false));
  if (activeSectionIndex !== -1) {
    linksElements[activeSectionIndex].classList.add('active');
  }
};

// Horizonatl scrolling with arrows to show all experience and education cards

const getScrollContainer = (section) => document.querySelector(`#${section} .${section}-container .cards-wrapper`);
const getCardWidth = (section) => document.querySelector(`.${section}-container .card-container`).offsetWidth;
const cardsToScroll = 2;

export const createScrollHandler = (section) => (event, direction) => {
  event.preventDefault();

  const container = getScrollContainer(section)
  const cardWidth = getCardWidth(section)

  const scrollAmount = cardWidth * cardsToScroll * (direction === 'next' ? 1 : -1);
  container.scrollLeft += scrollAmount;
};