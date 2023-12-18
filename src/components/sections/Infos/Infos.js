import './Info.css';
import { DATA_CV } from '../../../data/data';

export const Infos = () => {
    return `
        <section id="infos">
            <div class="infos-container fix-width">
                <ul>
                    ${DATA_CV.infos.map(info => {
                        return `
                            <li>
                                <img src=${info.icon} alt=${info.id} />
                                <p>${info.data}</p>
                            </li>
                        `
                    }).join('')}
                </ul>
            </div>
        </section>
    `
}