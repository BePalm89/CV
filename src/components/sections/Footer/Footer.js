import './Footer.css';
import { DATA_CV } from '../../../data/data';

export const Footer = () => {
    const { socialNetworks } = DATA_CV;

    return `
        <footer>
            <ul>
                ${socialNetworks.map(socialNetwork => {
                    return `
                        <li>
                            <a href="${socialNetwork.url}" target="_blank">
                                <img src="${socialNetwork.icon}" alt="${socialNetwork.socialNetwork}">
                            </a>
                        </li>
                    `
                }).join('')}
            </ul>
            <p>Create with 💝 by Claudia Palmerini</p>
        </footer>
    `
}