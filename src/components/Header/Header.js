import Navigation from '../Navigation/Navigation';
import {FaWhatsapp} from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
    return(
        <header className="header">
            <div className="innerWrapper">
                <div className="header__top">
                <div className="header__logo">
                        <Logo className="header__logoImg"/>
                        <h2 className="logo__txt">Cabaz Natura</h2>
                    </div>
                </div>
                <div className="header__bottom">
                <Navigation />
                <a href="https://wa.me/+351919500037" className="u-link u-link--whatsApp"><FaWhatsapp className='whatsApp__icon'/>+351 919 500 037</a>
                <button className="btn btn--cta">Order now</button>
                </div>
            </div>
        </header>
    )
}

export default Header;