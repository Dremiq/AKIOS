import React from 'react';
import {connect} from 'react-redux';
import {fetchStartTp} from '../redux/actions/actionCreator';
import "../styles/Footer.scss";
import logo from '../assets/logo.png';

const Footer = (props) => {
    
    // Getting an element from the redux store so we could onClick scroll to that desired element (to avoid using the anchor tag and the href that changes the url)
    const handleTp = () => {
        let start_element = props.start_global_element.payload;
        start_element.scrollIntoView();
        document.body.style.overflow = "visible";
    };

    return(
        <div className="footer">
            <div className="footer-upper">
                <div onClick={handleTp} className="footer-upper-1"><img className="footer-upper-1-logo" alt="logo" src={logo}/><p className="footer-upper-1-logo-text">AKIOS</p></div>
                <div className="footer-upper-2">
                    <p className="footer-upper-2-item footer-upper-2-item-1">TERMS OF USE</p>
                    <p className="footer-upper-2-item">PRIVACY INFORMATION</p>
                    <p className="footer-upper-2-item">COOKIES INFORMATION</p>
                </div>
                <div className="footer-upper-3">
{/*FIRST IMG (LINKED IN IMG)*/}
                <div className="footer-upper-3-item">
                    <svg className="footer-upper-3-item-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M29.9925 30.0003V29.999H30V18.9965C30 13.614 28.8412 9.46777 22.5487 9.46777C19.5237 9.46777 17.4937 11.1278 16.665 12.7015H16.5775V9.97027H10.6112V29.999H16.8237V20.0815C16.8237 17.4703 17.3187 14.9453 20.5525 14.9453C23.7387 14.9453 23.7862 17.9253 23.7862 20.249V30.0003H29.9925Z" fill="#9A9A9A"/>
                    <path d="M0.494995 9.97168H6.715V30.0004H0.494995V9.97168Z" fill="#9A9A9A"/>
                    <path d="M3.6025 0C1.61375 0 0 1.61375 0 3.6025C0 5.59125 1.61375  7.23875 3.6025 7.23875C5.59125 7.23875 7.205 5.59125 7.205 3.6025C7.20375 1.61375 5.59 0 3.6025 0V0Z" fill="#9A9A9A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
{/*SECOND IMG (TWITTER IMG)*/}
                <div className="footer-upper-3-item">
                    <svg className="footer-upper-3-item-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M30 5.69813C28.8844 6.1875 27.6956 6.51187 26.4562 6.66937C27.7312 5.90812 28.7044 4.71187 29.1619 3.27C27.9731 3.97875 26.6606 4.47938 25.2619 4.75875C24.1331 3.55688 22.5244 2.8125 20.7694 2.8125C17.3644 2.8125 14.6231 5.57625 14.6231 8.96438C14.6231 9.45188 14.6644 9.92062 14.7656 10.3669C9.6525 10.1175 5.12813 7.66688 2.08875 3.93375C1.55812 4.85438 1.24688 5.90812 1.24688 7.0425C1.24688 9.1725 2.34375 11.0606 3.97875 12.1537C2.99062 12.135 2.02125 11.8481 1.2 11.3962C1.2 11.415 1.2 11.4394 1.2 11.4637C1.2 14.4525 3.33187 16.935 6.1275 17.5069C5.62687 17.6438 5.08125 17.7094 4.515 17.7094C4.12125 17.7094 3.72375 17.6869 3.35062 17.6044C4.1475 20.04 6.40875 21.8306 9.0975 21.8888C7.005 23.5256 4.34812 24.5119 1.47188 24.5119C0.9675 24.5119 0.48375 24.4894 0 24.4275C2.72438 26.1844 5.95312 27.1875 9.435 27.1875C20.7525 27.1875 26.94 17.8125 26.94 9.68625C26.94 9.41437 26.9306 9.15188 26.9175 8.89125C28.1381 8.025 29.1637 6.94313 30 5.69813Z" fill="#9A9A9A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
{/*THIRD IMG (FACEBOOK IMG)*/}
                <div className="footer-upper-3-item">
                    <svg className="footer-upper-3-item-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M22.4988 0.00624194L18.6085 0C14.2379 0 11.4134 2.89782 11.4134 7.38296V10.787H7.50188C7.16388 10.787 6.89017 11.061 6.89017 11.399V16.3311C6.89017 16.6691 7.16419 16.9428 7.50188 16.9428H11.4134V29.388C11.4134 29.726 11.6871 29.9997 12.0251 29.9997H17.1285C17.4665 29.9997 17.7402 29.7257 17.7402 29.388V16.9428H22.3137C22.6517 16.9428 22.9254 16.6691 22.9254 16.3311L22.9273 11.399C22.9273 11.2367 22.8627 11.0813 22.7481 10.9665C22.6336 10.8516 22.4775 10.787 22.3152 10.787H17.7402V7.90136C17.7402 6.5144 18.0707 5.81031 19.8775 5.81031L22.4981 5.80937C22.8358 5.80937 23.1095 5.53535 23.1095 5.19766V0.617952C23.1095 0.280575 22.8361 0.00686613 22.4988 0.00624194Z" fill="#9A9A9A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="29.9997" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
{/*FOURTH IMG (YOUTUBE IMG)*/}
                <div className="footer-upper-3-item">
                    <svg className="footer-upper-3-item-svg" width="30" height="30" viewBox="0 0 30 30" fill="" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="M29.3819 7.79845C29.0361 6.51328 28.0228 5.50026 26.7379 5.15419C24.3902 4.51172 14.9997 4.51172 14.9997 4.51172C14.9997 4.51172 5.60941 4.51172 3.26178 5.1297C2.00156 5.47554 0.963588 6.51351 0.617749 7.79845C0 10.1459 0 15.0141 0 15.0141C0 15.0141 0 19.9069 0.617749 22.2298C0.963817 23.5148 1.97684 24.528 3.26201 24.8741C5.63413 25.5166 14.9999 25.5166 14.9999 25.5166C14.9999 25.5166 24.3902 25.5166 26.7379 24.8986C28.023 24.5528 29.0361 23.5395 29.3821 22.2546C29.9999 19.9069 29.9999 15.0389 29.9999 15.0389C29.9999 15.0389 30.0246 10.1459 29.3819 7.79845Z" fill="#9A9A9A"/>
                    <path className="footer-upper-3-item-svg-custom" d="M12.0098 19.5117L19.8186 15.0141L12.0098 10.5166V19.5117Z" fill="#1C1C1C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <div className="footer-bottom-inner-hr"></div>
                    <p className="footer-bottom-inner-text">Copyright © 2020 AKIOS. All rights reserved. This website is for test purposes only and will not be used for any other purpose.</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    start_global_element: state.mainReducer.start_global_element
});

export default connect(mapStateToProps, {fetchStartTp})(Footer);