import React, {Component} from 'react';
import AppStore from '../assets/badge-tr.svg'
import GooglePlay from '../assets/badge-tr2.svg'
class FirstSlide extends Component {
    render() {
        return (
            <div className='firstSlide'>
                <div className='main'>
                    <p className='hastag'>#SPOTIFYWRAPPED</p>
                    <h1 className='title'>2021 Özeti hazır.</h1>
                    <div className="subheader">
                        <h2>Yalnızca Spotify uygulamasından erişebilirsin. Daha fazlasını keşfetmek için hemen indir.</h2>
                        <div className="markets">
                            <a target='_blank' href='https://play.google.com/store/apps/details?id=com.spotify.music'><img src={AppStore} width='151'/></a>
                            <a target='_blank' href='https://apps.apple.com/us/app/spotify-discover-new-music/id324684580'><img src={GooglePlay} width='154'/></a>
                        </div>
                        <a target='_blank' href='https://open.spotify.com/genre/2021-page' className='market-listen'>2021'in öne çıkan seslerini burada dinle.</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstSlide;