import React, { Component } from 'react';

import Web3 from './Web3.js';


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
                 <a href="/overview">Overview</a>
               </li>
               <li className="list-inline-item">
                 <a href="/changelog">Changelog</a>
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
               <li className="list-inline-item">
                  <Web3 />
               </li>
             </ul>
           </div>
         </nav>
         <div className="row">
           <div className="col">
             <small>© 2018 Whoami.global</small>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}

export default FooterSmall;
