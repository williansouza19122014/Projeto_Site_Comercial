import { useContext, useState } from 'react';
import {isRouteErrorResponse, Link} from 'react-router-dom';

//ASSETS
import './Header.css'
import Logo from '../../assets/dnc-logo.svg';

//COMPONETS
import Button from '../Button/Button';

//CONTEXT
import { AppContext } from '../../contexts/AppContext';


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const appContext = useContext(AppContext)



    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}></img></Link>
                    <div className='mobile-menu'>
                        <Button buttonStyle='secondary' onClick={() => setIsOpen(!isOpen)}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                    <Button buttonStyle="unstyle" className="mobile-menu close-btn">x</Button>
                    <ul className='d-flex'>
                        <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                        <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                        <li><Link to="/Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                        <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;