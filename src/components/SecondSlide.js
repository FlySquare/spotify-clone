import React, {Component} from 'react';

class SecondSlide extends Component {
    render() {
        return (
            <div className='secondSlide'>
                <div className="padding">
                    <h1 className='title'>Kaldığın yerden devam et</h1>
                    <h2>
                        Müziğini dinlemeye bıraktığın yerden devam et.
                    </h2>
                    <a className='button' href='https://open.spotify.com/'><span className='span'>WEB PLAYER'I AÇ</span></a>
                </div>
            </div>
        );
    }
}

export default SecondSlide;