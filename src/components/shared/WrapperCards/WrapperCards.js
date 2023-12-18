import './WrapperCards.css';
import { Card } from '../Card/Card';

export const WrapperCards = (data, style, icon) => {

    return `
        <div class="cards-wrapper">
            ${data.map((data) => {
                return Card(data, style, icon)
            }).join("")}
        </div>
    `
}