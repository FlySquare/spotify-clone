import React, {Component} from 'react';
import Logo from '../assets/logo-white.png';
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                   <div className="logo">
                       <img src={Logo} width={132} height={41}/>
                   </div>
                   <div className="company">
                       <h3>Şirket</h3>
                       <a target='_blank' href='https://www.spotify.com/tr/about-us/contact/'>Hakkında</a>
                       <a target='_blank' href='https://www.lifeatspotify.com/'>Kariyer</a>
                       <a target='_blank' href='https://newsroom.spotify.com/'>For the Record</a>
                   </div>
                   <div className="community">
                       <h3>Topluluklar</h3>
                       <a target='_blank' href='https://artists.spotify.com/tr'>Sanatçılar İçin</a>
                       <a target='_blank' href='https://developer.spotify.com/'>Geliştiriciler</a>
                       <a target='_blank' href='https://ads.spotify.com/en-US/'>Reklam</a>
                       <a target='_blank' href='https://investors.spotify.com/home/default.aspx'>Yatırımcılar</a>
                       <a target='_blank' href='https://spotifyforvendors.com/'>Satıcılar</a>
                   </div>
                   <div className="connections">
                       <h3>Yararlı Bağlantılar</h3>
                       <a target='_blank' href='https://support.spotify.com/tr/'>Destek</a>
                       <a target='_blank' href='https://open.spotify.com/'>Web Çalar</a>
                       <a target='_blank' href='https://www.spotify.com/tr/download/windows/'>Ücretsiz Mobil Uygulama</a>
                   </div>
                   <div className="social-media">
                       <a target='_blank' href='https://instagram.com/spotify'><i className="fab fa-xl fa-instagram"></i></a>
                       <a target='_blank' href='https://twitter.com/spotify'><i className="fab fa-xl fa-twitter"></i></a>
                       <a target='_blank' href='https://www.facebook.com/SpotifyTR/?brand_redir=6243987495'><i className="fab fa-xl fa-facebook-f"></i></a>
                   </div>
            </div>
        );
    }
}

export default Footer;