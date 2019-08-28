import React from 'react'

class SocialIcons extends React.Component {
//  handleClickEmail(){

//  }
 
 render(){
     return (

     <div className="handles">
             <a className="github-link" href="https://github.com/rjk79" target="_blank">
             <img className="icon" src={githubURL} />
         </a>
         <a className="linkedin-link" href="https://www.linkedin.com/in/robert-ku-b9464461" target="_blank">
             <img className="icon" src={linkedinURL} />
         </a>
         {/* <a class="envelope-link" href="mailto:robertku79@gmail.com">
            <i class="fas fa-envelope-square"></i>
         </a> */}
         {/* credit to font awesome for email icon */}
     </div>
     )
 }
}

export default SocialIcons