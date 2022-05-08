import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    

  return (
    <div>
         <ul className="nav">
           <li >
               <Link to="/" >Home page</Link>
           </li>
          </ul>
    </div>
  )
}

export default Header