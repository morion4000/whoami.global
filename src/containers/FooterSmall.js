import React, { Component } from 'react';

class FooterSmall extends Component {
  render() {
    return (
      <footer className="footer-short">
       <div className="container">
         <hr />
         <nav className="row justify-content-between align-items-center">
           <div className="col-auto">
             <ul className="list-inline">
               <li className="list-inline-item">
                 <a href="#">
                   <img alt="Image" src="assets/img/logo-gray.svg" />
                 </a>
               </li>
               <li className="list-inline-item">
                 <a href="#">Overview</a>
               </li>
               <li className="list-inline-item">
                 <a href="#">Documentation</a>
               </li>
               <li className="list-inline-item">
                 <a href="#">Changelog</a>
               </li>
             </ul>
           </div>
           <div className="col-auto text-sm-right">
             <ul className="list-inline">
               <li className="list-inline-item">
                 <a href="#"><i className="socicon-twitter" /></a>
               </li>
               <li className="list-inline-item">
                 <a href="#"><i className="socicon-facebook" /></a>
               </li>
             </ul>
           </div>
         </nav>
         <div className="row">
           <div className="col">
             <small>© 2018 Whoami</small>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}

export default FooterSmall
