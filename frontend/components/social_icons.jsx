import React from 'react'

class SocialIcons extends React.Component {
//  handleClickEmail(){

//  }
 
 render(){
     return (

     <div className="handles">
         <a className="github-link" href="https://github.com/rjk79">
             <img className="icon" src={githubURL} />
         </a>
         <a className="linkedin-link" href="https://www.linkedin.com/in/robert-ku-b9464461">
             <img className="icon" src={linkedinURL} />
         </a>
         {/* <img className="icon letter-icon" src={letterURL} onClick={this.handleClickEmail} /> */}
     </div>
     )
 }
}

export default SocialIcons