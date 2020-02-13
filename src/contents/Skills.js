import React, { Component } from 'react';
import arrayChunk from 'lodash.chunk';
import Social from '../components/Social';

class Skills extends Component {
   constructor(props) {
      super(props);
      this.state = {
         'mySkills': [
            {
               name: 'HTML',
               icon: <i class="fab fa-html5 fa-4x"></i>
            },
            {
               name: 'CSS',
               icon: <i class="fab fa-css3-alt fa-4x"></i>
            },
            {
               name: 'JAVASCRIPT',
               icon: <i class="fab fa-js fa-4x"></i>
            },
            {
               name: 'NODE',
               icon: <i class="fab fa-node-js fa-4x" style={{color: '#51cf66'}}></i>
            },
            {
               name: 'REACT',
               icon: <i class="fab fa-react fa-4x" style={{color: 'rgb(0, 216, 255)'}}></i>
            },
            {
               name: 'GIT',
               icon: <i class="fab fa-git-alt fa-4x" style={{color: '#ff6b6b'}}></i>
            },
            {
               name: 'GITHUB',
               icon: <i class="fab fa-github fa-4x"></i>
            },
            {
               name: 'SQL',
               icon: <i class="fas fa-database fa-4x"></i>
            },
            {
               name: 'VUE',
               icon: <i class="fab fa-vuejs fa-4x" style={{color: '#4fc08d'}}></i>
            },
            {
               name: 'BOOTSTRAP',
               icon: <i class="fab fa-bootstrap fa-4x" style={{color: '#6610f2'}}></i>
            },
            {
               name: 'CHROME DEV TOOLS',
               icon: <i class="fab fa-chrome fa-4x"></i>
            }
         ]
      }
      this.chunkedData = arrayChunk(this.state.mySkills, 6);
   }
   
   render() {
      return(
         // <div className="condiv skills">
         //    <h1 classname="subtopic">My Skills</h1>
            
         //       {this.state.mySkills.map((value) => { 
                  
         //    return   <div className="col-12 col-md-6 col-lg-4 mb-4 mt-4">
         //                <div className="row">
         //                   <div className="col-md">
         //                      {value.icon}<br></br>{value.name}
         //                   </div>
                           
         //                </div>
         //             </div>
                  
         //       })}
            
         // </div>
         <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <div className="container">
               {this.chunkedData.map((row, rowIndex) => {
                  return (<div key={rowIndex} className="row">{
                     row.map((col, colIndex) => {return (<div key={colIndex}
                        className="col-sm">{col.icon}<br></br>{col.name}</div>)})
                  }
                  </div>)
               })

               }
            </div>
            <Social />
         </div>

      );
   }


}

export default Skills;