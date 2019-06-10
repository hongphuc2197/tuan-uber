import React from 'react';

import './Toolbar.scss';
import Logo from './../../Logo/Logo';
import ToggleButton from './../../UI/Button/ToggleButton/ToggleButton';

const toolbar = (props) => (
    <header className = "Toolbar" >
        <div className="Logo">
            <Logo/>
        </div>
        <div className="ToggleButton">
            <ToggleButton/>
        </div>

    </header>
)

export default toolbar;