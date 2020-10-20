import React from 'react';

import { ThemeContext } from '../context/ThemeContext';


class ThemeToggle extends React.Component {

    static contextType= ThemeContext;

  render() {
    const { toggleTheme } = this.context;
  return (

     

    <div className="App">
        <button onClick={toggleTheme}> Toggle the Theme</button>
    
    </div>
  );
  
  }
}

export default ThemeToggle;
