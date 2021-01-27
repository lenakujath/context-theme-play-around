import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {

    static contextType = ThemeContext;

    // state = {};

    render() {

        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>A book</li>
                <li style={{background: theme.ui}}>Another book</li>
                <li style={{background: theme.ui}}>And another book</li>
            </ul>   
        </div>
   )
  }
}

export default BookList;
