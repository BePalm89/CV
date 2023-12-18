import './TextArea.css';

export const TextArea = (placeholder) => {
    return `
        <textarea placeholder="${placeholder}* :" rows="4"></textarea>
    `
}