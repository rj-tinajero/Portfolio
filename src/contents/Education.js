import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Social from '../components/Social';

class Education extends Component {
   render() {
      return(
         <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Developer Apprenticeship" where="Bloc" from="Oct 2018" to="Aug 2019" />
            <Widecard title="Bachelors of Science" where="University of California, Riverside" from="Sept 2010" to="Jun 2014" />
            <Social />
         </div>
      );
   }
}

export default Education;