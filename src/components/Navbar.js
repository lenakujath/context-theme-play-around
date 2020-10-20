import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


class Navbar extends Component {

    static contextType = ThemeContext;

    state = {

    }

    render() {

        console.log(this.context);
        const  { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (


        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>


   )
  }
}

export default Navbar;

