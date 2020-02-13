import React, { Component } from 'react';
import Social from '../components/Social';

class About extends Component {
   render() {
      return(
         <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h1>I'm Richard Tinajero</h1>
            <h3><u>Full Stack Developer</u></h3>
            <br></br>
            <p>I’m a Software Developer with 4+ years of work experience in operational manufacturing and deployment. 
               I’m passionate about building products that better suit the needs of the customer. I recently graduated from Bloc’s Full 
               Stack Web Developer program which taught me the concepts and technologies needed to build applications that are usable in the 
               industry by using modern JavaScript frameworks. </p>
            <Social />
         </div>
      );
   }
}

export default About;