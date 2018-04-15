import React, { Component } from 'react';
import style from './style.css';
import BackgroundSVG from './assets/background.svg';

class App extends Component {

    render() {
        return (
            <div className={style.app}>
                <div className={style.background}>
                    <BackgroundSVG className={style.backgroundSvg} />
                </div>
                <div>
                    My React App
                </div>
            </div>
        );
    }

}

export default App;
