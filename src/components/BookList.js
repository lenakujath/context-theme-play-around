import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {

    static contextType = ThemeContext;
    state = {

    }

    render() {

        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (


        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>How innovation works</li>
                <li style={{background: theme.ui}}>The Glass Bead Game</li>
                <li style={{background: theme.ui}}>The Way of Things</li>
            </ul> 

           
        </div>


   )
  }
}

export default BookList;
