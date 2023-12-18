import './ContactMe.css';
import { Title } from '../../shared/Title/Title';
import { Input } from '../../shared/Input/Input';
import { TextArea } from '../../shared/TextArea/TextArea';
import { Button } from '../../shared/Button/Button';
import { DATA_CV } from '../../../data/data';

export const ContactMe = () => {
    const { infos } = DATA_CV

    return `
        <section id="contact">
            <div class="contact-container fix-width">
                ${Title('Contact Me')}
                <div class="contact-infos-form-container">
                    <div class="contact-infos container">
                        ${infos.map((info) => {
                            return `
                                <div class="infos-text">
                                    <h4>${info.id}</h4>
                                    <p>${info.data}</p>
                                </div>`
                        }).join('')}
                    </div>
                    <div class="contact-form container">
                        <form>
                            <div class="form-controls">
                                ${Input('Name')}
                                ${Input('Email')}
                            </div>
                            <div class="form-control-subject">
                                ${Input('Subject')}
                                ${TextArea('Message')}
                            </div>
                            ${Button('Contact Me', 'primary')}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
}