import {useState, useEffect} from 'react';
import Navigation from '../Navigation/Navigation';
import {FaWhatsapp, FaShoppingBasket, FaSearch} from 'react-icons/fa';
import {HiOutlineMenu} from 'react-icons/hi';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {

    let [menuOpen, setMenuOpen] = useState(false);
    let [menuClass, setMenuClass] = useState('');
    let className = null;

    let openMenu = () => {
        setMenuOpen(!menuOpen);
        className = menuOpen ? 'active' : '';
        setMenuClass(className);
    };

    useEffect(() => openMenu)

    return(
        <>
            <header className="header">
                <div className="innerWrapper">
                    <div className="header__top">
                        <div className="header__logo">
                            <Logo className="header__logoImg"/>
                            <h2 className="logo__txt">Cabaz Natura</h2>
                        </div>
                        <div className="header__search">
                            <input type="text" className='u-input u-input--headerSearch' placeholder='Search our products ...'/>
                            <button type="submit" className='btn btn--main btn--headerSearch'> <FaSearch /> </button>
                        </div>
                        <FaShoppingBasket className='header__basket'/>
                    </div>
                    <div className="header__bottom">
                        <Navigation />
                        <a href="https://wa.me/+351919500037" className="u-link u-link--whatsApp"><FaWhatsapp className='whatsApp__icon'/>+351 919 500 037</a>
                        <button className="btn btn--cta">Order now</button>
                    </div>
                </div>
            </header>

            <header className="header--mobile">
                <div className="header__logo">
                    <Logo className="header__logoImg"/>
                    <h2 className="logo__txt">Cabaz Natura</h2>
                </div>
                <HiOutlineMenu className={`hamburgerMenu`} onClick={openMenu}/>
                <Navigation className={`mobileMenu ${menuClass}`} />
            </header>
        </>

    )
}

export default Header;