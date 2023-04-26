import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'


const MaybeShowNavBar=({ children}) =>{
      
      const location =  useLocation();
        
       const [showNavBar, setShowNavBar] = useState(false)
       
       useEffect(() =>{
         console.log('this is location: ', location)
          if (location.pathname === '/admin' ||  location.pathname==="/Emp" ||  location.pathname==="/delivery/ad" || location.pathname==="/report") {
                setShowNavBar(false)
                    
          } else {
                setShowNavBar(true)
          }
        }, [location])
        return (
           <div>{showNavBar && children} </div>
          )
        }
export default MaybeShowNavBar