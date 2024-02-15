import './Filter.css';

const FILTERS = ['all', 'css', 'js', 'react', 'api'];

export const Filter = () => {
    return `
        <div id="filters">
            <ul>
                ${FILTERS.map((filter) => {
                    return `
                        <li>${filter.toUpperCase()}</li>
                    `
                }).join("")}
            </ul>
        </div>
    `
}