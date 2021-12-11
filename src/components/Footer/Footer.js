import './Footer.css';
import {RiVisaLine, RiMastercardFill, RiPaypalFill} from 'react-icons/ri';
import {FaFacebookF, FaPhoneAlt, FaHome, FaRegEnvelope, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import {FaGooglePay, FaCcApplePay} from 'react-icons/fa';
import Logo from '../Logo/Logo';

const LINKS = ['Offers', 'About us', 'Privacy policy', 'Terms of service'];
const CATEGORIES = ['Vegetables', 'Fruits', 'Confectionery'];

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__newsletter">
                <div className="innerWrapper">
                    <h2 className="footer__newsletterTitle">Subscribe to our Newsletter &amp; Offers</h2>
                    <h4 className="footer__newsletterSubtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam iste minus doloribus inventore repellat modi necessitatibus, porro iusto totam.</h4>

                    <div className="newsletter__form">
                        <input type="text" className="u-input newsletter__input" placeholder="Enter your email"/>
                        <button className="btn btn--main">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer__top">
                <div className="innerWrapper">
                    <div className="footer__branding">
                    <Logo className="footer__logo" />
                        <h3 className="footer__title"> Cabaz Natura</h3>
                        <p className="footer__brandingTxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed officia! Aspernatur repudiandae architecto inventore ad aperiam? Minima blanditiis expedita itaque doloribus nobis, nam, quos quas, voluptatum vitae eveniet delectus!</p>
                    </div>
                    <div className="footer__menu">
                        <div className="footer__menuCategories">
                            <h3 className="footer__title">Categories</h3>
                            {CATEGORIES.map(category => <a href="/#" className="u-link footer__linkItem">{category}</a>)}
                        </div>
                        <div className="footer__menuLinks">
                            <h3 className="footer__title">Links</h3>
                            {LINKS.map(link => <a href="/#" className="u-link footer__linkItem">{link}</a>)}
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <h3 className="footer__title">Get in touch</h3>
                        <div className="footer__social">
                            <FaFacebookF className='footer__socialLink' />
                            <FaTwitter className='footer__socialLink' />
                            <FaLinkedinIn className='footer__socialLink' />
                            <FaInstagram className='footer__socialLink' />
                            <FaWhatsapp className='footer__socialLink' />
                        </div>
                        <div className="footer__address">
                            <FaHome className="contact__icon"/>
                            <span className="contact__content">Aldeia do Meco, 2970 Aldeia Do Meco <br /> Setubal, Portugal</span>
                        </div>
                        <div className="footer__phone">
                            <FaPhoneAlt className="contact__icon"/>
                            <a href="tel:+351919500037" className="u-link contact__content">+351 919 500 037</a>
                        </div>
                        <div className="footer__email">
                            <FaRegEnvelope className="contact__icon"/>
                            <a href="mailto:geral@cabaznatura.pt" className="u-link contact__content">geral@cabaznatura.pt</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="innerWrapper">
                    <p className="footer__copyright">Copyright &copy; 2021 - Cabaz Natura</p>
                    <p className="footer__developedBy">Developed with &hearts; by <a href="https://ptmartins.github.io" className="u-link">Pedro Martins</a></p>
                    <div className="footer__payments">
                        <span>We accept:</span>
                        <span className="payment">
                            <RiVisaLine color="#1A1F71"/>
                        </span>
                        <span className="payment">
                            <RiMastercardFill color="ff5f00"/>
                        </span>
                        <span className="payment">
                            <RiPaypalFill color="003087" />
                        </span>
                        <span className="payment">
                            <FaGooglePay color="#3A81F1" />
                        </span>
                        <span className="payment">
                            <FaCcApplePay />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;