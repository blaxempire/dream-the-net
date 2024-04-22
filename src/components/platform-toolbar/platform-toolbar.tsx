import React from 'react';
import logo from '../../logo.svg';
import Menu from '../menu/menu.tsx';
import './platform-toolbar.css';



const PlatformToolbar = () => {

    const options = [{title: 'menu', link: ''}, {title: 'Contact', link: '/contact'}, {title: 'FAQ', link: ''}]

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="title">
            Dream The Net
          </p>
        </header>
        {Menu(options)}
      </div>
    )
}

export default PlatformToolbar