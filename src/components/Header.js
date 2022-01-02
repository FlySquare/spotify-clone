import React, {Component} from 'react';
import Logo from '../assets/logo-white.png';
import Avatar from '../assets/avatar.jpg';
import '../App.css';
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='headerImage' width='132' height='41' src={Logo} />
                <ul className='headerList'>
                    <li><a target='_blank' href='https://www.spotify.com/tr/premium/'>Premium</a></li>
                    <li><a target='_blank' href='https://support.spotify.com/tr/'>Destek</a></li>
                    <li><a target='_blank' href='https://www.spotify.com/tr/download/windows/'>İndir</a></li>
                    <li>|</li>
                    <li className='lastli'><a href="javascript:void(0)">
                        <img className='headerAvatar' src={Avatar} width='40' />
                        &nbsp;&nbsp; Profil
                        <i className="fas fa-chevron-down"></i>
                    </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;