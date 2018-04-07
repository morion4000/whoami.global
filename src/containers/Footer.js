import React, { Component } from 'react';

import Web3 from './Web3.js';


class Footer extends Component {
  render() {
    return (
     <footer className="bg-gray text-light footer-long">
       <div className="container">
         <div className="row">
           <div className="col-12 col-md-3">
             <img alt="Image" src="assets/img/logo-white.svg" className="mb-4" />
             <p className="text-muted">
               © 2018 Whoami.global
             </p>
           </div>
           <div className="col-12 col-md-9">
             <span className="h5">A robust suite of styled components for Bootstrap 4</span>
             <div className="row no-gutters">
               <div className="col-6 col-lg-3">
                 <h6>Navigate</h6>
                 <ul className="list-unstyled">
                   <li>
                     <a href="index.html">Overview</a>
                   </li>
                   <li>
                     <a href="pages-landing.html">Landing Pages</a>
                   </li>
                   <li>
                     <a href="pages-app.html">App Pages</a>
                   </li>
                   <li>
                     <a href="pages-inner.html">Inner Pages</a>
                   </li>
                 </ul>
               </div>
               <div className="col-6 col-lg-3">
                 <h6>Platform</h6>
                 <ul className="list-unstyled">
                   <li>
                     <a href="#">Mac OS &amp; iOS</a>
                   </li>
                   <li>
                     <a href="#">Android &amp; Chrome OS</a>
                   </li>
                   <li>
                     <a href="#">Windows</a>
                   </li>
                   <li>
                     <a href="#">Linux</a>
                   </li>
                 </ul>
               </div>
               {/*end of col*/}
               <div className="col-6 col-lg-3">
                 <h6>Community</h6>
                 <ul className="list-unstyled">
                   <li>
                     <a href="#">Forum</a>
                   </li>
                   <li>
                     <a href="#">Knowledgebase</a>
                   </li>
                   <li>
                     <a href="#">Hire an expert</a>
                   </li>
                   <li>
                     <a href="#">FAQ</a>
                   </li>
                   <li>
                     <a href="#">Contact</a>
                   </li>
                 </ul>
               </div>
               <div className="col-6 col-lg-3">
                 <h6>Company</h6>
                 <ul className="list-unstyled">
                   <li>
                     <a href="#">About company</a>
                   </li>
                   <li>
                     <a href="#">History</a>
                   </li>
                   <li>
                     <a href="#">Team</a>
                   </li>
                   <li>
                     <a href="#">Investment</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}

export default Footer
