import React, { Component } from 'react';
import NavItem from './NavItem';
import { BrowserRouter } from 'react-router-dom';

class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         'NavItemActive': ''
      }
   }

   activeItem = (x) => {
      if(this.state.NavItemActive.length > 0) {
         document.getElementById(this.state.NavItemActive).classList.remove('active');
      }
      this.setState({'NavItemActive': x}, () => { console.log(this.state.NavItemActive, "asdvboafb");
         document.getElementById(this.state.NavItemActive).classList.add('active');
      });
   }

   render() {
      return(
         
         <nav>
            <ul>
               <NavItem activec={this.activeItem} item="Home" toLink="/" />
               <NavItem activec={this.activeItem} item="About" toLink="/about" />
               <NavItem activec={this.activeItem} item="Education" toLink="/education" />
               <NavItem activec={this.activeItem} item="Skills" toLink="/skills" />
               <NavItem activec={this.activeItem} item="Contact" toLink="/contact" />
            </ul>
         </nav>
        
      );
   }
}

export default Navbar;