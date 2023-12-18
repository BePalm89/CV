import './AboutMe.css';
import { Button } from '../../shared/Button/Button';
import { DATA_CV } from '../../../data/data';

export const AboutMe = () => {
    return `
        <section id="about-me">
            <div class="about-me-container fix-width">
                <div class="about-me-img-container">
                    <img src="https://res.cloudinary.com/dmrv2bogq/image/upload/v1701157053/Single%20page%20CV/profile-2.jpg" alt="photo-profile-2">
                </div>
                <div class="about-me-info">
                    <div class="about-me-info-text">
                        <h2>Do some awesome stuff with me.</h2>
                        <h3>Web developer & UX/UI Design</h3>
                        <p>${DATA_CV.description}</p>
                    </div>
                    <div class="cta">
                        ${Button('View Portfolio', 'primary')}
                        ${Button('Download CV', 'outline')}
                    </div>
                </div>
            </div>
        </section>
    `
}