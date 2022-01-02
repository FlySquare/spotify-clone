import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <FirstSlide />
                <SecondSlide />
                <Footer />
            </div>
        );
    }
}

export default App;