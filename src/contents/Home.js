import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/richard1.jpg';

import Social from '../components/Social';

class Home extends Component {
   render() {
      return(
         <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" 
               text={["I'm Richard Tinajero!", 'I am a web developer!', 'Welcome to my site!', 'Feel free to browse around', 'Wow...you still here? :)']}
               speed={100} eraseDelay={700} />
            <Social />
         </div>
         
      );
   }
}

export default Home; 