import "./WrapperProjectCards.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const WrapperProjectCards = (projects, parentElement) => {
    
    const cardsProjectWrapper = document.createElement('div');
    cardsProjectWrapper.classList.add('cards-project-wrapper');

    for (const project of projects) {
        cardsProjectWrapper.innerHTML += ProjectCard(project);
    }
    
    parentElement.appendChild(cardsProjectWrapper);
};
